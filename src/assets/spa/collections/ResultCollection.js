var app = app || {};

(function($) {
	'use strict';
	
	var ResultCollection = Backbone.Collection.extend({
		model: app.resultModel
	});
	
	app.resultCollection = new ResultCollection();
})(jQuery);