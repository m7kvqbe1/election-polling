<?php
namespace Kineo\Model;

use Kineo\Component\Database;

class CandidatesModel extends BaseModel 
{
	protected $db;
	
	public $candidates = array();
	
	public function __construct(Database $db)
	{
		$this->db = $db;
	}
	
	public function getCandidatesByConstituencyId($constituencyId) 
	{
		$stmt = $this->db->prepare(
			"SELECT a.id, a.name, a.party FROM `tblCandidates` AS a 
			LEFT JOIN `tblConstituencies` AS b 
			ON a.constituency_id = b.id 
			WHERE b.id = :id
			ORDER BY a.name ASC"
		);
		
		$stmt->bindValue(':id', $constituencyId, \PDO::PARAM_INT);
		
		$stmt->execute();
		
		$result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
		
		if(is_array($result) && !empty($result)) {
			$this->candidates = $result;
			
			return $this->candidates;
		} else {
			return false;
		}
	}
}