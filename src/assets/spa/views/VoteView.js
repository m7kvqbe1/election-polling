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
				'change input[name=radio]': 'displayVoteSelectToggle',
				'change select#constituency': 'injectCandidateOptions',
				'submit form#form-voting': 'submitVote'
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
				var html = '<option value="" selected disabled>Select a candidate</option>';
				candidateOptions.forEach( function(item) {
					html = html + '<option value="' + item.id + '">' + item.name + ' - ' + item.party + '</option>';
				});
				
				_this.$el.find('select#candidate').html(html);
			};
			
			// Pull candidates from API, build options markup and inject into DOM
			this.model.getCandidateOptions(constituencyId, candidatesOptionsRender);
		},
		
		submitVote: function(e) {
			e.preventDefault();		

			this.model.set({
				email: this.$el.find('input[name="email"]').val(),
				first_name: this.$el.find('input[name="first_name"]').val(),
				surname: this.$el.find('input[name="surname"]').val(),
				constituency: this.$el.find('select[name="constituency"]').val(),
				voting: this.$el.find('input[name="voting"]:checked').val(),
				candidate: this.$el.find('select[name="candidate"]').val()
			});
            
            this.model.save();
			
			// Update view with confirmation message
			console.log('submitVote');
		}
	});
})(jQuery);