var ResultsView = Backbone.View.extend({
	template: JST.ResultsList,
	
	initialize: function() {
		console.log('foo');
	},
	
	render: function() {
		//this.$el.html(this.template);
		$('#app').html(this.template());
		
		this.delegateEvents({
			'click document': 'testEvent'
		});
		
		return this;
	},
	
	testEvent: function() {
		alert('Hello, World!');
	}
});