var TikebitMerchant = require('../../index').Merchant; // On NPM use: require('tikebit').Merchant;

var USERNAME = '';
var PASSWORD = '';
var SANDBOX = false;

var PAYMENT_ID = '';

var tikebitMerchant = new TikebitMerchant(USERNAME, PASSWORD, SANDBOX);
tikebitMerchant.activatePayment(PAYMENT_ID)
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.body);
    });