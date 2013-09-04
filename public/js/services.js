'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('mblogApp.services', []).
	service('posts', function(){
		this.posts = [];

		this.get = function(){return this.posts};

		this.push = function(user, text){
			this.posts.push({
				user: user,
				text: text,
				time: new Date().toISOString()
			});
		}
	}).
	value('version', '0.1');
