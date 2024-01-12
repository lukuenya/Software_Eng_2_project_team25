// Constructor function for creating ResponsePayload objects
var ResponsePayload = function (code, payload) {
  this.code = code;
  this.payload = payload;
};

// Function to create and return a ResponsePayload object
exports.respondWithCode = function (code, payload) {
  return new ResponsePayload(code, payload);
};

// Function to set the HTTP response code based on provided arguments
var setResponseCode = function (arg1, arg2) {
  if (arg2 && Number.isInteger(arg2)) {
    return arg2;
  } else if (arg1 && Number.isInteger(arg1)) {
    return arg1;
  }
  // Default to 200 if no valid code is provided
  return 200;
};

// Function to set the response body based on provided arguments
var setResponseBody = function (arg1, arg2) {
  if (arg2 && !(arg2 instanceof ResponsePayload)) {
    return arg2;
  } else {
    return arg1;
  }
};

// Function to write a JSON response to the provided response object
exports.writeJson = function (response, arg1, arg2) {
  var code = setResponseCode(arg1, arg2);
  var payload = setResponseBody(arg1, arg2);

  if (typeof payload === 'object') {
    // Convert payload to JSON format with indentation
    payload = JSON.stringify(payload, null, 2);
  }

  // Set HTTP headers and end the response
  response.writeHead(code, { 'Content-Type': 'application/json' });
  response.end(payload);
};
