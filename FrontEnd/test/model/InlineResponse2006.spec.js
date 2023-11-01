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
    describe('InlineResponse2006', function() {
      beforeEach(function() {
        instance = new NineToFiveApi.InlineResponse2006();
      });

      it('should create an instance of InlineResponse2006', function() {
        // TODO: update the code to test InlineResponse2006
        expect(instance).to.be.a(NineToFiveApi.InlineResponse2006);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));
