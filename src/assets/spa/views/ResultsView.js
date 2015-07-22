var app = app || {};

(function($) {
	'use strict';
	
	app.ResultsView = Backbone.View.extend({
		el: '#app',
		
		template: JST.ResultsList,
		
		initialize: function() {		
			console.log('initializing');
			
			this.render();
		},
		
		events: {
			'click .navbar-brand': 'testEventHandler'
		},
		
		render: function() {
			this.$el.html(this.template());
			
			return this;
		},
		
		testEventHandler: function() {
			alert('Hello, World!');
		}
	});
})(jQuery);