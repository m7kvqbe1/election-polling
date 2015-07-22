var InterfaceHelpers = {
	setMenuItemActive: function(menuItem) {		
		$('.navbar-nav li').removeClass('active');
		$('.navbar-nav .' + menuItem).addClass('active');
	}
};