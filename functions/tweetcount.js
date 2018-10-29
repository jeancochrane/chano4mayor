exports.handler = function(event, context, callback) {
    var body = (process.env.TEST_VAR == null) ? 'Could not find variable TEST_VAR' : process.env.TEST_VAR;

    callback(null, {
        statusCode: 200,
        body: body
    });
}
