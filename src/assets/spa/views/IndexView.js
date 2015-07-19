var IndexView = Backbone.View.extend({
	template: JST.Welcome,
	
	initialize: function() {		
		console.log(this.$el);
	},
	
	render: function() {
		//this.$el.html(this.template());
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