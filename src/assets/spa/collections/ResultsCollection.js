var app = app || {};

(function($) {
	'use strict';
	
	var ResultModel = Backbone.Model.extend({
		defaults: {
			count: 0
		}
	});
	
	var ResultsCollection = Backbone.Collection.extend({
		model: ResultModel,
		
		url: '/api/results',
		
		initialize: function() {
			this.fetch();
		},
		
		byConstituency: function(constituency) {
			return _(this.filter(function(data) {
				return data.get("constituency") == constituency;
			}));
		}
	});
	
	app.resultsCollection = new ResultsCollection();
})(jQuery);