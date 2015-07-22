<?php
namespace Kineo\Model;

class ConstituenciesModel extends BaseModel 
{
	protected $db;
	
	public $constituencies = array();
	
	public function __construct(Database $db)
	{
		$this->app = $app;
		$this->db = $db;
	}
	
	public function getAllConstituencies() 
	{
		$this->db->connection->query("SELECT * FROM `tblConstituencies`");
		
		$result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
		
		if(!empty($result) && is_array()) {
			$this->constituencies = $result;	
		} else {
			throw new \Exception('No constituencies found');
		}
	}
}