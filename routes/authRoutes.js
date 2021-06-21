const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      // console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB111");
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    // console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB222");
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    // console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB333");
    res.send(req.user);
  });
};
