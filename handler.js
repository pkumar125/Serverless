'use strict';

module.exports.hello = async (event) => {

var message = 'HELLO WORLD';
	const name = event.queryStringParameters && event.queryStringParameters.name;

	if (name !== null) {
		message = 'Hello ' + name;
	}

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.moi = async (event) => {

var message = 'HELLO WORLD';
	const name = event.pathParameters && event.pathParameters.name;

	if (name !== null) {
		message = 'Hello ' + name;
	}

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.hola = async (event) => {
const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: body,
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
