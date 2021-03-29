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
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
});


app.get('/checkAgency', function (req, res) {
    // Add your code here
    var connection = mysql.createConnection({
        host: "database-roof4all.c6idfdnguvns.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "12345678",
        port: 3306,
        database: "fit5120"
    });
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
    var connection = mysql.createConnection({
        host: "database-roof4all.c6idfdnguvns.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "12345678",
        port: 3306,
        database: "fit5120"
    });
    connection.connect(function(err) {
        if (err) {
            console.error('Database connection failed: ' + err.stack);
            return;
        }
        console.log('Connected to database.');
    });

    var queryString = `SELECT DISTINCT(Pref_loc) FROM hospital WHERE Pref_loc IS NOT NULL`;
    connection.query(queryString, function (error, results, fields){
        if (error){
            console.error(error)
        } else {
            var hospital_loc = "(";
            for (let i = 0; i < results.length; i++){
                hospital_loc = hospital_loc + `'${results[i]["Pref_loc"]}'`;
                if (i != results.length - 1){
                    hospital_loc = hospital_loc + ` , `;
                }
            }
            hospital_loc = hospital_loc + `)`;
            queryString = `SELECT Agency_Name, Agency_Suburb, Agency_Postcode, Agency_Reg_Date FROM agencies WHERE Pref_loc IN ${hospital_loc}`;
            console.log("process complete");
            connection.query(queryString, function (error, results, fields){
                if (error){
                    console.error(error)
                } else {
                    console.log(results);
                    res.json({success: 'get call succeed!', results});
                    connection.destroy();
                }
            });

        }
    })
});

app.listen(3000, function () {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
