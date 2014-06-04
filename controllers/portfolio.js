/**
 * GET /portfolio
 * Portfolio page.
 */

exports.getPortfolio = function(req, res) {
  res.render('portfolio/port', {
    title: 'Portfolio'
  });
};

/**
 * GET /portfolio/fsg
 * falling sand game page.
 */

exports.getFSG = function(req, res) {
  res.render('portfolio/fsg', {
    title: 'Falling Sand Game'
  });
};

/**
 * GET /portfolio/resume
 * resume page.
 */

exports.getResume = function(req, res) {
  res.render('portfolio/resume', {
    title: 'Resume'
  });
};