var Requester = require('./Requester');

/**
 * RESELLER
 *
 * @param {String} username
 * @param {String} password
 * @param {Boolean} [sandbox]
 */
function Merchant(username, password, sandbox){
    this.requester = new Requester(sandbox);
    this.requester.setBasicAuth(username, password);
}

/**
 * CREATE PAYMENT
 *
 * @param {Object} details
 * @param {String} details.voucher_code
 * @param {Number} details.amount
 * @param {String} details.currency_iso_code
 * @param {String} details.nonce
 * @param {String} details.description
 */
Merchant.prototype.createPayment = function(details){
    this.requester.addData({
        voucher_code: details.voucher_code,
        amount: details.amount,
        currency_iso_code: details.currency_iso_code,
        nonce: details.nonce,
        description: details.description
    });
    this.requester.addMethod('POST');
    this.requester.addEndpointUrl('merchant/payment/');
    return this.requester.send();
};

module.exports = Merchant;