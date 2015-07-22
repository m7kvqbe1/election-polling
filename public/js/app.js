this["JST"] = this["JST"] || {};

this["JST"]["ResultsList"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\n	<li><a href=\"/#\">Kineo Technical Task</a></li>\n	<li><a href=\"/#results\">Results</a></li>\n	<li class=\"active\">Index</li>\n</ol>\n\n<div class=\"welcome\">\n	<hr />\n	\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n	\n	<hr />\n	\n	<div class=\"clearfix\"></div>\n	\n	<div class=\"container-fluid\">\n		<table class=\"table table-hover\">\n			<!-- Use handlebars to generate tabular result display -->\n			<thead>\n				<tr>\n					<th>#</th>\n					<th>Candidate</th>\n					<th>Constituency</th>\n					<th>Vote Count</th>\n				</tr>\n			</thead>\n			<tbody>\n				<! --- Results --->\n				<tr>\n					<td>1</td>\n					<td>Mike Hancock</td>\n					<td>Portsmouth South</td>\n					<td>4324</td>\n				</tr>\n				\n				<tr>\n					<td>1</td>\n					<td>Mike Hancock</td>\n					<td>Portsmouth South</td>\n					<td>4324</td>\n				</tr>\n				\n				<tr>\n					<td>1</td>\n					<td>Mike Hancock</td>\n					<td>Portsmouth South</td>\n					<td>4324</td>\n				</tr>\n				\n				<tr>\n					<td>1</td>\n					<td>Mike Hancock</td>\n					<td>Portsmouth South</td>\n					<td>4324</td>\n				</tr>\n				\n				<tr>\n					<td>1</td>\n					<td>Mike Hancock</td>\n					<td>Portsmouth South</td>\n					<td>4324</td>\n				</tr>\n				\n				<tr>\n					<td>1</td>\n					<td>Mike Hancock</td>\n					<td>Portsmouth South</td>\n					<td>4324</td>\n				</tr>\n				\n				<tr>\n					<td>1</td>\n					<td>Mike Hancock</td>\n					<td>Portsmouth South</td>\n					<td>4324</td>\n				</tr>\n			</tbody>\n		</table>\n		\n		<hr />\n		\n		<div class=\"pull-right text-right\">\n			<!-- Filter results by constituency -->\n			<label for=\"filter_constituency\">Filter:&nbsp;</label>\n			<select id=\"filter_constituency\">\n				<option value=\"\" selected disabled>Select a constituency</option>\n				<option value=\"1\">Portsmouth South</option>\n			</select>\n		</div>\n	</div>\n</div>";
},"useData":true});

this["JST"]["VoteForm"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<ol class=\"breadcrumb\">\n	<li><a href=\"/#\">Kineo Technical Task</a></li>\n	<li><a href=\"/#vote\">Vote</a></li>\n	<li class=\"active\">Index</li>\n</ol>\n\n<div class=\"welcome\">	\n	<hr />\n	\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n	\n	<hr />\n	\n	<form id=\"form-voting\" action=\"\" method=\"POST\" class=\"form-horizontal\">\n		<div class=\"form-group\">\n			<label for=\"first_name\" class=\"col-sm-2 control-label\">First Name:</label>\n			<div class=\"col-sm-10\">\n				<input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control\" />\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<label for=\"surname\" class=\"col-sm-2 control-label\">Surname:</label>\n			<div class=\"col-sm-10\">\n				<input type=\"text\" name=\"surname\" id=\"surname\" class=\"form-control\" />\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<label for=\"email\" class=\"col-sm-2 control-label\">Email:</label>\n			<div class=\"col-sm-10\">\n				<input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" />\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<label for=\"constituency\" class=\"col-sm-2 control-label\">Constituency:&nbsp;</label>\n			<div class=\"col-sm-10\">\n				<select name=\"constituency\" id=\"constituency\">\n					<option value=\"\" disabled selected>Select a constituency</option>\n					"
    + alias2(((helper = (helper = helpers.getConstituencies || (depth0 != null ? depth0.getConstituencies : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"getConstituencies","hash":{},"data":data}) : helper)))
    + "\n				</select>\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<label class=\"col-sm-2 control-label\">Are you going to vote?&nbsp;</label>\n			<div class=\"col-sm-10\">\n				<input type=\"radio\" name=\"question_1\" id=\"question_1_yes\" value=\"Yes\" />&nbsp;<label for=\"question_1_yes\">Yes</label>\n				&nbsp;<input type=\"radio\" name=\"question_1\" id=\"question_1_no\" value=\"No\" checked=\"checked\" />&nbsp;<label for=\"question_1_no\">No</label>\n			</div>\n		</div>\n		\n		<div class=\"form-group hidden question_2\">\n			<!-- Hidden unless first question is answered yes - use Backbone events -->\n			<label for=\"candidate\" class=\"col-sm-2 control-label\">Who are you going to vote for?&nbsp;</label>\n\n			<div class=\"col-sm-10\">			\n				<!-- Populated via AJAX with the candidates for the constituency specified above -->\n				<select name=\"candidate\" id=\"candidate\">\n					<option value=\"\" disabled selected>Select a candidate</option>\n					<option value=\"1\">Mike Hancock</option>\n					"
    + alias2((helpers.getCandidates || (depth0 && depth0.getCandidates) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.constituencyId : stack1),{"name":"getCandidates","hash":{},"data":data}))
    + "\n				</select>\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<div class=\"col-sm-2\">\n				\n			</div>\n			<div class=\"col-sm-10\">\n				<button type=\"submit\" class=\"btn btn-default\">Submit</button>\n			</div>\n		</div>\n	</form>\n</div>";
},"useData":true});

