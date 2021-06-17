'use strict';

const semver = require('semver');
const colors = require('colors/safe');
const utils = require("@h-cli-test/utils");
const log = require("@h-cli-test/log");
const constant = require('./const');

console.log('utils 被调用了, 通过file 引用的，十分方便');
utils();

// require .js .json .node
// .js -> module.exports/exports
// .json -> JOSN.parse
const pkg = require('../package.json');

module.exports = core;

function core() {
    try {
        console.log('exec core');
        // checkPkgVersion();
        // checkNodeVersion();
        checkRoot();
    } catch (e) {
        console.error(e.message);
    }
}

function checkRoot() {
    const rootCheck = require('root-check');
    rootCheck()
    // console.log('process.geteuid()', process.geteuid());
    // console.log(process.geteuid());
}

// 检查node版本号
function checkNodeVersion() {
  // 第一步获取当前node版本号
  const currentVersion = process.version;
  console.log('currentVersion', currentVersion);
  // 第二步，对比最低版本号
  const lowestVersion = constant.LOWEST_NODE_VERSION;
  console.log('lowestVersion', lowestVersion);

//   if (semver.gte(currentVersion, lowestVersion)) {
//     throw new Error(colors.red(`需要安装 ${lowestVersion} 以上版本的 Node.js`))
//   }
}

// 检查版本号 
function checkPkgVersion() {
    console.log(pkg.version);
    log(); 
}