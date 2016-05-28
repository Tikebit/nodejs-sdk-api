# TIKEBIT
**[Tikebit™](https://www.tikebit.com) Official Node SDK for API REST.**

Get cryptocurrencies in thousand of retail stores!
[Tikebit™](https://www.tikebit.com) is a easy and fast way to get cryptocurrencies with cash in thousand of retail stores around the world. Without banks, credit cards, in seconds.
Easy, fast, secure, private.

You can check [Tikebit™ API Docs](http://api-docs.tikebit.com) for more information.

## Install

```sh
$ npm i --save tikebit
```

## Version
1.0.0

## Usage

```js
// CREATE A VOUCHER
var TikebitReseller = require('tikebit').Reseller;
var USERNAME = 'username';
var PASSWORD = 'password';
var SANDBOX = true; // false to production
var tikebit = new TikebitReseller(USERNAME, PASSWORD, SANDBOX);

tikebit.createVoucher({
        amount: 1000,
        currency_iso_code: 'EUR',
        description: 'Testing Tikebit for create a voucher'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.body);
    });
```

You can see *examples* folder to see more details of each example.

## Supported methods

**Reseller**
- Create Voucher -> tikebitReseller.createVoucher
- Cancel Voucher -> tikebitReseller.cancelVoucher

**Merchant**
- Create Payment -> tikebitMerchant.createPayment

## TODO
- Testing

## License

The MIT License (MIT)

Copyright (c) 2016 [Tikebit™](https://www.tikebit.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.