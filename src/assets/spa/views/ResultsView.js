var app = app || {};

(function($) {
	'use strict';
	
	app.ResultsView = Backbone.View.extend({		
		template: JST.ResultsList,
		
		initialize: function() {			            
            this.collection = app.resultsCollection
            
            this.listenTo(this.collection, 'reset add remove change sort sync', this.render);
            
            this.collection.fetch();
		},
		
		render: function(filteredCollection) {			
			if(typeof filteredCollection !== 'undefined') {
				this.collection = filteredCollection;
			}
						
			this.$el.html(this.template(this.collection));
			
			InterfaceHelpers.setMenuItemActive('results');
			
			this.delegateEvents({
				'change select#filter-constituency': 'filterByConstituency'
			});
			
			return this;
		},
		
		filterByConstituency: function() {
			var constituency = $('select#filter-constituency').text();
			console.log(this.collection.byConstituency(constituency));
		}
	});
})(jQuery);