<?php
namespace Kineo\Component;

use Silex\Application;
use Symfony\Component\HttpFoundation\Response;

class ApiResponse extends Response
{
	public static function error($code, $customMessage = null)
	{		
		return self::responseFactory($code, 'error', $customMessage);
	}

	public static function success($code, $customMessage = null)
	{
		return self::responseFactory($code, 'success', $customMessage);
	}

	private static function responseFactory($code, $status, $customMessage = null)
	{
		$response = self::create();

		$content = self::generateResponseBody($code, $status, $customMessage);
		$response->setContent($content);

		self::setResponseStatusCode($response, $code);

		return $response;
	}

	private static function generateResponseBody($code, $status, $customMessage = null)
	{
		$message = (isset($customMessage)) ? $customMessage : self::fetchErrorMessage($code);

		return self::encodeResponse(array('code' => $code, 'status' => $status, 'message' => $message));
	}

	private static function fetchErrorMessage($code)
	{
		return constant("\Kineo\Component\ApiResponseMessageDefinition::$code");
	}

	private static function encodeResponse(array $response)
	{
		return json_encode($response);
	}

	private static function setResponseStatusCode($response, $code)
	{
		switch($code) {
			case 'SESSION_CHECK':
			case 'DEFAULT_RESPONSE_SUCCESS':
				// 200 - Success
				$response->setStatusCode(Response::HTTP_OK);
				break;

			case 'USER_EXISTS':
			case 'USER_SAVE_FAIL':
			case 'NO_CANDIDATES_FOUND':
			case 'NO_CONSTITUENCIES_FOUND';
				// 400 - Bad Request
				$response->setStatusCode(Response::HTTP_BAD_REQUEST);
				break;

			case 'SESSION_EXPIRED':
			case 'PASSWORD_INVALID':
			case 'USER_UNVERIFIED':
			case 'INVALID_VERIFICATION_CODE':
				// 403 - Unauthorized
				$response->setStatusCode(Response::HTTP_FORBIDDEN);
				break;

			default:
				// 200 - Success
				$response->setStatusCode(Response::HTTP_OK);
				break;
		}
	}
}

class ApiResponseMessageDefinition
{
	const DEFAULT_RESPONSE_SUCCESS = 'The API action was succesfully completed.';

	const SESSION_EXPIRED = 'Authenticated session required.';

	const PASSWORD_INVALID = 'The password provided is incorrect.';
	const USER_UNVERIFIED = 'This user account has not yet been verified.';
	const INVALID_VERIFICATION_CODE = 'The supplied verification code is invalid.';
	
	const NO_CONSTITUENCIES_FOUND = 'Sorry, we couldn\'t find any constituencies.';
	const NO_CANDIDATES_FOUND = 'Sorry, we couldn\'t find any candidates for this constituency.';
	const USER_SAVE_FAIL = 'Sorry, there was a problem saving your details to the system.';
	const USER_EXISTS = 'This email address has already been used to cast a vote.';
}