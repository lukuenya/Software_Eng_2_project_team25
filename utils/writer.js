// Constructor for ResponsePayload object.
var ResponsePayload = function(code, payload) {
  this.code = code; // HTTP status code
  this.payload = payload; // payload (e.g. error message)
}

// Export functions for writing responses with status codes and payloads
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

var writeJson = exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  if(arg1 && arg1 instanceof ResponsePayload) { // If we have a ResponsePayload object
    writeJson(response, arg1.payload, arg1.code); // Write the response
    return;
  }

  if(arg2 && Number.isInteger(arg2)) { // If we have a code
    code = arg2; // Set the code to the arg2
  }
  else {
    if(arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  if(code && arg1) { // If we have a code and a payload
    payload = arg1; // Set the payload to the arg1
  }
  else if(arg1) { // If we only have a payload
    payload = arg1; // Set the payload to the arg1
  }

  if(!code) { 
    // if no response code given, we default to 200
    code = 200;
  }
  if(typeof payload === 'object') { // If the payload is an object
    payload = JSON.stringify(payload, null, 2); // Stringify the payload
  }
  response.writeHead(code, {'Content-Type': 'application/json'}); // Write the response
  response.end(payload); // End the response
}
