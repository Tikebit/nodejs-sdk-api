var TikebitReseller = require('../../index').Reseller; // On NPM use: require('tikebit').Merchant;

var USERNAME = '';
var PASSWORD = '';
var SANDBOX = false;

var tikebitReseller = new TikebitReseller(USERNAME, PASSWORD, SANDBOX);
tikebitReseller.createVoucher({
        amount: 1000,
        currency_iso_code: 'EUR',
        reference: 'uniqueString123'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.body);
    });