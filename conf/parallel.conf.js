import * as dotenv from 'dotenv'
dotenv.config()

var config = {
  commanCapabilities: {
    build: "sherpa-poc-threaded",
    tunnel: true
  },
  multiCapabilities: [
    {
      "browserName": "Firefox",
      "platform": "Windows 10",
      "browserVersion": "latest",
      "console": "true",
      "LT:Options": {
        "video": true,
        "visual": true,
        "platformName": "Windows 10",
        "project": "sherpa",
        "build": "sherpa-poc-grid",
        "tunnel": true,
        "w3c": true,
        "plugin": "node_js-mocha"
      }
    },
    {
      "browserName": "chrome",
      "platform": "Windows 11",
      "browserVersion": "102",
      "console": "true",
      "LT:Options": {
        "video": true,
        "visual": true,
        "platformName": "Windows 10",
        "project": "sherpa",
        "build": "sherpa-poc-grid",
        "tunnel": true,
        "w3c": true,
        "plugin": "node_js-mocha"
      }
    }
  ]
};

var capabilities = [];

config.multiCapabilities.forEach(function(caps) {
  var temp_caps = JSON.parse(JSON.stringify(config.commanCapabilities));

  for (var i in caps) temp_caps[i] = caps[i];
  capabilities.push(temp_caps);
});

export const caps = capabilities