module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b346faffb108a9403e5636a989681d2'),
  },
});
