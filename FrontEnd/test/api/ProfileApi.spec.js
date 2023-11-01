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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NineToFiveApi);
  }
}(this, function(expect, NineToFiveApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NineToFiveApi.ProfileApi();
  });

  describe('(package)', function() {
    describe('ProfileApi', function() {
      describe('addProfile', function() {
        it('should call addProfile successfully', function(done) {
          // TODO: uncomment, update parameter values for addProfile call and complete the assertions
          /*
          var userid = 56;
          var body = new NineToFiveApi.Body3();
          body.age = "";
          body.fullname = "";
          body.city = "";
          body.gender = "";
          body.email = "";
          body.about = "";

          instance.addProfile(userid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(NineToFiveApi.InlineResponse2003);
            expect(data.profileid).to.be.a('number');
            expect(data.profileid).to.be("0");
            expect(data.age).to.be.a('number');
            expect(data.age).to.be(0);
            expect(data.fullname).to.be.a('string');
            expect(data.fullname).to.be("");
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.gender).to.be.a('string');
            expect(data.gender).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.about).to.be.a('string');
            expect(data.about).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProfile', function() {
        it('should call getProfile successfully', function(done) {
          // TODO: uncomment, update parameter values for getProfile call and complete the assertions
          /*
          var userid = 56;
          var profileid = "profileid_example";

          instance.getProfile(userid, profileid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(NineToFiveApi.InlineResponse2003);
            expect(data.profileid).to.be.a('number');
            expect(data.profileid).to.be("0");
            expect(data.age).to.be.a('number');
            expect(data.age).to.be(0);
            expect(data.fullname).to.be.a('string');
            expect(data.fullname).to.be("");
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.gender).to.be.a('string');
            expect(data.gender).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.about).to.be.a('string');
            expect(data.about).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateProfile', function() {
        it('should call updateProfile successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProfile call and complete the assertions
          /*
          var userid = 56;
          var profileid = 56;
          var body = new NineToFiveApi.Body4();
          body.age = "";
          body.fullname = "";
          body.city = "";
          body.gender = "";
          body.email = "";
          body.about = "";

          instance.updateProfile(userid, profileid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(NineToFiveApi.InlineResponse2003);
            expect(data.profileid).to.be.a('number');
            expect(data.profileid).to.be("0");
            expect(data.age).to.be.a('number');
            expect(data.age).to.be(0);
            expect(data.fullname).to.be.a('string');
            expect(data.fullname).to.be("");
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.gender).to.be.a('string');
            expect(data.gender).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.about).to.be.a('string');
            expect(data.about).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
