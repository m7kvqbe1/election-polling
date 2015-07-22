(function($) {
	'use strict';
	
	var HandlebarsHelpers = {
		bindHelpers: function() {
			for(var name in HandlebarsHelpers.helpers) {
				Handlebars.registerHelper(name, HandlebarsHelpers.helpers[name]);
			}
		},
		
		helpers: {			
			buildOptions: function(objArray) {
				if (!Array.isArray(objArray)) return;
				
				var html = '';
				objArray.forEach(function(item) {
					html = html + '<option value="' + item.id + '">' + item.name + '</option>';
				});
				
				return new Handlebars.SafeString(html);
			}
		}	
	};
	
	$(function() {
		HandlebarsHelpers.bindHelpers();
	});
})(jQuery);
