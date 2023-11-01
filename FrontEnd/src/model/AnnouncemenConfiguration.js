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
    root.NineToFiveApi.AnnouncemenConfiguration = factory(root.NineToFiveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AnnouncemenConfiguration model module.
   * @module model/AnnouncemenConfiguration
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AnnouncemenConfiguration</code>.
   * @alias module:model/AnnouncemenConfiguration
   * @class
   * @param title {String} 
   * @param experience {String} 
   * @param education {String} 
   * @param preview {String} 
   * @param salary {Number} 
   * @param schedule {Number} 
   */
  var exports = function(title, experience, education, preview, salary, schedule) {
    this.title = title;
    this.experience = experience;
    this.education = education;
    this.preview = preview;
    this.salary = salary;
    this.schedule = schedule;
  };

  /**
   * Constructs a <code>AnnouncemenConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnnouncemenConfiguration} obj Optional instance to populate.
   * @return {module:model/AnnouncemenConfiguration} The populated <code>AnnouncemenConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('experience'))
        obj.experience = ApiClient.convertToType(data['experience'], 'String');
      if (data.hasOwnProperty('education'))
        obj.education = ApiClient.convertToType(data['education'], 'String');
      if (data.hasOwnProperty('preview'))
        obj.preview = ApiClient.convertToType(data['preview'], 'String');
      if (data.hasOwnProperty('salary'))
        obj.salary = ApiClient.convertToType(data['salary'], 'Number');
      if (data.hasOwnProperty('schedule'))
        obj.schedule = ApiClient.convertToType(data['schedule'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {String} experience
   */
  exports.prototype.experience = undefined;

  /**
   * @member {String} education
   */
  exports.prototype.education = undefined;

  /**
   * @member {String} preview
   */
  exports.prototype.preview = undefined;

  /**
   * @member {Number} salary
   */
  exports.prototype.salary = undefined;

  /**
   * @member {Number} schedule
   */
  exports.prototype.schedule = undefined;


  return exports;

}));
