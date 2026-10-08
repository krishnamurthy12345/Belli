const https = require('https');

const postData = 'entry.1351872952=TestName&entry.1463129353=1234567890&entry.1357317476=test@test.com&entry.449548219=TestReq&entry.1646140458=TestComm';

const options = {
  hostname: 'docs.google.com',
  port: 443,
  path: '/forms/d/e/1FAIpQLSeA8HY89HR02TQvBAW9jOsWp7_37u3-6blKQkgzb1pvV6KrCw/formResponse',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    if (res.statusCode >= 300 && res.statusCode < 400) {
       console.log('Redirect location:', res.headers.location);
    } else {
       console.log('Response body:', data.substring(0, 500));
    }
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();
