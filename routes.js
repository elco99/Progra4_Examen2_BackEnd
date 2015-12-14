var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var giftsController = require('./controllers/giftController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Students')}}},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'GET', path: '/v1/user/get', config: usersController.GetUsuario},
	{method: 'POST', path: '/v1/user/post', config: usersController.PostUsuario},
	{method: 'PUT', path: '/v1/user/put', config: usersController.PutUsuario},
	{method: 'GET', path: '/v1/gift/get', config: giftsController.GetGift},
	{method: 'POST', path: '/v1/gift/post', config: giftsController.PostGift},
	{method: 'PUT', path: '/v1/gift/put', config: giftsController.PutGift}
];
