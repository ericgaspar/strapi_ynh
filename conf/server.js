// path: ./config/server.js

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', __PORT__),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
