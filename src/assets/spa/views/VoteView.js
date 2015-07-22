var app = app || {};

(function($) {
	'use strict';
	
	app.VoteView = Backbone.View.extend({
		el: '#app',
		
		template: JST.VoteForm,
		
		initialize: function() {		
			this.render();
		},
		
		render: function() {
			this.$el.html(this.template());
			
			InterfaceHelpers.setMenuItemActive('vote');
			
			this.delegateEvents({
				'change input[type=radio]': 'displayVoteSelectToggle'
			});
			
			return this;
		},
		
		displayVoteSelectToggle: function() {
			$('.question_2').toggleClass('hidden');
		}
	});
})(jQuery);