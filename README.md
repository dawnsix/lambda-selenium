# javascript based selenium PoC w/ LambdaTest
selenium + js base frame for cloud browser testing within ci pipeline

pro tip: dont use lambdatest - you get what you pay for and thats all I'm saiyan

- create ./data/environment.js + export test data object
- create dotenv cfg and add username + key
- create lambdatest configs and if running within ci, provide required env vars + import secrets/env vars from ci platform
- run bond tunnel for local testing, add firewall exceptions if required else port forward using chisel or something (no reverse-bind option, superlame)
- run your test and endure the painful ux of lambdatest

for additional assurance that lambdatest bites, download their js mocha demo project which is also failing out of the box
