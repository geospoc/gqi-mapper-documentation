import { withDocus } from 'docus';
const isProd: boolean = process.env.NODE_ENV === 'production';

export default withDocus({
  /**
   * Has to specify rootDir as we use nuxt-extend
   */
  rootDir: __dirname,
  target: 'static',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'UNICEF/GeoSpoc',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@geospoc' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://image.nuxtjs.org/social.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://image.nuxtjs.org/social.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'UNICEF/GeoSpoc',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://image.nuxtjs.org/social.png',
      },
    ],
  },
  /**
   * Build Modules
   */
  buildModules: ['@nuxt/image'],
  image: {
    domains: ['https://geospoc.github.io'],
    alias: {
      'gqi-mapper-documentation': isProd ? '/gqi-mapper-documentation/' : '/',
    },
  },
  // Router settings for deployment
  router: {
    base: isProd ? '/gqi-mapper-documentation/' : '/',
  },
});
