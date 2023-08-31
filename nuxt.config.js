const appUrl = 'https://nuxt-i18n-demo.netlify.app';
import { theme } from './config/vuetify.options'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: '%s - MedCoder',
    title: 'MedCoder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name : 'theme-color', content: '#07AEAF'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Monoton&display=swap"},

    ]
  },

/*    router: {
    base: '/Startup/'
  }, */

  loadingIndicator: {
    name: 'chasing-dots',
    color: '#356DFF',
    background: '#fff'
  },

  loading: '~/components/widget/LoadingBar.vue',

  transition: 'slide-bottom',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/vuetify-overrides.scss',
    '~/assets/vendors/slick-carousel/slick-theme.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/webfonts/uicons-regular-rounded.css',
    '~/assets/vendors/animate.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/i18n-config.js' },
    {src: '~/plugins/fontawesome.js', ssr: false},
    {src: '~/plugins/smooth-scroll.js', ssr: false},
    {src: '~/plugins/vue-rellax.js', ssr: false},
    {src: '~/plugins/lightbox.js', mode: 'client' },
    {src: '~/plugins/wow.js', ssr: false},
    {src: '~/plugins/vue-cursor-fx.js', mode: 'client'},
  ],

/*   serverMiddleware: [
    { path: '/api', handler: '~/api/posts.js' },
  ], */
  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' }
  ],

  devtools: { enabled: true },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify',{rtl:true}]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    "@nuxtjs/i18n",
    // https://sitemap.nuxtjs.org/
    "@nuxtjs/sitemap",
    // https://resources.com/
    "@nuxtjs/style-resources",

  ],

      /* ** i18n config   */
      i18n: {
        // Options
        //to make it seo friendly remove below line and add baseUrl option to production domain
        seo: true,
        // baseUrl: 'https://my-nuxt-app.com',
        lazy: true,
        langDir: "locales",
        locales: [
          {
            code: 'ar',
            iso: 'ar-AR',
            name: 'AR',
            file: 'ar-AR.js',
            dir: 'rtl',
            icon: 'flag-ar.svg'
          },
          {
            code: 'en',
            iso: 'en-US',
            name: 'EN',
            file: 'en-US.js',
            dir: 'ltr',
            icon: 'flag-en.svg'
          },
        ],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en'
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true
        },

      },

    /*
   ** Sitemap config
   */
   sitemap: {
    hostname: appUrl,
    trailingSlash: true,
    i18n: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://localhost:3000"
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  devtools: { enabled: false },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build:{
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false }
    }
  }
}
