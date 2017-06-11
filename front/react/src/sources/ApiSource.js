import fetch from 'isomorphic-fetch';


const requestConfig = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};


module.exports.request = function (url, method, body) {
  requestConfig.method = method;
  requestConfig.body = JSON.stringify(body);
  return fetch(url, requestConfig)
    .then((response) => {
      return response;
    });
};