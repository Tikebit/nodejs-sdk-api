var TikebitMerchant = require('../../index').Merchant; // On NPM use: require('tikebit').Merchant;
var USERNAME = '';
var PASSWORD = '';
var SANDBOX = false;
var tikebitMerchant = new TikebitMerchant(USERNAME, PASSWORD, SANDBOX);

tikebitMerchant.createPayment({
        voucher_code: '',
        amount: 100,
        currency_iso_code: 'EUR',
        nonce: 'uniqueNonce123',
        description: 'Cryptocurrencies to the moon! 1€'
    })
    .then(function(response){
        console.log(response);
    })
    .fail(function(e){
        console.log(e.body);
    });