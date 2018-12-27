let publicPath = './'

let env

if (typeof window !== 'undefined') {
  env = window
} else if (typeof global !== 'undefined') {
  env = global
}

if (env && typeof env.__PUBLIC_PATH__ === 'string') {
  publicPath = env.__PUBLIC_PATH__
}

__webpack_public_path__ = publicPath
