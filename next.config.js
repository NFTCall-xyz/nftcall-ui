const path = require('path')
const { i18n } = require('./next-i18next.config')
const i18nWebpack = require('./app/i18n/dev/hmr/webpack.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  swcMinify: true,
  reactStrictMode: true,
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  compiler: {
    styledComponents: true,
    emotion: true,
  },
  eslint: {
    dirs: ['app', 'domains', 'store', 'lib', 'pages', 'UI', 'icons'],
  },
  webpack: (config, context) => {
    i18nWebpack(config, context)
    const { buildId, dev, isServer, defaultLoaders, webpack } = context
    // Important: return the modified config
    const alias = config.resolve.alias
    const emptyModule = path.resolve(__dirname, 'lib/ssr/empty-module.ts')

    if (!isServer) {
      alias.net = emptyModule
      alias.child_process = emptyModule
      alias.fs = emptyModule
    }

    // console.log(JSON.stringify(alias, null, 2))

    config.plugins.push(
      new webpack.DefinePlugin({
        __SERVER__: isServer,
        __DEV__: dev,
      })
    )

    return config
  },

  async rewrites() {
    return {
      fallback: [
        {
          source: '/onebit-api/:path*',
          destination: 'https://broker.onebit.com/api/:path*',
        },
        {
          source: '/onebit-thegraph',
          destination: 'https://api.thegraph.com/subgraphs/name/rockgold0911/onebit',
        },
      ],
    }
  },
}

module.exports = nextConfig
