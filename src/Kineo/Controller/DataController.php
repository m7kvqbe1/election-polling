<?php
namespace Kineo\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Kineo\Component\Database;
use Kineo\Component\ApiResponse;
use Kineo\Model\ConstituenciesModel;
use Kineo\Model\CandidatesModel;

class DataController
{
	protected $app;
	
	public function __construct(Application $app) 
	{
		$this->app = $app;
	}
	
	public function fetchConstituenciesAction(Request $request)
	{		
		$constituenciesModel = new ConstituenciesModel(new Database());
		
		try {
			$constituenciesModel->getAllConstituencies();
			
			return json_encode($constituenciesModel->constituencies);
		} catch(\Exception $e) {
			return ApiResponse::error('NO_CONSTITUENCIES_FOUND');
		}
	}
	
	public function fetchCandidatesAction($constituencyId) 
	{
		$candidatesModel = new CandidatesModel(new Database());
		
		try {
			$candidatesModel->getCandidatesByConstituencyId($constituencyId);
			
			return json_encode($candidatesModel->candidates);
		} catch(\Exception $e) {
			return ApiResponse::error('NO_CANDIDATES_FOUND');
		}
	}
}