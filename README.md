# How to publish to BoxOffice library

## Build your Components

`npm run build`
this creates the ES5 compiled package compatible in every browser

## Login and Publish

`npm login`

the organisation `boxoffice` is set in the package name

"name": "@boxoffice/boxofficetest",
"version": "1.0.1",
"description": "Boxoffice Component for npm",
"main": "./lib/BoxOfficeComponent.js",
"license": "MIT",
"scripts": {
"build": "webpack"
},

`npm publish`

done!!
