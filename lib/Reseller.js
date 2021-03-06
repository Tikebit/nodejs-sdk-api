var Requester = require('./Requester');

/**
 * RESELLER
 *
 * @param {String} username
 * @param {String} password
 * @param {Boolean} [sandbox]
 */
function Reseller(username, password, sandbox){
    this.requester = new Requester(sandbox);
    this.requester.setBasicAuth(username, password);
}

/**
 * CREATE VOUCHER
 *
 * @param {Object} details
 * @param {Number} details.amount
 * @param {String} details.currency_iso_code
 * @param {String} [details.reference]
 */
Reseller.prototype.createVoucher = function(details){
    this.requester.addData({
        amount: details.amount,
        currency_iso_code: details.currency_iso_code,
        reference: details.reference
    });
    this.requester.addMethod('POST');
    this.requester.addEndpointUrl('reseller/voucher/');
    return this.requester.send();
};

/**
 * ACTIVATE VOUCHER
 *
 * @param {String} voucher_id
 */
Reseller.prototype.activateVoucher = function(voucher_id){
    this.requester.addMethod('POST');
    this.requester.addEndpointUrl('reseller/voucher/' + voucher_id + '/');
    return this.requester.send();
};

/**
 * CANCEL VOUCHER
 *
 * @param {Object} voucher_code
 */
Reseller.prototype.cancelVoucher = function(voucher_code){
    this.requester.addMethod('DELETE');
    this.requester.addEndpointUrl('reseller/voucher/' + voucher_code + '/');
    return this.requester.send();
};

module.exports = Reseller;