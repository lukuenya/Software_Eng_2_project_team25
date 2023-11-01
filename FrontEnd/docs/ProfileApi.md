# NineToFiveApi.ProfileApi

All URIs are relative to *https://virtserver.swaggerhub.com/lukuenya/NineToFive/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProfile**](ProfileApi.md#addProfile) | **POST** /user/{userid}/profile | Add a new profile to the system.
[**getProfile**](ProfileApi.md#getProfile) | **GET** /user/{userid}/profile/{profileid} | View a certain profile
[**updateProfile**](ProfileApi.md#updateProfile) | **PUT** /user/{userid}/profile/{profileid} | Update Profile


<a name="addProfile"></a>
# **addProfile**
> InlineResponse2003 addProfile(userid, body)

Add a new profile to the system.

FR - A registered user must be able to create a new profile. 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.ProfileApi();

var userid = 56; // Number | The userid of the user that submits a new profile.

var body = new NineToFiveApi.Body3(); // Body3 | Profile object that is going to be submited.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addProfile(userid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The userid of the user that submits a new profile. | 
 **body** | [**Body3**](Body3.md)| Profile object that is going to be submited. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProfile"></a>
# **getProfile**
> InlineResponse2003 getProfile(userid, profileid)

View a certain profile

FR - A registered user must be able to view every profile. 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.ProfileApi();

var userid = 56; // Number | The userid of the user that view someone's profile.

var profileid = "profileid_example"; // String | The ID of the profile that is beeing viewed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProfile(userid, profileid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The userid of the user that view someone's profile. | 
 **profileid** | **String**| The ID of the profile that is beeing viewed. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProfile"></a>
# **updateProfile**
> InlineResponse2003 updateProfile(userid, profileid, body)

Update Profile

FR - A registered user must be able to edit his own profile. 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.ProfileApi();

var userid = 56; // Number | The userid of the user that edit his profile.

var profileid = 56; // Number | The ID of the profile that is updated.

var body = new NineToFiveApi.Body4(); // Body4 | Profile model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProfile(userid, profileid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The userid of the user that edit his profile. | 
 **profileid** | **Number**| The ID of the profile that is updated. | 
 **body** | [**Body4**](Body4.md)| Profile model | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

