var https = require('https');

module.exports = function getHTML (options, callback) {
 var rawData = [];

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      return rawData.push(data)
    });

    response.on('end', function() {
      callback(rawData + '\n')
      console.log('Response stream complete.');
    });
  })

};