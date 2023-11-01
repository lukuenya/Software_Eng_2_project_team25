/*
 * NineToFive API
 * This is NineToFive API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ndummatt@ece.auth.gr
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NineToFiveApi) {
      root.NineToFiveApi = {};
    }
    root.NineToFiveApi.InlineResponse2004 = factory(root.NineToFiveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse2004 model module.
   * @module model/InlineResponse2004
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2004</code>.
   * @alias module:model/InlineResponse2004
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('requestid'))
        obj.requestid = ApiClient.convertToType(data['requestid'], 'Number');
      if (data.hasOwnProperty('seekerid'))
        obj.seekerid = ApiClient.convertToType(data['seekerid'], 'Number');
      if (data.hasOwnProperty('providerid'))
        obj.providerid = ApiClient.convertToType(data['providerid'], 'Number');
      if (data.hasOwnProperty('announcementid'))
        obj.announcementid = ApiClient.convertToType(data['announcementid'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Number} requestid
   */
  exports.prototype.requestid = undefined;

  /**
   * @member {Number} seekerid
   */
  exports.prototype.seekerid = undefined;

  /**
   * @member {Number} providerid
   */
  exports.prototype.providerid = undefined;

  /**
   * @member {Number} announcementid
   */
  exports.prototype.announcementid = undefined;

  /**
   * @member {Boolean} status
   */
  exports.prototype.status = undefined;


  return exports;

}));
