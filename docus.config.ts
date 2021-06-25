const isProd: boolean = process.env.NODE_ENV === 'production';

export default {
  title: 'GeoQi : School & Hospital Detection',
  url: 'https://geospoc.github.io/unc-sch-documentation',
  theme: {
    colors: {
      primary: '#2F4F4F'
    },
    header: {
      title: false,
      logo: {
        light: isProd ? '/unc-sch-documentation/icon.png' : '/icon.png',
        dark: isProd ? '/unc-sch-documentation/icon.png' : '/icon.png',
      },
    },
  },
  twitter: 'geospoc',
  github: {
    repo: 'geospoc/unc-sch-documentation',
    branch: 'main',
  },
};
