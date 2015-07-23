<?php	
use Silex\Application;
use Kineo\Controller\VoteController;

$app['vote.controller'] = $app->share(function() use ($app) {
	return new VoteController($app);
});

$app->post('/api/vote', 'vote.controller:castVoteAction');