const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'fr', 'ar'], // Supported languages
    defaultLocale: 'en', // Default language
    localePath: path.resolve('./locales'), // Where translations live
  },
};
