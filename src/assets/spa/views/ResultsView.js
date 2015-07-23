var app = app || {};

(function($) {
	'use strict';
	
	app.ResultsView = Backbone.View.extend({
		el: '#app',
		
		template: JST.ResultsList,
		
		initialize: function() {			
			this.render();
		},
		
		render: function() {			
			this.$el.html(this.template(app.resultsCollection));
			
			InterfaceHelpers.setMenuItemActive('results');
			
			this.delegateEvents({
				'change select#filter-constituency': 'filterByConstituency'
			});
			
			return this;
		},
		
		filterByConstituency: function() {
			console.log('filterByConstituency');
		}
	});
})(jQuery);