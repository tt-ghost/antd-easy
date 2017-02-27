'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterOptionByChildren = filterOptionByChildren;
exports.fetch = fetch;

/*
 * 下拉框忽略大小写
 */
function filterOptionByChildren(inputValue, option) {
  return option.props.children.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
}

function fetch(url, option) {
  var defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  var originHeaders = Object.assign({}, option.headers);
  option.headers = Object.assign({}, defaultHeaders, originHeaders);
  return require('isomorphic-fetch')(url, option);
}