this["JST"] = this["JST"] || {};

this["JST"]["ResultsList"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "				<option value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.constituency_id : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.constituency : stack1), depth0))
    + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "				<tr>\n					<td>\n						"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n					</td>\n					<td>\n						"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.party : stack1), depth0))
    + "\n					</td>\n					<td>\n						"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.constituency : stack1), depth0))
    + "\n					</td>\n					<td>\n						"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.count : stack1), depth0))
    + "\n					</td>\n				</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ol class=\"breadcrumb\">\n	<li><a href=\"/#\">Kineo Technical Task</a></li>\n	<li><a href=\"/#results\">Results</a></li>\n	<li class=\"active\">Index</li>\n</ol>\n\n<div class=\"welcome\">\n	<hr />\n	\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n	\n	<hr />\n	\n	<div class=\"clearfix\"></div>\n	\n	<div class=\"container-fluid\">		\n		<div class=\"pull-right text-right\">\n			<!-- Filter results by constituency -->\n			<label for=\"filter-constituency\">Filter:&nbsp;</label>\n			<select id=\"filter-constituency\">\n				<option value=\"showall\" selected>Show All</option>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.models : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</select>\n		</div>\n		\n		<table class=\"table table-hover\">\n			<thead>\n				<tr>\n					<th>Candidate Name</th>\n					<th>Party</th>\n					<th>Constituency</th>\n					<th>Vote Count</th>\n				</tr>\n			</thead>\n			<tbody>\n				<!-- Results -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.models : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</tbody>\n		</table>\n	</div>\n</div>";
},"useData":true});

