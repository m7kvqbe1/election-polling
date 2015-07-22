this["JST"] = this["JST"] || {};

this["JST"]["ResultsList"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\n	<li><a href=\"/#\">Kineo Technical Task</a></li>\n	<li><a href=\"/#results\">Results</a></li>\n	<li class=\"active\">Index</li>\n</ol>\n\n<div class=\"welcome\">\n	<h1>Results View</h1>\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n</div>";
},"useData":true});

this["JST"]["VoteForm"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\n	<li><a href=\"/#\">Kineo Technical Task</a></li>\n	<li><a href=\"/#vote\">Vote</a></li>\n	<li class=\"active\">Index</li>\n</ol>\n\n<div class=\"welcome\">\n	<h1>Vote View</h1>\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n</div>";
},"useData":true});

this["JST"]["Welcome"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\n	<li><a href=\"/#\">Kineo Technical Task</a></li>\n	<li><a href=\"#\">Home</a></li>\n	<li class=\"active\">Welcome</li>\n</ol>\n\n<div class=\"welcome\">\n	<h1>Welcome to the Kineo Technical Task!</h1>\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n</div>";
},"useData":true});;;var app = app || {};

(function($) {
	'use strict';
	
	app.IndexView = Backbone.View.extend({
		el: '#app',
		
		template: JST.Welcome,
		
		initialize: function() {		
			console.log('initializing');			
			
			this.render();
		},
		
		events: {
			'click .navbar-brand': 'testEventHandler'
		},
		
		render: function() {			
			this.$el.html(this.template);
			
			return this;
		},
		
		testEventHandler: function() {
			alert('Hello, World!');
		}
	});
})(jQuery);;var app = app || {};

(function($) {
	'use strict';
	
	app.ResultsView = Backbone.View.extend({
		el: '#app',
		
		template: JST.ResultsList,
		
		initialize: function() {		
			console.log('initializing');
			
			this.render();
		},
		
		events: {
			'click .navbar-brand': 'testEventHandler'
		},
		
		render: function() {
			this.$el.html(this.template());
			
			return this;
		},
		
		testEventHandler: function() {
			alert('Hello, World!');
		}
	});
})(jQuery);;var app = app || {};

(function($) {
	'use strict';
	
	app.VoteView = Backbone.View.extend({
		el: '#app',
		
		template: JST.VoteForm,
		
		initialize: function() {		
			console.log('initializing');
			
			this.render();
		},
		
		events: {
			'click .navbar-brand': 'testEventHandler'
		},
		
		render: function() {
			this.$el.html(this.template());
			
			return this;
		},
		
		testEventHandler: function() {
			alert('Hello, World!');
		}
	});
})(jQuery);;var app = app || {};

$(function() {
	'use strict';
	
	var Router = Backbone.Router.extend({
		root: '/',
		
		routes: {
			"": "indexView",
			"vote": "voteView",
			"results": "resultsView",
			"*notFound": "indexView"
		},

		indexView: function() {
			console.log('IndexView');
			
			new app.IndexView();
		},
		
		resultsView: function() {
			console.log('ResultsView');
			
			new app.ResultsView();
		},
		
		voteView: function() {
			console.log('VoteView');
			
			new app.VoteView();
		}
	});
	
	app.Router = new Router();
	
	Backbone.history.start();
	
	/*Backbone.history.start({
		pushState: true, 
		root: '/'
	});*/
});

// Bypass router for anchors with data-bypass="true" data attribute
$(document).on("click", "a[href]:not([data-bypass])", function(evt) {
	var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
	var root = location.protocol + "//" + location.host + app.root;

	if (href.prop.slice(0, root.length) === root) {
		evt.preventDefault();
		Backbone.history.navigate(href.attr, true);
	}
});
//# sourceMappingURL=app.js.map