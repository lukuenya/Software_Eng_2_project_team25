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
    describe('InlineResponse2001', function() {
      beforeEach(function() {
        instance = new NineToFiveApi.InlineResponse2001();
      });

      it('should create an instance of InlineResponse2001', function() {
        // TODO: update the code to test InlineResponse2001
        expect(instance).to.be.a(NineToFiveApi.InlineResponse2001);
      });

      it('should have the property announcementid (base name: "announcementid")', function() {
        // TODO: update the code to test the property announcementid
        expect(instance).to.have.property('announcementid');
        // expect(instance.announcementid).to.be(expectedValueLiteral);
      });

      it('should have the property userid (base name: "userid")', function() {
        // TODO: update the code to test the property userid
        expect(instance).to.have.property('userid');
        // expect(instance.userid).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property experience (base name: "experience")', function() {
        // TODO: update the code to test the property experience
        expect(instance).to.have.property('experience');
        // expect(instance.experience).to.be(expectedValueLiteral);
      });

      it('should have the property education (base name: "education")', function() {
        // TODO: update the code to test the property education
        expect(instance).to.have.property('education');
        // expect(instance.education).to.be(expectedValueLiteral);
      });

      it('should have the property preview (base name: "preview")', function() {
        // TODO: update the code to test the property preview
        expect(instance).to.have.property('preview');
        // expect(instance.preview).to.be(expectedValueLiteral);
      });

      it('should have the property salary (base name: "salary")', function() {
        // TODO: update the code to test the property salary
        expect(instance).to.have.property('salary');
        // expect(instance.salary).to.be(expectedValueLiteral);
      });

      it('should have the property schedule (base name: "schedule")', function() {
        // TODO: update the code to test the property schedule
        expect(instance).to.have.property('schedule');
        // expect(instance.schedule).to.be(expectedValueLiteral);
      });

    });
  });

}));
