# umd-pack

a tool for creating library(forked from create-react-app)

The document of [create-react-app](https://facebook.github.io/create-react-app/docs/documentation-intro) may still useful

```shell
npm install umd-pack
```

## package.json

umd-pack need you to config `library` in your `package.json` for [webpack output](https://webpack.js.org/configuration/output/#output-library)

```json
{
  "library": "MyLibrary"
}
```

### publicPath

if you want to config publicPath(when you deploy static files to CDN), config `package.json` like below:

```json
{
  "homepage": "path/to/directory"
}
```
