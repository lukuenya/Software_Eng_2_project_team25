# NineToFiveApi.UserApi

All URIs are relative to *https://virtserver.swaggerhub.com/lukuenya/NineToFive/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UserApi.md#addUser) | **POST** /user | Add a new user to the system.


<a name="addUser"></a>
# **addUser**
> InlineResponse200 addUser(body)

Add a new user to the system.

FR - A  user must be able to register in the system. 

### Example
```javascript
var NineToFiveApi = require('nine_to_five_api');
var defaultClient = NineToFiveApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NineToFiveApi.UserApi();

var body = new NineToFiveApi.Body(); // Body | Announcement object that is going to be submited.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| Announcement object that is going to be submited. | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

