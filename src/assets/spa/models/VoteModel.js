var app = app || {};

(function($) {
	'use strict';
	
	var VoteModel = Backbone.Model.extend({
		url: '/api/vote',
		
		defaults: {
			vote: false
		}
	});
	
	app.voteModel = new VoteModel();
})(jQuery);