this["JST"]["Welcome"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\n	<li><a href=\"/#\">Kineo Technical Task</a></li>\n	<li><a href=\"#\">Home</a></li>\n	<li class=\"active\">Welcome</li>\n</ol>\n\n<div class=\"welcome\">\n	<h1>Welcome to the Kineo Technical Task!</h1>\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n</div>";
},"useData":true});;(function($) {
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
;var InterfaceHelpers = {
	setMenuItemActive: function(menuItem) {		
		$('.navbar-nav li').removeClass('active');
		$('.navbar-nav .' + menuItem).addClass('active');
	}
};;var Validate = {
	
};;var app = app || {};

(function($) {
	'use strict';
	
	var ResultCollection = Backbone.Collection.extend({
		model: app.resultModel
	});
	
	app.resultCollection = new ResultCollection();
})(jQuery);;var app = app || {};

(function($) {
	'use strict';
	
	var ResultModel = Backbone.Model.extend({
		url: '/api/result'
	});
	
	app.resultModel = new ResultModel();
})(jQuery);
;var app = app || {};

(function($) {
	'use strict';
	
	var VoteModel = Backbone.Model.extend({
		url: '/api/vote',
		
		defaults: {
			vote: false
		}
	});
	
	app.voteModel = new VoteModel();
})(jQuery);
;var app = app || {};

(function($) {
	'use strict';
	
	app.IndexView = Backbone.View.extend({
		el: '#app',
		
		template: JST.Welcome,
		
		initialize: function() {					
			this.render();
		},
		
		render: function() {			
			this.$el.html(this.template);
			
			InterfaceHelpers.setMenuItemActive('home');
			
			return this;
		}
	});
})(jQuery);;var app = app || {};

(function($) {
	'use strict';
	
	app.ResultsView = Backbone.View.extend({
		el: '#app',
		
		template: JST.ResultsList,
		
		initialize: function() {		
			this.render();
		},
		
		render: function() {
			this.$el.html(this.template());
			
			InterfaceHelpers.setMenuItemActive('results');
			
			return this;
		}
	});
})(jQuery);;var app = app || {};

(function($) {
	'use strict';
	
	app.VoteView = Backbone.View.extend({
		el: '#app',
		
		template: JST.VoteForm,
		
		initialize: function() {		
			this.render();
		},
		
		render: function() {
			this.$el.html(this.template());
			
			InterfaceHelpers.setMenuItemActive('vote');
			
			this.delegateEvents({
				'change input[type=radio]': 'displayVoteSelectToggle'
			});
			
			return this;
		},
		
		displayVoteSelectToggle: function() {
			$('.question_2').toggleClass('hidden');
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
			new app.IndexView();
		},
		
		resultsView: function() {			
			new app.ResultsView();
		},
		
		voteView: function() {			
			new app.VoteView();
		}
	});
	
	app.Router = new Router();
	
	Backbone.history.start();
	
	/*Backbone.history.start({
		pushState: true, 
		root: app.Router.root
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