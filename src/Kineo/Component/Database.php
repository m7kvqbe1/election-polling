<?php
namespace Kineo\Component;

class Database
{
	public $connection;
	
	public function __construct() 
	{
		$this->connection = new \PDO('mysql:host='.MYSQL_HOST.';dbname='.MYSQL_DATABASE.';charset=utf8', MYSQL_USER, MYSQL_PASSWORD);
		$this->connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		$this->connection->setAttribute(\PDO::ATTR_EMULATE_PREPARES, false);
	}
	
	public static function bindParamArray($prefix, $values, &$bindArray)
	{
		$str = '';
		foreach($values as $index => $value){
			$str .= ':' . $prefix . $index . ',';
			$bindArray[$prefix . $index] = $value; 
		}
		
		return rtrim($str, ',');
	}
}