var TikebitReseller = require('../../index').Reseller; // On NPM use: require('tikebit').Merchant;

var USERNAME = '';
var PASSWORD = '';
var SANDBOX = false;

var VOUCHER_ID = '';

var tikebitReseller = new TikebitReseller(USERNAME, PASSWORD, SANDBOX);
tikebitReseller.activateVoucher(VOUCHER_ID)
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.body);
    });