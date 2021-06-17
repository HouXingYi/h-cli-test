'use strict';

module.exports = index;

const log = require('npmlog');

log.addLevel('success', 2000, { fg: 'red', bold: true });

function index() {
    log.success('success', 'test 这样打印会比较漂亮, 自定义的log');
}
