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
