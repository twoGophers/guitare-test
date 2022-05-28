export default {
  ssr: false,
  loadingIndicator: {
    name: 'circle',
    color: '#FFA124',
    background: '#D2F4DE'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gitar-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/router',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/axios',
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBMo_vWyglcj3mG2ZKLnh3bUkEkvfZ-AB4",
          authDomain: "guitare-514b0.firebaseapp.com",
          databaseURL: "https://guitare-514b0-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "guitare-514b0",
          storageBucket: "guitare-514b0.appspot.com",
          messagingSenderId: "828101588323",
          appId: "1:828101588323:web:15f9b18623dbaa87384f56",
          measurementId: "G-SPGJG9EQ8N"

        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    base: '/guitare-test/'
  },
}
