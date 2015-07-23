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
    + "\n				</select>\n			</div>\n		</div>\n		\n		<div class=\"form-group\">\n			<div class=\"col-sm-2\">\n				\n			</div>\n			<div class=\"col-sm-10\">\n				<button type=\"submit\" class=\"btn btn-default\">Submit</button>\n				<p class=\"notice\"></p>\n			</div>\n		</div>\n	</form>\n</div>";
},"useData":true});

this["JST"]["Welcome"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\n	<li><a href=\"/#\">Kineo Technical Task</a></li>\n	<li><a href=\"#\">Home</a></li>\n	<li class=\"active\">Welcome</li>\n</ol>\n\n<div class=\"welcome\">\n	<h1>Welcome to the Kineo Technical Task!</h1>\n	<p>Scelerisque vestibulum adipiscing fusce metus bibendum neque parturient sodales sem phasellus sed parturient sociis a aenean accumsan molestie a sociis non aliquam egestas. A tincidunt a nullam risus orci varius nullam vitae scelerisque a quam suspendisse a euismod consectetur duis senectus a a parturient et scelerisque parturient parturient parturient convallis. Massa tortor suspendisse fringilla a senectus placerat a mus et vestibulum velit a phasellus consectetur hac est eu.</p>\n</div>";
},"useData":true});