<?php
namespace Kineo\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Kineo\Component\Database;

class DataController
{
	protected $app;
	
	public function __construct(Application $app) 
	{
		$this->app = $app;
	}
	
	public function fetchConstituenciesAction(Request $request)
	{		
		$constituencies = new ConstituenciesModel(new Database());
		
		return 'fetchConstituenciesAction';
	}
	
	public function fetchCandidatesAction($constituencyId) 
	{
		return 'fetchCandidatesAction';		
	}
}