var https = require('https');

exports.handler = function(event, context, callback) {

    // This token should live as an environmental variable set in the
    // build config for Netlify.
    var bearerToken = process.env.TWITTER_BEARER_TOKEN;
    if (bearerToken == null) {
        callback('Could not find required TWITTER_BEARER_TOKEN environmental variable.');
    }

    var authToken = 'Bearer ' + bearerToken;
    var queryString = '?q=chano4mayor%20OR%20chance4mayor%20OR%20chanoformayor%20OR%20chanceformayor';

    var options = {
        hostname: 'api.twitter.com',
        path: '/1.1/search/tweets.json' + queryString,
        headers: {
            'Authorization': authToken
        }
    };

    console.log('Initializing https request...');

    https.get(options, function(res) {
        console.log('https request sent! Waiting for response...');
        res.on('data', function(data) {
            console.log('Data received');
            callback(null, {
                statusCode: 200,
                body: data
            })
        });
    }).on('error', function(err) {
        console.log('Error in the https request');
        callback(err);
    });
}
