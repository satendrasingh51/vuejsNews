module.exports = {
  mode: 'universal',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/',
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      }
    },
    pages: {
      index: {
        // entry for the page
        entry: 'src/index/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // when using the entry-only string format,
      // template is inferred to be `public/subpage.html`
      // and falls back to `public/index.html` if not found.
      // Output filename is inferred to be `subpage.html`.
      subpage: 'src/subpage/main.js'
    },
  /*
   ** Headers of the page
   */
  server: {
    port: 8080, // default: 3000
    host: 'localhost', // default: localhost
  },
  node_port: 3000,
  head: {
    title: 'Acetory', // process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Acetory',
      },
       { hid: 'og:description', property: 'og:description', content: 'Acetory'},
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },

    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Material+Icons',
    },

  ],
    script: [{
        src: '/OpenLayers.js',
      },
      {
        innerHTML: 'console.log(\'hello acemapsssss\')',
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/Loading.vue',
  /*
   ** Global CSS
   */
  css: [
    '@/assets/styles/site.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-js-modal',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  router:{
      extendRoutes (routes, resolve) {
      routes.push({
        name: 'profile',
        path: '/profile/:id',
        component: resolve(__dirname, 'pages/profile/index.vue')
      })
    }
}  
};
