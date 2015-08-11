<?php
namespace Kineo\Test;
	
use Symfony\Component\HttpFoundation\Response;
use Kineo\Component\Database;

class DatabaseTest extends \PHPUnit_Framework_TestCase
{
	public function testConnectionSetup()
	{
		$database = new Database();
		
		$this->assertInstanceOf('\PDO', $database->connection);
	}
	
	public function testBindParamArray()
	{
		$bindArray = array('param' => 4);
		
		Database::bindParamArray('test', array(4,6,8), $bindArray);
		
		$expected = array(
			'param' => 4,
			'test0' => 4,
			'test1' => 6,
			'test2' => 8
		);
		
		$this->assertEquals($expected, $bindArray);
	}
}
