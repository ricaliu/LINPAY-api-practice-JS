const fetch = require('node-fetch');

const body = {
   "refundAmount": 35 
};
 
fetch('https://sandbox-api-pay.line.me/v2/payments/orders/TW2019-LINE-00003/refund', {
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