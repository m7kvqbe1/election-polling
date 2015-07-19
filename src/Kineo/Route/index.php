<?php	
use Silex\Application;
use Kineo\Controller\IndexController;

$app['index.controller'] = $app->share(function() use ($app) {
	return new IndexController($app);
});

$app->get('/', 'index.controller:indexAction');