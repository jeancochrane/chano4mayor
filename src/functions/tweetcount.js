const https = require('https');

exports.handler = function(event, context, callback) {
    // This token should live as an environmental variable. In dev, set this
    // in the .env file for this repo; in production, set this in the
    // build config for Netlify.
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    if (bearerToken == null) {
        callback('Could not find required TWITTER_BEARER_TOKEN environmental variable.');
    }

    const authToken = 'Bearer ' + bearerToken;
    const queryString = '?q=chano4mayor%20OR%20chance4mayor%20OR%20chanoformayor%20OR%20chanceformayor';

    const options = {
        hostname: 'api.twitter.com',
        path: '/1.1/search/tweets.json' + queryString,
        headers: {
            'Authorization': authToken
        }
    };

    const responseHeaders = {
        'Access-Control-Allow-Origin': '*',
    }

    https.get(options, res => {
        res.setEncoding('utf-8');
        res.on('data', data => {
            callback(null, {
                statusCode: 200,
                headers: responseHeaders,
                body: String(count)
            });
        });
    }).on('error', err => {
        callback(err);
    });
}
