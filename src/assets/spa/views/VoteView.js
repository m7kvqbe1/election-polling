var app = app || {};

(function($) {
	'use strict';
	
	app.VoteView = Backbone.View.extend({
		el: '#app',
		
		template: JST.VoteForm,
		
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