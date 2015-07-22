<?php
namespace Kineo\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Kineo\Component\Database;
use Kineo\Component\ApiResponse;
use Kineo\Model\ConstituenciesModel;

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
		
		try {
			$constituencies->getAllConstituencies();
			
			return json_encode($constituencies);
		} catch(\Exception $e) {
			return ApiResponse::error('NO_CONSTITUENCIES_FOUND');
		}
	}
	
	public function fetchCandidatesAction($constituencyId) 
	{
		return 'fetchCandidatesAction';		
	}
}