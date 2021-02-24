import { withDocus } from 'docus'

// Learn more at https://docus.dev
export default withDocus({
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Docus settings: https://docus.dev/
  docus: {
    colors: {
      primary: '#E24F55',
      code: '#2A5C3C',
    },
  },
  // Router settings for deployment
  router: {
    base: '/unc-sch-documentation/',
  },
})