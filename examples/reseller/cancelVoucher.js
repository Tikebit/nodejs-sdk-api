var TikebitReseller = require('../../index').Reseller; // On NPM use: require('tikebit').Merchant;
var USERNAME = '';
var PASSWORD = '';
var SANDBOX = false;
var tikebitReseller = new TikebitReseller(USERNAME, PASSWORD, SANDBOX);

var voucherCode = '';
tikebitReseller.cancelVoucher(voucherCode)
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.body);
    });