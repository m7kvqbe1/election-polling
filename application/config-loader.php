<?php
// Import application config	
switch(getenv('env')) {
	case 'test':
		$configFile = 'config-test.ini';
		break;
	
	case 'development':
	case 'production':
		$configFile = 'config.ini';
		break;
	
	default:
		$configFile = 'config.ini';
}

$iniArray = parse_ini_file(__DIR__ . DIRECTORY_SEPARATOR . $configFile);

foreach($iniArray as $key => $val) {
	define($key, $val);
}