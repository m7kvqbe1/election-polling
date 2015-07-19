var VoteView = Backbone.View.extend({
	template: JST.VoteForm,
	
	initialize: function() {
		console.log('foo');
	},
	
	render: function() {
		//this.$el.html(this.template);
		$('#app').html(this.template());
		
		this.delegateEvents({
			'click .navbar-brand': 'testEvent'
		});
		
		return this;
	},
	
	testEvent: function() {
		alert('Hello, World!');
	}
});