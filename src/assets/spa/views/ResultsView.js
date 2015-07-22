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
			this.$el.html(this.template());
			
			InterfaceHelpers.setMenuItemActive('results');
			
			return this;
		}
	});
})(jQuery);