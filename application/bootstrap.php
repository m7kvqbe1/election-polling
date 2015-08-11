<?php
// Require config loader
require_once __DIR__ . '/config-loader.php';

// Composer autoloader
require_once __DIR__ . '/../vendor/autoload.php';
	
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Silex\Provider\UrlGeneratorServiceProvider;
use Silex\Provider\SessionServiceProvider;
use Silex\Provider\ServiceControllerServiceProvider;
use Silex\Provider\MonologServiceProvider;
	
// Character encoding
mb_internal_encoding('UTF-8');
mb_detect_order(array('UTF-8', 'ASCII'));
mb_http_output('UTF-8');

// Default timezone
date_default_timezone_set('UTC');

// Instantiate Silex
$app = new Application();

// Set character encoding
$app['charset'] = 'UTF-8';

if(DEBUG) {
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	$app['debug'] = true;
}

// Register URL generator service provider
$app->register(new UrlGeneratorServiceProvider());

// Register controller service provider
$app->register(new ServiceControllerServiceProvider());

// Register Monolog service provider for local logging
$app->register(new MonologServiceProvider(), array(
    'monolog.logfile' => __DIR__.LOG_PATH,
	'monolog.name' => APP_NAME,
	'monolog.level' => LOG_LEVEL
));

// Error handler
$app->error(function(\Exception $e, $code) use ($app) {
	if($app['debug']) return;

	switch($code) {
		case 404:
			return $app->redirect('/');
			break;

		default:
			$message = 'Sorry, something went wrong.';
			break;
	}

	return new Response($message);
});

// Load routes
foreach(glob(__DIR__ . "/src/Kineo/Route/*.php") as $filename) {
    require_once $filename;
}
