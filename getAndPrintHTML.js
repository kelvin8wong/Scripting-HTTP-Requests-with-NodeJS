var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var rawData = [];

  https.get(requestOptions, function (response) {

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

getAndPrintHTML();
