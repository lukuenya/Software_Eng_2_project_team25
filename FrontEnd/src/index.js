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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnnouncemenConfiguration', 'model/Announcement', 'model/AnnouncementsList', 'model/Body', 'model/Body1', 'model/Body2', 'model/Body3', 'model/Body4', 'model/Body5', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/NotificationsList', 'model/Profile', 'model/ProfileConfiguration', 'model/Request', 'model/RequestCreation', 'model/ResponseToRequest', 'model/User', 'model/UserCreation', 'api/AnnouncementApi', 'api/ProfileApi', 'api/RequestApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AnnouncemenConfiguration'), require('./model/Announcement'), require('./model/AnnouncementsList'), require('./model/Body'), require('./model/Body1'), require('./model/Body2'), require('./model/Body3'), require('./model/Body4'), require('./model/Body5'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/NotificationsList'), require('./model/Profile'), require('./model/ProfileConfiguration'), require('./model/Request'), require('./model/RequestCreation'), require('./model/ResponseToRequest'), require('./model/User'), require('./model/UserCreation'), require('./api/AnnouncementApi'), require('./api/ProfileApi'), require('./api/RequestApi'), require('./api/UserApi'));
  }
}(function(ApiClient, AnnouncemenConfiguration, Announcement, AnnouncementsList, Body, Body1, Body2, Body3, Body4, Body5, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, NotificationsList, Profile, ProfileConfiguration, Request, RequestCreation, ResponseToRequest, User, UserCreation, AnnouncementApi, ProfileApi, RequestApi, UserApi) {
  'use strict';

  /**
   * This_is_NineToFive_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var NineToFiveApi = require('index'); // See note below*.
   * var xxxSvc = new NineToFiveApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new NineToFiveApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new NineToFiveApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new NineToFiveApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AnnouncemenConfiguration model constructor.
     * @property {module:model/AnnouncemenConfiguration}
     */
    AnnouncemenConfiguration: AnnouncemenConfiguration,
    /**
     * The Announcement model constructor.
     * @property {module:model/Announcement}
     */
    Announcement: Announcement,
    /**
     * The AnnouncementsList model constructor.
     * @property {module:model/AnnouncementsList}
     */
    AnnouncementsList: AnnouncementsList,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The Body1 model constructor.
     * @property {module:model/Body1}
     */
    Body1: Body1,
    /**
     * The Body2 model constructor.
     * @property {module:model/Body2}
     */
    Body2: Body2,
    /**
     * The Body3 model constructor.
     * @property {module:model/Body3}
     */
    Body3: Body3,
    /**
     * The Body4 model constructor.
     * @property {module:model/Body4}
     */
    Body4: Body4,
    /**
     * The Body5 model constructor.
     * @property {module:model/Body5}
     */
    Body5: Body5,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The NotificationsList model constructor.
     * @property {module:model/NotificationsList}
     */
    NotificationsList: NotificationsList,
    /**
     * The Profile model constructor.
     * @property {module:model/Profile}
     */
    Profile: Profile,
    /**
     * The ProfileConfiguration model constructor.
     * @property {module:model/ProfileConfiguration}
     */
    ProfileConfiguration: ProfileConfiguration,
    /**
     * The Request model constructor.
     * @property {module:model/Request}
     */
    Request: Request,
    /**
     * The RequestCreation model constructor.
     * @property {module:model/RequestCreation}
     */
    RequestCreation: RequestCreation,
    /**
     * The ResponseToRequest model constructor.
     * @property {module:model/ResponseToRequest}
     */
    ResponseToRequest: ResponseToRequest,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserCreation model constructor.
     * @property {module:model/UserCreation}
     */
    UserCreation: UserCreation,
    /**
     * The AnnouncementApi service constructor.
     * @property {module:api/AnnouncementApi}
     */
    AnnouncementApi: AnnouncementApi,
    /**
     * The ProfileApi service constructor.
     * @property {module:api/ProfileApi}
     */
    ProfileApi: ProfileApi,
    /**
     * The RequestApi service constructor.
     * @property {module:api/RequestApi}
     */
    RequestApi: RequestApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
