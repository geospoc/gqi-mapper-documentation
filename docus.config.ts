const isProd: boolean = process.env.NODE_ENV === 'production';

export default {
  title: 'GeoQi : School & Hospital Detection',
  url: 'https://github.com/geospoc/gqi-mapper-documentation',
  theme: {
    colors: {
      primary: '#008cb7',
    },
    header: {
      title: false,
      logo: {
        light: isProd ? '/gqi-mapper-documentation/icon.png' : '/icon.png',
        dark: isProd ? '/gqi-mapper-documentation/icon.png' : '/icon.png',
      },
    },
  },
  twitter: 'geospoc',
  github: {
    repo: 'geospoc/gqi-mapper-documentation',
    branch: 'main',
  },
};
