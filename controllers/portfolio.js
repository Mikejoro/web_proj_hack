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
// var types = '[{"Wall", 0},
//     {"Sand", 1},
//     {"Water", 2},
//     {"Acid", 3},
//     {"Wax", 4},
//     {"Fire", 5}]';
exports.getFSG = function(req, res) {
  res.render('portfolio/fsg', {
    title: 'Falling Sand Game', 
    types: ["Wall",
    "Sand",
    "Water",
    "Acid",
    "Wax",
    "Fire"]
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