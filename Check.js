/*
http://yijiebuyi.com/blog/8221eb14c8482e7efd1868946e99ea7c.html
run之前需先引入 request module
*/

var request=require('request');

var options = {
	headers: {'Content-Type': 'application/json',
            'X-LINE-ChannelId': '1649580251',
            'X-LINE-ChannelSecret': 'ddca54d0f3e50847af3f6ec4fcaef890'},
    url: 'https://sandbox-api-pay.line.me/v2/payments/orders/TW2019-LINE-00003/check',
    method: 'GET',
    json:true,
};

function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('----info------',data);
    }
}

request(options, callback);