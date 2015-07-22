var app = app || {};

(function($) {
	'use strict';
	
	var VoteModel = Backbone.Model.extend({
		url: '/api/vote',
		
		defaults: {
			vote: false
		},
		
		getConstituencyOptions: function(callback) {			
			$.getJSON('/api/data/constituencies', function(data) {				
				callback(data);
			});
		},
		
		getCandidateOptions: function(constituencyId, callback) {
			$.getJSON('/api/data/candidates/' + constituencyId, function(data) {
				callback(data);
			});
		}
	});
	
	app.voteModel = new VoteModel();
})(jQuery);
