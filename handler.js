'use strict';
const moment = require('moment')

module.exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless CI/CD Deo',
        version: "v4.0",
        timestamp: moment().unix(),
      },
      null,
      2
    ),
  };


};
