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

  describe('(package)', function() {
    describe('User', function() {
      beforeEach(function() {
        instance = new NineToFiveApi.User();
      });

      it('should create an instance of User', function() {
        // TODO: update the code to test User
        expect(instance).to.be.a(NineToFiveApi.User);
      });

      it('should have the property userid (base name: "userid")', function() {
        // TODO: update the code to test the property userid
        expect(instance).to.have.property('userid');
        // expect(instance.userid).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

    });
  });

}));
