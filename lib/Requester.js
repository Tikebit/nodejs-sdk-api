var configSandbox = require('../config/sandbox');
var configProduction = require('../config/production');
var request = require('request');
var Q = require('q');
var REQUEST_TIMEOUT = 10000;

/**
 * @param {Boolean} SSL
 * @param {String} apiHost
 * @param {String} apiPath
 */
function createBaseUrl(SSL, apiHost, apiPath){
    return 'http' + (SSL ? 's' : '') + '://' +
    apiHost +
    '/' +
    apiPath;
}

/**
 * @param {Boolean} sandbox
 */
function Requester(sandbox){

    this.requestConfig = {};

    var config = sandbox ? configSandbox : configProduction;
    this.SSL = config.SSL;
    this.ownSSL = config.ownSSL;
    this.apiHost = config.apiHost;
    this.apiPath = config.apiPath;
    this.baseUrl = createBaseUrl(config.SSL, config.apiHost, config.apiPath);

    // When the API use autosign cert for SSL
    if(this.ownSSL){
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }

}

/**
 * @param {String} method
 */
Requester.prototype.addMethod = function(method){
    this.requestConfig.method = method;
};

/**
 * @param {Object} data
 */
Requester.prototype.addData = function(data){
    this.requestConfig.form = data;
};

/**
 * @param {String} endpoint
 */
Requester.prototype.addEndpointUrl = function(endpoint){
    this.requestConfig.url = this.baseUrl + endpoint + '/';
};

/**
 * SEND REQUEST
 */
Requester.prototype.send = function(){
    var df = Q.defer();
    var that = this;
    that.requestConfig.timeout = REQUEST_TIMEOUT;
    request(this.requestConfig, function callback(error, response, body) {
        that.requestConfig = {};
        if(error){
            df.reject(error);
        }else if (!error && (response.statusCode < 300)) {
            if(body.length){
                try{
                    body = JSON.parse(body);
                    df.resolve(body);
                }catch(e){
                    df.reject(body);
                }
            }else{
                df.resolve();
            }
        }else{
            try{
                body = JSON.parse(response.body);
            }catch(e){}
            var e = new Error('Can\'t load');
            e.statusCode = response.statusCode;
            e.body = body;
            df.reject(e);
        }

    });
    return df.promise;
};

module.exports = Requester;