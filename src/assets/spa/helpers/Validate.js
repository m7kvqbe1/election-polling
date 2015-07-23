var Validate = {
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
};