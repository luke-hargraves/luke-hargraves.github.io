// the hello world program
document.write('Hello, World!');

try {
  let message = "message";
  message.j = "Some value";  // This will throw a TypeError because 'message' is a string (primitive)
} catch (error) {
  // Capture the error with Datadog RUM
  DD_RUM.addError(error);
}
