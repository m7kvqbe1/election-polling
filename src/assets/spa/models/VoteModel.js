var app = app || {};

(function($) {
	'use strict';
	
	var VoteModel = Backbone.Model.extend({
		url: '/api/vote',
		
		defaults: {
			voting: false
		},
		
		constituencyOptions: [],
		
		candidateOptions: [],
		
		getConstituencyOptions: function(callback) {
			var _this = this;
			
			$.getJSON('/api/data/constituencies', function(data) {								
				_this.constituencyOptions = data;
				
				callback(data);
			});
		},
		
		getCandidateOptions: function(constituencyId, callback) {
			var _this = this;
			
			$.getJSON('/api/data/candidates/' + constituencyId, function(data) {
				_this.candidateOptions = data;
				
				callback(data);
			});
		}
	});
	
	app.voteModel = new VoteModel();
})(jQuery);
