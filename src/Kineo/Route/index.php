<?php	
use Silex\Application;
use Kineo\Controller\IndexController;

$app['index.controller'] = $app->share(function() use ($app) {
	return new IndexController($app);
});

// Serve SPA assets to all routes that aren't prefixed with /api
$app->get('/{uri}', 'index.controller:indexAction')->assert('uri', '^((?!api).)*$');