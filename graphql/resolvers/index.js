  
const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const foodResolver = require('./food');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver,
  ...foodResolver
};

module.exports = rootResolver;