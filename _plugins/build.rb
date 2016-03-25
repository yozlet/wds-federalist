# This plugin should get Federalist's Jekyll to build the web assets.
# Based on: https://github.com/18F/federalist-build-js

puts '[build.rb] building JS assets'
`npm install && npm run deploy &> build.log`
