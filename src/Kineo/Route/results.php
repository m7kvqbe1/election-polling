<?php	
use Silex\Application;
use Kineo\Controller\ResultsController;

$app['results.controller'] = $app->share(function() use ($app) {
	return new ResultsController($app);
});

$app->get('/api/results', 'results.controller.fetchResultsAction');