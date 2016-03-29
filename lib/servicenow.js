'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const SnowQuery = require('snow-query');
var Snow  = new SnowQuery('https://demo003.service-now.com/');
Snow.setAuth('itil','itil');

/*
Request test :
url :
http://localhost:8001/servicenow/getRecord/
header :
nothing
body :
{
"tableName" :"incident",
"recordId" : "debb21d2d7600200f215a5f75e61034e"
}
*/
exports.getRecord = function (params, cb){

  var tableName = params.tableName;
  var recordId = params.recordId;
  var theNumber = params.number;

  var params = {
    table: tableName,
    query: {
        sys_id: recordId
        }
  };

  Snow.getRecords(params,(err,data) => {
    try {
        var res = JSON.parse(data);
    } catch(e) {
        var res = data
    }

    console.log(res);
    cb(err, res);
  });

}
