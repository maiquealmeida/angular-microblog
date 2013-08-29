'use strict';

/* Services */

angular.module('mblogApp.services',[]).
	service('posts', function(){
			this.posts = [];

			this.get = function(){
				return posts;
			};

			this.push = function(user, text){
				var post = {
					user: user,
					text: text,
					time: Date.now()
				};

				posts.push(post);
			};
	}).
	value('version', '0.1');
