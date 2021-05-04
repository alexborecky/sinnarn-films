
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sinnarn Films | Independent Production',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'description', name: 'description', content: 'Sinnarn Films is an independent film production brand' },
      { property: 'og:image', content: 'https://ik.imagekit.io/alexborecky/Films/sinnarnogImage_wOIe0pC9r.png' },
      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: 'https://sinnarnfilms.com'},
      { property: 'og:title', content: 'Sinnarn Films | Production' },
      { property: 'og:description', content: 'Sinnarn Films is an independent film production brand' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.gstatic.com", rel:"preconnect"},
      { href: "https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Krona+One&display=swap", rel: "stylesheet"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap' },
      {rel: "preconnect", href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,700;0,800;0,900;1,400&display=swap", rel: "stylesheet"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/typography.scss',
    '@/assets/scss/main.scss',
    '@/assets/scss/layouts.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/uiKit.js',
    { src: '~/plugins/fullpage', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-fullpage.js',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
