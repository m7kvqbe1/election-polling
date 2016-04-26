<?php
namespace Kineo\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Kineo\Component\Database;
use Kineo\Component\ApiResponse;
use Kineo\Model\UserModel;

class VoteController
{	
	public function castVoteAction() 
	{
		$userData = json_decode(file_get_contents('php://input'));
		
		$userModel = new UserModel(new Database());
		
		if($userModel->loadUserByEmail($userData->email)) {
			return ApiResponse::error('USER_EXISTS');
		}
		
		try {	
			$userModel->saveUser($userData->email, $userData->first_name, $userData->surname, $userData->constituency, $userData->voting, $userData->candidate);
			
			return ApiResponse::success('DEFAULT_RESPONSE_SUCCESS');
		} catch(\Exception $e) {
			return ApiResponse::error('USER_SAVE_FAIL');
		}		
	}
}