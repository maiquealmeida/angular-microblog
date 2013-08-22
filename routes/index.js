
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.welcome = function(req, res){
	res.render('welcome');
};

exports.register = function(req, res){
	res.render('register');
};

exports.login = function(req, res){
	res.render('login');
};

exports.about = function(req, res){
	res.render('about');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};