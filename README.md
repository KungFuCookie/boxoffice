# How to publish to BoxOffice library

## Branches

you cannot commit to master. You must make a Pull Request from your branch e.g. dev, into master before publishing an updated version.

## Build your Components

- `npm run build`
  this creates the ES5 compiled package compatible in every browser

## Login and Publish

- `npm login`

the organisation 'boxoffice' is set in the package name in package.json
the release version is also included

```
{
  "name": "@boxoffice/boxofficetest",
  "version": "1.0.1",
  "description": "Boxoffice Component for npm",
  "main": "./lib/BoxOfficeComponent.js",
  "license": "MIT",
  "scripts": {
  "build": "webpack"
}
```

- `npm publish`

done!

## Resources

https://docs.npmjs.com/creating-and-publishing-private-packages
https://jasonwatmore.com/post/2018/04/14/react-npm-how-to-publish-a-react-component-to-npm
