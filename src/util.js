
/*
 * 下拉框忽略大小写
 */
export function filterOptionByChildren(inputValue, option){
  return option.props.children.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
}

export function fetch(url, option) {
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const originHeaders = Object.assign({}, option.headers);
  option.headers = Object.assign({}, defaultHeaders, originHeaders);
  return require('isomorphic-fetch')(url, option);
}

