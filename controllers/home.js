/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.zero = function(req, res) {
  res.render('zero', {
    title: 'Landing Page'
  });
};