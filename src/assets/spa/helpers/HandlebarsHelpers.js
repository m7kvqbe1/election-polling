(function($) {
	'use strict';
	
	var HandlebarsHelpers = {
		bindHelpers: function() {
			for(var name in HandlebarsHelpers.helpers) {
				Handlebars.registerHelper(name, HandlebarsHelpers.helpers[name]);
			}
		},
		
		helpers: {
			getCandidates: function(constituencyId) {
				// Get candidates from API via AJAX
				var candidates = ['foo', 'bar', 'baz', 'qux'];
				return new Handlebars.SafeString(candidates);
			},
			
			getConstituencies: function() {
				// Get candidates from API via AJAX
				var constituencies = ['foo', 'bar', 'baz', 'qux'];
				return new Handlebars.SafeString(constituencies);
			}
		}	
	};
	
	$(function() {
		HandlebarsHelpers.bindHelpers();
	})
})(jQuery)
