var app = app || {};

(function($) {
	'use strict';
	
	app.VoteView = Backbone.View.extend({		
		model: app.voteModel,
		
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
				'change input[name="voting"]': 'displayVoteSelectToggle',
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
			
			if(!Validate.validateForm(this.$el.find('form'))) {
				return false;
			}

			this.model.set({
				email: this.$el.find('input[name="email"]').val(),
				first_name: this.$el.find('input[name="first_name"]').val(),
				surname: this.$el.find('input[name="surname"]').val(),
				constituency: this.$el.find('select[name="constituency"]').val(),
				voting: this.$el.find('input[name="voting"]:checked').val(),
				candidate: this.$el.find('select[name="candidate"]').val()
			});
			
			this.model.save(null, {
				success: function(model, response) {					
					// Display success / thank you message and disable form
					app.Element.find('button[type=submit]').prop('disabled', true);
					app.Element.find('form .notice').html('Thank you your vote has been counted!');
				},

				error: function(model, response) {		            
					// Display clean error response from API
					var apiResponse = JSON.parse(response.responseText);		            
					app.Element.find('form .notice').html(apiResponse.message);
				}
			});
		}
	});
})(jQuery);