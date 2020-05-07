require('dotenv').config();

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? '/vineria-sorcuore' : '',
  env: {
    menuUrl: process.env.MENU_URL,
    trackingId: process.env.TRACKING_ID,
  },
};
