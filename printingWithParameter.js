var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };


function getAndPrintHTML (options) {

  var rawData = [];

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      return rawData.push(data)
    });

    response.on('end', function() {
      console.log(rawData + '\n')
      console.log('Response stream complete.');
    });
  })
}

getAndPrintHTML(requestOptions);
