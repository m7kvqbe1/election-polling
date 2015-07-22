<?php	
use Silex\Application;
use Kineo\Controller\DataController;

$app['data.controller'] = $app->share(function() use ($app) {
	return new DataController($app);
});

$app->get('/api/data/constituencies', 'data.controller:fetchConstituenciesAction');

$app->get('/api/data/candidates/{constituencyId}', 'data.controller:fetchCandidatesAction');