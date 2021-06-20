// process.env.NODE_ENV = 'dev';
// console.log('===>ENV:::', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./dev');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}