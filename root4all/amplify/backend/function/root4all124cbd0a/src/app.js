/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var mysql = require("mysql");
// declare a new express app
var app = express()

const databaseConfig = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.port,
    database: process.env.database
}
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
});

// Return the suburb name if these exist, else return null
function handleSuburbInput(input){
    console.log("RUN Handle");
    return new Promise(function (resolve, reject){
        let connection = mysql.createConnection(databaseConfig);

        const numberReg = /^[0-9]*$/

        connection.connect(function(err) {
            if (err) {
                console.error('Database connection failed: ' + err.stack);
                return;
            }
            console.log('Connected to database.');
        });

        // If input is all digital, try to transfer this to the suburb name
        let queryString = "";
        if (numberReg.test(input)){
            queryString = `SELECT Locality_Name FROM localityFinder where Post_Code="${input}"`;
            connection.query(queryString, function (error, results, fields){
                if (error){
                    console.error(error)
                    resolve("");
                } else {
                    if (results.length === 0) {
                        connection.destroy();
                        resolve("");

                    } else {
                        resolve(results[0]["Locality_Name"]);

                    }
                }
            });
        } else {
            queryString = `SELECT Locality_Name FROM localityFinder where Locality_Name="${input}"`;
            connection.query(queryString, function (error, results, fields){
                if (error){
                    console.error(error)
                    return  "";
                } else {
                    if (results.length === 0) {
                        connection.destroy();
                        resolve("");

                    } else {
                        resolve(results[0]["Locality_Name"]);
                    }
                }
            });
        }
    });

}




app.get('/checkAgency', function (req, res) {
    // Add your code here
    var connection = mysql.createConnection(databaseConfig);
    connection.connect(function(err) {
        if (err) {
            console.error('Database connection failed: ' + err.stack);
            return;
        }
        console.log('Connected to database.');
    });

    var inputString = req.query["inputString"]
    var queryString = `SELECT count(*) AS num_agency FROM agencies where Agency_Name="${inputString}"`;
    connection.query(queryString, function (error, results, fields){
        if (error){
            console.error(error)
        } else {
            console.log(results);
            var num_agency = results[0].num_agency;
            if (num_agency > 0 ){
                res.json({success: 'get call succeed!', found: true});
            } else {
                res.json({success: 'get call succeed!', found: false});
            }
            connection.destroy();
        }
    });
});


app.get('/checkagencynearhospital', function (req, res) {
    // Add your code here
    var connection = mysql.createConnection(databaseConfig);
    connection.connect(function(err) {
        if (err) {
            console.error('Database connection failed: ' + err.stack);
            return;
        }
        console.log('Connected to database.');
    });
    var queryString = `SELECT DISTINCT(Suburb) FROM hospital WHERE Pref_loc IS NULL`;
    var output = [];
    connection.query(queryString, function (error, results, fields){
        if (error){
            console.error(error)
        } else {
            var hospital_suburb = "(";
            for (let i = 0; i < results.length; i++){
                hospital_suburb = hospital_suburb + `'${results[i]["Suburb"]}'`;
                if (i !== results.length - 1){
                    hospital_suburb = hospital_suburb + ` , `;
                }
            }
            hospital_suburb = hospital_suburb + `)`;

            queryString = `SELECT * FROM agencies WHERE Agency_Suburb IN ${hospital_suburb} AND Pref_loc=""`;
            connection.query(queryString, function (error, results, fields){
                if (error){
                    console.error(error)
                } else {
                    output = output.concat(results)
                    queryString = `SELECT DISTINCT(Pref_loc) FROM hospital WHERE Pref_loc IS NOT NULL`;
                    connection.query(queryString, function (error, results, fields){
                        if (error){
                            console.error(error)
                        } else {
                            var hospital_loc = "(";
                            for (let i = 0; i < results.length; i++){
                                hospital_loc = hospital_loc + `'${results[i]["Pref_loc"]}'`;
                                if (i !== results.length - 1){
                                    hospital_loc = hospital_loc + ` , `;
                                }
                            }
                            hospital_loc = hospital_loc + `)`;
                            queryString = `SELECT * FROM agencies WHERE Pref_loc IN ${hospital_loc}`;
                            console.log("process complete");
                            connection.query(queryString, function (error, results, fields){
                                if (error){
                                    console.error(error)
                                } else {
                                    output = output.concat(results)
                                    res.json({success: 'get call succeed!', output});
                                    connection.destroy();
                                }
                            });

                        }
                    })
                }
            });

        }
    })


});

app.get('/agencyinsuburb', function (req, res) {
    // Check if input valid
    const inputString = req.query["inputString"];
    handleSuburbInput(inputString).then(response => {
        console.log(response);
            if (response === ""){
                res.json({error: "Invalid Input"});
                return;
            }

            console.log("Run main");
            let connection = mysql.createConnection(databaseConfig);
            connection.connect(function(err) {
                if (err) {
                    console.error('Database connection failed: ' + err.stack);
                    return;
                }
                console.log('Connected to database.');
            });

            const numberReg = /^[0-9]*$/
            let queryString = "";
            if (numberReg.test(inputString)){
                queryString = `SELECT * FROM agencies where Agency_Postcode="${inputString}"`;
            } else {
                queryString = `SELECT * FROM agencies where Agency_Suburb="${inputString}"`;
            }
            connection.query(queryString, function (error, results, fields){
                if (error){
                    console.error(error)
                } else {
                    res.json({success: 'get call succeed!', results});
                    connection.destroy();
                }
            });
    }

    ).catch(err => {
        console.log(err);
    })
});


