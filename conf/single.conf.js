import * as dotenv from 'dotenv'
dotenv.config()

export const caps = [{
	"browserName": "chrome",
	"browserVersion": "75.0",
	"console": "true",
	"LT:Options": {
		"video": true,
		"visual": true,
		"platformName": "Windows 10",
		"build": "sherpa-poc",
		"project": "sherpa",
		"tunnel": true,
		"w3c": true,
		"plugin": "node_js-mocha"
	}
}];