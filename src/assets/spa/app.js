var AppRouter = Backbone.Router.extend({
	root: '/',
	
	appElement: $('#app'),
	
	routes: {
		"": "index",
		"vote": "vote",
		"results/{constituency}": "results",
		"*notFound": "index"
	},
	
	currentView: false,
	showView: function(view) {
		if(this.currentView) this.currentView.close();
		this.currentView = view;
		this.appElement.html(this.currentView.render().el);
	},
	
	index: function() {
		var indexView = new IndexView();
		
		this.showView(indexView);
	},

	vote: function() {
		var voteView = new VoteView();	

		this.showView(voteView);
	},
	
	results: function(constituency) {
		var resultsView = new ResultsView();
		
		this.showView(resultsView);
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start({ 
		pushState: true, 
		root: app.root 
	});
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