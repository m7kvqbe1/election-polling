var app = app || {};

(function($) {
	'use strict';
	
	app.IndexView = Backbone.View.extend({		
		template: JST.Welcome,
		
		initialize: function() {					
			this.render();
		},
		
		render: function() {			
			this.$el.html(this.template);
			
			InterfaceHelpers.setMenuItemActive('home');
			
			return this;
		}
	});
})(jQuery);