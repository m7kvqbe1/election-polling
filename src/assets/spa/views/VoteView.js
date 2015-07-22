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
			var initialRender = function(constituencyOptions) {
				_this.$el.html(
					_this.template({
						constituencyOptions: constituencyOptions
					})
				);
			};
			
			// Fetch latest constituency options before rendering HTML to DOM
			this.model.getConstituencyOptions(initialRender);
			
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
			var _this = this;
			
			// Get selected candidate ID from form
			var constituencyId = $('#constituency option:selected').val();
			
			// Define render callback
			var candidatesOptionsRender = function(candidateOptions) {
				// Only changes part of the view
				var html = '<option value="" selected disabled>Please select a candidate</option>';
				candidateOptions.forEach( function(item) {
					html = html + '<option value="' + item.id + '">' + item.name + ' - ' + item.party + '</option>';
				});
				
				_this.$el.find('select#candidate').html(html);
			};
			
			// Pull candidates from API, build options markup and inject into DOM
			this.model.getCandidateOptions(constituencyId, candidatesOptionsRender);
		}	
	});
})(jQuery);