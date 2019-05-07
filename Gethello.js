/*
http://yijiebuyi.com/blog/8221eb14c8482e7efd1868946e99ea7c.html
run之前需先引入 request module
*/

var request=require('request');

var options = {
    url: 'http://rica.topedu.io:5000/v2/payments/oneTimeKeys',
    method: 'GET',
    json:true,
};

function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('----info------',data);
    }
}

request(options, callback);