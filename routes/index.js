
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.welcome = function(req, res){
	res.render('welcome');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};