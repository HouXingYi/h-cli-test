'use strict';


const log = require('npmlog');

log.addLevel('success', 2000, { fg: 'red', bold: true });

module.exports = log;
