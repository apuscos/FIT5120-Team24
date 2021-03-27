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


/**********************
 * Example get method *
 **********************/

app.get('/items', function (req, res) {

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
    var queryString = 'SELECT * from openingHours where placeID=135111';
    console.log(req.query)
    connection.query(queryString, function (error, results, fields){
        if (error){
            console.error(error)
        } else {
            console.log(results)
            res.json({success: 'get call succeed!', url: req.url, results});
            connection.destroy();
        }
    });



    // pool.getConnection(function (err, connection) {
    //     connection.query('SELECT days from openingHours where placeID=135111', function (error, results) {
    //         connection.release();
    //         if (error) {
    //             res.json({error: error});
    //         }
    //         else {
    //             res.headers = {
    //                 'Access-Control-Allow-Origin': '*'
    //             };
    //             res.json({results})
    //         }
    //     })
    // });
    // Add your code here
    // const example = [
    //     {name: "test1", age: 20},
    //     {name: "test2", age: 22},
    //     {name: "test3", age: 23}
    // ]
    // res.json({success: 'get call succeed!', url: req.url, example});
});

app.get('/item/*', function (req, res) {
    // Add your code here
    res.json({success: 'get call succeed!', url: req.url});
});

/****************************
 * Example post method *
 ****************************/

app.post('/item', function (req, res) {
    // Add your code here
    res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/item/*', function (req, res) {
    // Add your code here
    res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
 * Example put method *
 ****************************/

app.put('/item', function (req, res) {
    // Add your code here
    res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/item/*', function (req, res) {
    // Add your code here
    res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
 * Example delete method *
 ****************************/

app.delete('/item', function (req, res) {
    // Add your code here
    res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/item/*', function (req, res) {
    // Add your code here
    res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function () {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
