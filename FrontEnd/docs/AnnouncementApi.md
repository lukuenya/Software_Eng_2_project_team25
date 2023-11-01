# NineToFiveApi.AnnouncementApi

All URIs are relative to *https://virtserver.swaggerhub.com/lukuenya/NineToFive/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAnnouncement**](AnnouncementApi.md#addAnnouncement) | **POST** /user/{userid}/announcement | Add a new announcement to the system.
[**deleteAnnouncement**](AnnouncementApi.md#deleteAnnouncement) | **DELETE** /user/{userid}/announcement/{announcementid} | Delete Announcement
[**getListAnnouncements**](AnnouncementApi.md#getListAnnouncements) | **GET** /user/{userid}/announcement | Retrieve announcements
[**updateAnnouncement**](AnnouncementApi.md#updateAnnouncement) | **PUT** /user/{userid}/announcement/{announcementid} | Update announcement


<a name="addAnnouncement"></a>
# **addAnnouncement**
> InlineResponse2002 addAnnouncement(userid, body)

Add a new announcement to the system.

FR - A registered user must be able to create a new announcement. 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.AnnouncementApi();

var userid = 56; // Number | The userid of the user that submits a new announcement.

var body = new NineToFiveApi.Body1(); // Body1 | Announcement object that is going to be submited.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addAnnouncement(userid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The userid of the user that submits a new announcement. | 
 **body** | [**Body1**](Body1.md)| Announcement object that is going to be submited. | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteAnnouncement"></a>
# **deleteAnnouncement**
> deleteAnnouncement(userid, announcementid)

Delete Announcement

This can only be done by the same user that created

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.AnnouncementApi();

var userid = 789; // Number | The user id

var announcementid = 789; // Number | The user id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAnnouncement(userid, announcementid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The user id | 
 **announcementid** | **Number**| The user id | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getListAnnouncements"></a>
# **getListAnnouncements**
> [InlineResponse2001] getListAnnouncements(userid, title)

Retrieve announcements

FR - A registered user must be able to view all job announcements. 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.AnnouncementApi();

var userid = 56; // Number | The userid of the user that views the announcements

var title = "title_example"; // String | A title that corresponds of the announcments, that user has searched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListAnnouncements(userid, title, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The userid of the user that views the announcements | 
 **title** | **String**| A title that corresponds of the announcments, that user has searched | 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAnnouncement"></a>
# **updateAnnouncement**
> InlineResponse2002 updateAnnouncement(userid, announcementid, body)

Update announcement

FR - A registered user must be able to edit one of his  announcements. 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.AnnouncementApi();

var userid = 56; // Number | The userid of the user that applies an action to the existing announcement.

var announcementid = 56; // Number | The ID of the announcement that is updated.

var body = new NineToFiveApi.Body2(); // Body2 | Announcement model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAnnouncement(userid, announcementid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The userid of the user that applies an action to the existing announcement. | 
 **announcementid** | **Number**| The ID of the announcement that is updated. | 
 **body** | [**Body2**](Body2.md)| Announcement model | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

