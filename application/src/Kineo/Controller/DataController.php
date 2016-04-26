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
	public function fetchConstituenciesAction()
	{		
		$constituenciesModel = new ConstituenciesModel(new Database());
		
		if($constituenciesModel->getAllConstituencies()) {
			return json_encode($constituenciesModel->constituencies);
		} else {
			return ApiResponse::error('NO_CONSTITUENCIES_FOUND');	
		}
	}
	
	public function fetchCandidatesAction($constituencyId) 
	{
		$candidatesModel = new CandidatesModel(new Database());
		
		if($candidatesModel->getCandidatesByConstituencyId($constituencyId)) {
			return json_encode($candidatesModel->candidates);
		} else {
			return ApiResponse::error('NO_CANDIDATES_FOUND');	
		}
	}
}