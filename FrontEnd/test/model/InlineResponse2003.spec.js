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
    describe('InlineResponse2003', function() {
      beforeEach(function() {
        instance = new NineToFiveApi.InlineResponse2003();
      });

      it('should create an instance of InlineResponse2003', function() {
        // TODO: update the code to test InlineResponse2003
        expect(instance).to.be.a(NineToFiveApi.InlineResponse2003);
      });

      it('should have the property profileid (base name: "profileid")', function() {
        // TODO: update the code to test the property profileid
        expect(instance).to.have.property('profileid');
        // expect(instance.profileid).to.be(expectedValueLiteral);
      });

      it('should have the property age (base name: "age")', function() {
        // TODO: update the code to test the property age
        expect(instance).to.have.property('age');
        // expect(instance.age).to.be(expectedValueLiteral);
      });

      it('should have the property fullname (base name: "fullname")', function() {
        // TODO: update the code to test the property fullname
        expect(instance).to.have.property('fullname');
        // expect(instance.fullname).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property gender (base name: "gender")', function() {
        // TODO: update the code to test the property gender
        expect(instance).to.have.property('gender');
        // expect(instance.gender).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property about (base name: "about")', function() {
        // TODO: update the code to test the property about
        expect(instance).to.have.property('about');
        // expect(instance.about).to.be(expectedValueLiteral);
      });

    });
  });

}));
