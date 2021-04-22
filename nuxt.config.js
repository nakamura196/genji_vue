const environment = process.env.NODE_ENV
const env = require(`./env/${environment}.ts`)

env.projectNameJa = 'デジタル源氏物語'
env.projectNameEn = 'Digital Tale of Genji'

env.projectDescriptionJa = '源氏物語本文研究プラットフォームを目指して'
env.projectDescriptionEn =
  'Toward a platform for full-text research on the Tale of Genji'

env.GOOGLE_ANALYTICS_ID = 'UA-154177099-1'
env.SHORT_NAME = 'デジタル源氏'

/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/', // '/genji/',
        },
      }
    : {}

const ssr = environment === 'production'

// path
const baseUrl = env.BASE_URL
const baseDir = env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = 'ja'
const siteName = env.projectNameJa
const siteDesc = env.projectDescriptionJa
const siteKeywords = env.projectKeywords

// images
const iconImages = basePath + 'img/icons/'
const ogpImages = basePath + 'img/ogp/' // cdnPath + 'img/ogp/'

// pwa
const shortName = env.SHORT_NAME
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

export default {
  ...routerBase,
  env,
  // serverMiddleware: ['~~/api/'],
  workbox: {
    runtimeCaching: [
      {
        urlPattern: baseDir + '.*',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'my-cache',
          cacheExpiration: {
            maxAgeSeconds: 24 * 60 * 60 * 30,
          },
        },
      },
    ],
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    title: siteName,
    meta: [
      { chatset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}home.png`,
      },
      /*
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ja_JP'
      }
      */
      { name: 'twitter:card', content: 'summary_large_image' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
    ],
  },
  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#E64A19', height: '5px' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: env.GOOGLE_ANALYTICS_ID,
      },
    ],
    'nuxt-leaflet',
    // ['@nuxtjs/moment', ['ja', 'en']],
    '@nuxtjs/moment',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    // strategy: 'no_prefix'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
    // generate: true,
    exclude: [
      '/admin',
      '/test*',
      '/en/test*',
      '/dev/*',
      '/en/dev/*',
      '/redirect',
      '/en/redirect',
      '/app',
      '/en/app',
    ],
    routes(callback) {
      const routes = []
      const ids = ['taisei', 'zenshu']
      for (const id of ids) {
        for (let vol = 1; vol <= 54; vol++) {
          routes.push(`/search/${id}/${vol}`)
        }
      }

      callback(null, routes)
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },

  generate: {
    routes() {
      const baseUrl = process.env.BASE_URL

      const fs = require('fs')
      const curation = JSON.parse(fs.readFileSync('static/data/info.json'))

      const pages = []

      const ids = ['taisei', 'zenshu']

      for (const id of ids) {
        for (let vol = 1; vol <= 54; vol++) {
          const curationUri =
            baseUrl +
            '/data/vol/' +
            ('0000000000' + vol).slice(-2) +
            '/curation.json'

          const curationData = JSON.parse(
            fs.readFileSync(
              'static/data/vol/' +
                ('0000000000' + vol).slice(-2) +
                '/curation.json'
            )
          )

          const map = {}
          let count = 1
          let selections = curation.selections
          for (let i = 0; i < selections.length; i++) {
            const selection = selections[i]
            const members = selection.members
            for (let j = 0; j < members.length; j++) {
              const member = members[j]
              map[count] = member.label
              count += 1
            }
          }

          const errs = {}

          const jo = curationData.label

          selections = curationData.selections

          const pageMap = {}

          const config = {
            taisei: {
              label: '校異源氏物語',
              check: '校異源氏物語',
            },
            zenshu: {
              label: '新編日本古典文学全集',
              check: '新編日本古典文学全集',
            },
          }

          for (let i = 0; i < selections.length; i++) {
            const selection = selections[i]
            const members = selection.members
            for (let j = 0; j < members.length; j++) {
              const member = members[j]
              const label = member.label

              if (label === '脱文・錯簡') {
                const org = selection.within.label
                if (!errs[org]) {
                  errs[org] = []
                }

                const map = {}
                const metadata = member.metadata

                for (let k = 0; k < metadata.length; k++) {
                  const m = metadata[k]
                  map[m.label] = m.value
                }

                let memberId = member['@id']
                const tmp = memberId.split('#xywh=')
                const canvas = tmp[0]
                const xywh = tmp[1].split(',')
                const y = Number(xywh[1]) - 150
                const h = Number(xywh[3]) + 150
                memberId =
                  canvas +
                  '#xywh=' +
                  xywh[0] +
                  ',' +
                  y +
                  ',' +
                  xywh[2] +
                  ',' +
                  h

                errs[org].push({
                  page: map.Page,
                  description: map.Text,
                  type: map.Type,
                  url:
                    baseUrl +
                    '/mirador/?params=' +
                    encodeURIComponent(
                      JSON.stringify([
                        {
                          manifest: selection.within['@id'],
                          canvas: memberId,
                        },
                      ])
                    ) +
                    '&annotationState=on',
                })
              }

              if (id === 'zenshu') {
                if (!label.includes(config[id].check)) {
                  continue
                }
              } else if (!label.includes(config[id].check)) {
                continue
              }

              const page = Number(label.split(' ')[1].split('.')[1])

              if (!pageMap[page]) {
                pageMap[page] = {
                  windows: [],
                }
              }

              let memberId = member['@id']
              const tmp = memberId.split('#xywh=')
              const canvas = tmp[0]
              const xywh = tmp[1].split(',')
              const y = Number(xywh[1]) - 150
              const h = Number(xywh[3]) + 150
              memberId =
                canvas + '#xywh=' + xywh[0] + ',' + y + ',' + xywh[2] + ',' + h

              pageMap[page].windows.push({
                manifestId: selection.within['@id'],
                canvas: member['@id'],
                label: selection.within.label,
                url:
                  baseUrl +
                  '/mirador/?params=' +
                  encodeURIComponent(
                    JSON.stringify([
                      {
                        manifest: selection.within['@id'],
                        canvas: memberId,
                      },
                    ])
                  ) +
                  '&annotationState=on',
              })
            }
          }

          for (const page in pageMap) {
            const params = []
            const obj = pageMap[page]
            for (let i = 0; i < obj.windows.length; i++) {
              const window = obj.windows[i]
              params.push({
                manifest: window.manifestId,
                canvas: window.canvas,
              })
            }
            pageMap[page].comp_url =
              baseUrl +
              '/mirador/?params=' +
              encodeURIComponent(JSON.stringify(params)) +
              '&annotationState=on&sidePanel=false'
          }

          pages.push({
            route: `/search/${id}/${vol}`,
            palyload: {
              infoMap: map,
              vol,
              jo,
              curationUri,
              pageMap,
              errs,
              config,
            },
          })
        }
      }

      return pages
    },
  },
}
