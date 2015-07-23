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
		
		byFilter: function(key, value){
			filtered = this.filter(function(data){
				return data.get(key) === value;
			});

			return filtered;
		}
	});
	
	app.resultsCollection = new ResultsCollection();
})(jQuery);