<?php
namespace Kineo\Test;
	
use Symfony\Component\HttpFoundation\Response;
use Kineo\Component\ApiResponse;

class ApiResponseTest extends \PHPUnit_Framework_TestCase
{
	public function testErrorResponse()
	{
		$response = ApiResponse::error('NO_CANDIDATES_FOUND');
		
		$this->assertInstanceOf('Symfony\Component\HttpFoundation\Response', $response);
	}
	
	public function testSuccessResponse()
	{
		$response = ApiResponse::success('DEFAULT_RESPONSE_SUCCESS');
		
		$this->assertInstanceOf('Symfony\Component\HttpFoundation\Response', $response);
	}
}
