import { withDocus } from 'docus'

// Learn more at https://docus.dev
export default withDocus({
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Docus settings
  docus: {
    primaryColor: '#2F4F4F'
  }
  // Router settings for deployment
  // router: {
  //   base: '/unc-sch-documentation/',
  // },
})