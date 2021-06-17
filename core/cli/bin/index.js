#! /usr/bin/env node

console.log('hello cli test')

const importLocal = require('import-local');



if (importLocal(__filename)) {
    require('npmlog').info('cli', '正在使用 h-cli-test 本地版本');
} else {
    require('../lib/core')(process.argv.slice(2));
}