<?php
namespace Kineo\Component;

class Database extends \PDO
{	
	public function __construct($emulatePrepares = false) 
	{
		parent::__construct('mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DATABASE . ';charset=utf8', MYSQL_USER, MYSQL_PASSWORD);
		
		$this->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		$this->setAttribute(\PDO::ATTR_EMULATE_PREPARES, $emulatePrepares);
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