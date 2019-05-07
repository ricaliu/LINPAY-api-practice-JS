const fetch = require('node-fetch');

const body = {
   "productName": "test product",
   "amount": 100,
   "currency": "TWD",
   "orderId": "TW2019-LINE-00002",
   "oneTimeKey": "382391381667700295"
};
 
fetch('https://sandbox-api-pay.line.me/v2/payments/oneTimeKeys/pay', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 
            'Content-Type': 'application/json',
            'X-LINE-ChannelId': '1649580251',
            'X-LINE-ChannelSecret': 'ddca54d0f3e50847af3f6ec4fcaef890'
        },
    })
    .then(res => res.json())
    .then(json => console.log(json));