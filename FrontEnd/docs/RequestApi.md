# NineToFiveApi.RequestApi

All URIs are relative to *https://virtserver.swaggerhub.com/lukuenya/NineToFive/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRequest**](RequestApi.md#addRequest) | **POST** /user/{userid}/request | Add a new request.
[**delreq**](RequestApi.md#delreq) | **DELETE** /user/{userid}/request/{requestid} | Delete request
[**getNotificationsList**](RequestApi.md#getNotificationsList) | **GET** /user/{userid}/request | Retrieve requests
[**updateRequest**](RequestApi.md#updateRequest) | **PUT** /user/{userid}/request/{requestid} | updateNotification(response)


<a name="addRequest"></a>
# **addRequest**
> InlineResponse2005 addRequest(userid, body)

Add a new request.

FR - A  user must be able to send request to other users. 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.RequestApi();

var userid = 56; // Number | The userid of the user that edit his notifications.

var body = new NineToFiveApi.Body5(); // Body5 | Request object that is going to be submited.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRequest(userid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The userid of the user that edit his notifications. | 
 **body** | [**Body5**](Body5.md)| Request object that is going to be submited. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="delreq"></a>
# **delreq**
> InlineResponse2005 delreq(userid, requestid)

Delete request

FR - The registered user must be able to delete the request that he has send. FR - The registered user must be able to delete the request that he has received.         

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.RequestApi();

var userid = 56; // Number | The id of the user that delete a request.

var requestid = 56; // Number | The id of the request that is going to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.delreq(userid, requestid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The id of the user that delete a request. | 
 **requestid** | **Number**| The id of the request that is going to be deleted | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNotificationsList"></a>
# **getNotificationsList**
> [InlineResponse2004] getNotificationsList(userid)

Retrieve requests

FR - A registered user must be able to see his notifications(recieved requests). 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.RequestApi();

var userid = 56; // Number | The userid of the user that views his notifications.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNotificationsList(userid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The userid of the user that views his notifications. | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRequest"></a>
# **updateRequest**
> InlineResponse2006 updateRequest(userid, requestid)

updateNotification(response)

FR - A registered user must be able to respond to his notifications (recieved requests). 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.RequestApi();

var userid = 56; // Number | The userid of the user that respond to the request.

var requestid = "requestid_example"; // String | The id of the request that is being responded.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRequest(userid, requestid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**| The userid of the user that respond to the request. | 
 **requestid** | **String**| The id of the request that is being responded. | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

