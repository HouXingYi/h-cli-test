'use strict';

const axios = require('axios');
const log = require('@h-cli-test/log');

log.verbose('process.env.CLI_BASE_URL', process.env.CLI_BASE_URL);
const BASE_URL = process.env.CLI_BASE_URL ? process.env.CLI_BASE_URL :
  'http://1.117.67.249:7001';

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

module.exports = request;
