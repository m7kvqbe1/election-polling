<?php
namespace Kineo\Model;

use Kineo\Component\Database;

class ConstituenciesModel extends BaseModel 
{
	protected $db;
	
	public $constituencies = array();
	
	public function __construct(Database $db)
	{
		$this->db = $db;
	}
	
	public function getAllConstituencies() 
	{
		$stmt = $this->db->query(
			"SELECT * FROM `tblConstituencies` ORDER BY `name` ASC"
		);
		
		$result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
		
		if(is_array($result) && !empty($result)) {
			$this->constituencies = $result;
			
			return $this->constituencies;
		} else {
			return false;
		}
	}
}