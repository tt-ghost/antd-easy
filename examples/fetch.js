import fetch from 'isomorphic-fetch';

module.exports = function (url, option) {
  return fetch(url, option)
    .then((res) => {
      if (res.status >= 300) {
        if(res.status === 401){
          res.json().then((res) => {
            return res;
          });
        }
        if(res.status === 403){
          res.json().then((res) => {
            return res;
          });
        }
        if(res.status === 400){
          // return res;
          res.json().then((res) => {
            return res;
          });
        }
        throw new Error(res);
      }
      return res;
    });
};

