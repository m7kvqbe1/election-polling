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
			var _this = this;
			
			// Define render callback
			var renderHtml = function(data) {
				_this.$el.html(
					_this.template({
						constituencyOptions: data
					})
				);
			};
			
			// Fetch latest constituency options before rendering HTML to DOM
			this.model.getConstituencyOptions(renderHtml);
			
			this.delegateEvents({
				'change input[type=radio]': 'displayVoteSelectToggle',
				'change select#constituency': 'injectCandidateOptions'
			});
			
			InterfaceHelpers.setMenuItemActive('vote');
			
			return this;
		},
		
		displayVoteSelectToggle: function() {
			$('.question_2').toggleClass('hidden');
		},
		
		injectCandidateOptions: function() {
			// Get selected candidate ID from form
			var selectedId = $('#constituency option:selected').val();
			
			console.log(this.model);
			
			// Pull candidates from API, build options markup and inject into DOM
			this.model.getCandidateOptions(selectedId, function() {
				console.log(data);
			});
		}
	});
})(jQuery);