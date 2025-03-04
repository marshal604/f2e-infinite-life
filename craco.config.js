const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@services': path.resolve(__dirname, 'src/services'),
      '@school': path.resolve(__dirname, 'src/modules/school')
    }
  }
};