this["JST"]["VoteForm"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<ol class=\"breadcrumb\">\n	<li><a href=\"/#\">Kineo Technical Task</a></li>\n	<li><a href=\"/#vote\">Vote</a></li>\n	<li class=\"active\">Index</li>\n</ol>\n\n<div class=\"welcome\">	\n	<hr />\n	\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n	\n	<hr />\n	\n	<form id=\"form-voting\" class=\"form-horizontal\">\n		<div class=\"form-group\">\n			<label for=\"first_name\" class=\"col-sm-2 control-label\">First Name:</label>\n			<div class=\"col-sm-10\">\n				<input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control required\" />\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<label for=\"surname\" class=\"col-sm-2 control-label\">Surname:</label>\n			<div class=\"col-sm-10\">\n				<input type=\"text\" name=\"surname\" id=\"surname\" class=\"form-control required\" />\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<label for=\"email\" class=\"col-sm-2 control-label\">Email:</label>\n			<div class=\"col-sm-10\">\n				<input type=\"email\" name=\"email\" id=\"email\" class=\"form-control required\" />\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<label for=\"constituency\" class=\"col-sm-2 control-label\">Constituency:&nbsp;</label>\n			<div class=\"col-sm-10\">\n				<select name=\"constituency\" id=\"constituency\">\n					<option value=\"\" disabled selected>Select a constituency</option>\n					"
    + alias2((helpers.buildOptions || (depth0 && depth0.buildOptions) || alias1).call(depth0,(depth0 != null ? depth0.constituencyOptions : depth0),{"name":"buildOptions","hash":{},"data":data}))
    + "\n				</select>\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<label class=\"col-sm-2 control-label\">Are you going to vote?&nbsp;</label>\n			<div class=\"col-sm-10\">\n				<input type=\"radio\" name=\"voting\" id=\"voting-yes\" value=\"1\" />&nbsp;<label for=\"voting-yes\">Yes</label>\n				&nbsp;<input type=\"radio\" name=\"voting\" id=\"voting-no\" value=\"0\" checked />&nbsp;<label for=\"voting-no\">No</label>\n			</div>\n		</div>\n		\n		<div class=\"form-group hidden question_2\">\n			<!-- Hidden unless first question is answered yes - use Backbone events -->\n			<label for=\"candidate\" class=\"col-sm-2 control-label\">Who are you going to vote for?&nbsp;</label>\n\n			<div class=\"col-sm-10\">			\n				<!-- Populated via AJAX with the candidates for the constituency specified above -->\n				<select name=\"candidate\" id=\"candidate\">\n					<option value=\"\" disabled selected>Select a candidate</option>\n					<!-- Prepend candidate options via AJAX if a constituency is selected -->\n					"
    + alias2((helpers.buildOptions || (depth0 && depth0.buildOptions) || alias1).call(depth0,(depth0 != null ? depth0.candidateOptions : depth0),{"name":"buildOptions","hash":{},"data":data}))
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
;var InterfaceHelpers = {
	setMenuItemActive: function(menuItem) {		
		$('.navbar-nav li').removeClass('active');
		$('.navbar-nav .' + menuItem).addClass('active');
	}
};;var Validate = {
	validateForm: function(form){
		var valid = true;
		var re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		var form = $(form);
		var inputs = form.find('.required');
		inputs.each(function(){
			var input = $(this);
			if(input.val() == ''){
				input.addClass('error');
				valid = false;
			} else {
				input.removeClass('error')
			}

			if(input.is('input[type=email]')){
				address = input.val();
				if(!re.test(address)){
					valid = false;
					input.addClass('error');		
				} else {
					input.removeClass('error');
				}
			}
		});
		
		return valid;
	}
};;var app = app || {};

(function($) {
	'use strict';
	
	var ResultModel = Backbone.Model.extend({
		defaults: {
			count: 0
		}
	});
	
	var ResultsCollection = Backbone.Collection.extend({
		model: ResultModel,
		
		url: '/api/results',
		
		initialize: function() {
			this.fetch();
		},
		
		byConstituency: function(constituency) {
			return _(this.filter(function(data) {
				return data.get("constituency") == constituency;
			}));
		}
	});
	
	app.resultsCollection = new ResultsCollection();
})(jQuery);;var app = app || {};

(function($) {
	'use strict';
	
	var VoteModel = Backbone.Model.extend({
		url: '/api/vote',
		
		defaults: {
			vote: false
		},
		
		constituencyOptions: [],
		
		candidateOptions: [],
		
		getConstituencyOptions: function(callback) {
			var _this = this;
			
			$.getJSON('/api/data/constituencies', function(data) {								
				_this.constituencyOptions = data;
				
				callback(data);
			});
		},
		
		getCandidateOptions: function(constituencyId, callback) {
			var _this = this;
			
			$.getJSON('/api/data/candidates/' + constituencyId, function(data) {
				_this.candidateOptions = data;
				
				callback(data);
			});
		}
	});
	
	app.voteModel = new VoteModel();
})(jQuery);
;var app = app || {};

(function($) {
	'use strict';
	
	app.IndexView = Backbone.View.extend({		
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
		template: JST.ResultsList,
		
		initialize: function() {			
			this.render();
		},
		
		render: function(filteredCollection) {
			this.collection = app.resultsCollection;
			
			if(typeof filteredCollection !== 'undefined') {
				this.collection = filteredCollection;
			}
						
			this.$el.html(this.template(this.collection));
			
			InterfaceHelpers.setMenuItemActive('results');
			
			this.delegateEvents({
				'change select#filter-constituency': 'filterByConstituency'
			});
			
			return this;
		},
		
		filterByConstituency: function() {
			var constituency = $('select#filter-constituency').text();
			console.log(this.collection.byConstituency(constituency));
		}
	});
})(jQuery);;var app = app || {};

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
				console.log('validation failed');
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
            
            this.model.save();
			
			// Update view with confirmation message
			console.log('submitVote');
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
		
		appElement: $('#app'),
		
		currentView: false,
		showView: function(view) {
			this.currentView = view;
			this.appElement.html(this.currentView.render().el);
		},

		indexView: function() {			
			app.indexView = new app.IndexView();
			this.showView(app.indexView);
		},
		
		resultsView: function() {
			app.resultsView = new app.ResultsView();
			this.showView(app.resultsView);
		},
		
		voteView: function() {
			app.voteView = new app.VoteView();	
			this.showView(app.voteView);
		}
	});
	
	app.router = new Router();
	
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