app.get('/findnearagency', function (req, res) {
    const inputString = req.query["inputString"];
    const radius = req.query["radius"];
    handleSuburbInput(inputString).then(response => {
        if (response === ""){
            res.json({error: "Invalid Input"});
            return;
        }
        return new Promise(resolve => {
            let connection = mysql.createConnection(databaseConfig);
            connection.connect(function(err) {
                if (err) {
                    console.error('Database connection failed: ' + err.stack);
                    return;
                }
                console.log('Connected to database.');
            });
            const numberReg = /^[0-9]*$/;
            let queryString = "";
            if (numberReg.test(inputString)){
                queryString = `SELECT Lat, Lng FROM localityFinder where Post_Code="${inputString}"`;
            } else {
                queryString = `SELECT Lat, Lng FROM localityFinder where Locality_Name="${inputString}"`;
            }
            connection.query(queryString, function (error, results, fields){
                    if (error){
                        console.error(error)
                    } else {
                        const lat = results[0]["Lat"];
                        const lng = results[0]["Lng"];
                        resolve([lat, lng]);
                    }
            });
        });
    }).then(response => {
        const suburbLat = response[0];
        const suburbLng = response[1];
        let connection = mysql.createConnection(databaseConfig);
        connection.connect(function(err) {
            if (err) {
                console.error('Database connection failed: ' + err.stack);
                return;
            }
            console.log('Connected to database.');
        });
        let queryString = `SELECT * FROM agencies`;
        connection.query(queryString, function (error, results, fields){
            if (error){
                console.error(error)
            } else {
                let output = [];
                if (radius > 50){
                    output = results;
                } else {
                    for (let i = 0; i < results.length; i++){
                        let agency = results[i];
                        const agencyLat = agency["Lat"];
                        const agencyLng = agency["Lng"];
                        const distance = getDistanceFromLatLonInKm(suburbLat, suburbLng, agencyLat, agencyLng);
                        if (distance <= radius){
                            output.push(agency);
                        }
                    }
                }
                res.json({success: 'get call succeed!', output});
                connection.destroy();
            }
        });

    });
});

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}
function deg2rad(deg) {
    return deg * (Math.PI/180)
}


app.get('/checkEligibility', function (req, res) {
    const inputParams = JSON.parse(req.query["inputParams"]);
    const citizenship = inputParams["citizenship"];
    const residenship = inputParams["residenship"];
    const weeklyIncome = inputParams["weeklyIncome"];
    const asset = inputParams["asset"];
    const disabilityCheck = inputParams["check"];
    const householdType = inputParams["household"];
    const numDependent = inputParams["numDependent"];
    const numChildren = inputParams["numChildren"];
    let registerForInterestWeeklyIncomeLimit = {Single: 1059, Couple: 1621, Family: 2186};
    let registerForPriorityWeeklyIncomeLimit = {Single: 593, Couple: 1025, Family: 1062};
    if (citizenship === undefined || residenship === undefined || weeklyIncome === undefined || asset === undefined || disabilityCheck === undefined || householdType === undefined || isNaN(numDependent) || isNaN(asset) || isNaN(weeklyIncome) || isNaN(numChildren)){
        res.json({error: "Input error"});
    } else {
        registerForInterestWeeklyIncomeLimit["Family"] += (numDependent * 355);
        registerForInterestWeeklyIncomeLimit["Couple"] += (numDependent * 355);
        registerForInterestWeeklyIncomeLimit["Single"] += (numDependent * 355);
        registerForPriorityWeeklyIncomeLimit["Family"] += (numDependent * 37);
        registerForPriorityWeeklyIncomeLimit["Couple"] += (numDependent * 37);
        registerForPriorityWeeklyIncomeLimit["Single"] += (numDependent * 37);
        if (numChildren > 1){
            registerForPriorityWeeklyIncomeLimit["Family"] += 37;
        }
        const registerForInterestAssetLimit = disabilityCheck ? 115522 : 34656;
        const registerForPriorityAssetLimit = disabilityCheck ? 115522 : 13699;
        const interestWeeklyIncomeLimit = registerForInterestWeeklyIncomeLimit[householdType];
        const priorityWeeklyIncomeLimit = registerForPriorityWeeklyIncomeLimit[householdType];

        if(citizenship !== "Australian_citizen" && citizenship !== "Permanent_resident"){
            // Citizenship not met
            res.json({result: 1});
        } else if (residenship !== "Victorian_resident") {
            // Residenship not met
            res.json({result: 2});
        } else {
            if (weeklyIncome > interestWeeklyIncomeLimit){
                //Weekly Income not met
                if (asset > registerForInterestAssetLimit) {
                    res.json({result: 7, limit1: interestWeeklyIncomeLimit, limit2: registerForInterestAssetLimit});
                } else {
                    res.json({result: 3, limit: interestWeeklyIncomeLimit});
                }
            } else if (asset > registerForInterestAssetLimit) {
                // Asset not met
                res.json({result: 4, limit: registerForInterestAssetLimit});
            } else {
                if (weeklyIncome <= priorityWeeklyIncomeLimit && asset <= registerForPriorityAssetLimit){
                    // Met the prority access
                    res.json({result: 6});
                } else {
                    // Met the Interest
                    res.json({result: 5});
                }

            }
        }


    }

});


app.listen(3000, function () {
    console.log("App started")
});

module.exports = app
