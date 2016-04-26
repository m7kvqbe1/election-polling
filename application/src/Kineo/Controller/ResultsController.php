<?php
namespace Kineo\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Kineo\Component\Database;
use Kineo\Component\ApiResponse;
use Kineo\Model\ResultsModel;

class ResultsController 
{	
	public function fetchResultsAction()
	{		
		$resultsModel = new ResultsModel(new Database());
		
		if($resultsModel->getResults()) {
			return json_encode($resultsModel->results);
		} else {
			return json_encode(array());
		}
	}
}