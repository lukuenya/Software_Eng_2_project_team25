//Test cases for Announcements
const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const app = require('../index.js');

const { addAnnouncement, deleteAnnouncement, updateAnnouncement } = require('../service/AnnouncementService.js');

const baseUrl = 'http://localhost:8080/';

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: "json"});
});

test.after.always((t) => {
    t.context.server.close();
});

// Test case for adding a new Announcement
test('POST /Announcement - Add new Announcement', async t => {
    const newAnnouncement = {
        announcementid: 1,
        userid: 1,
        title: "TestTitle",
        experience: "TestExperience",
        education: "TestEducation",
        preview: "TestPreview",
        salary: 100,
        schedule: 10,
    };

    try {
        const response = await t.context.got.post('announcement', {
            json: newAnnouncement,
            responseType: 'json',
            throwHttpErrors: false
        });

        // Check the status code
        t.is(response.statusCode, 200, 'Response should be 200 OK');

        // Check if the response body has expected properties
        t.is(response.body.title, newAnnouncement.title, 'Title should match');
        t.is(response.body.salary, newAnnouncement.salary, 'Salary should match');
        t.is(response.body.education, newAnnouncement.education, 'Education should match');
        t.is(response.body.preview, newAnnouncement.preview, 'Preview should match');

        // Add more assertions as needed to validate the response
    } catch (error) {
        t.fail(`Request failed: ${error.message}`);
    }
});

// Test case for adding a new Announcement by function

test('Add an Announcement by function', async (t) => {
    
    const userId = 12;
    const announcementBody = {
      title: "TestTitle",
      experience: "TestExperience",
      education: "TestEducation",
      preview: "TestPreview",
      salary: 100,
      schedule: 10,
    };
  
    await t.notThrowsAsync(addAnnouncement(userId, announcementBody));
  });


//Test case for deleting an Announcement by function
test('Delete an existing Announcement by function', async (t) => {
    const userId = 'someUserId';
    const announcementId = 'someAnnouncementId';

    await t.notThrowsAsync(deleteAnnouncement(userId, announcementId));
});

//Test case for updating an Announcement by function

test('Update Announcement - Update an existing Announcement', async (t) => {
    
    const userId = 13; 
    const announcementId = 13; 
    const updateBody = {
      title: 'updated title',
      experience: 'updated experience',
      education: 'updated education',
      preview: 'updated preview',
      salary: 1,
      schedule: 1,
    };
  
    const result = await updateAnnouncement(userId, announcementId, updateBody);

 
    t.notThrowsAsync(updateAnnouncement(userId, announcementId, updateBody)); 

  });
