var app = app || {};

(function($) {
	'use strict';
	
	var ResultModel = Backbone.Model.extend({
		url: '/api/result'
	});
	
	app.resultModel = new ResultModel();
})(jQuery);
