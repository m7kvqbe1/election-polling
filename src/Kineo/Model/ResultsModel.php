<?php
namespace Kineo\Model;

use Kineo\Component\Database;

class ResultsModel extends BaseModel 
{
	protected $db;
	
	public $results = array();
	
	public function __construct(Database $db)
	{
		$this->db = $db;
	}
	
	public function getResults() 
	{
		$stmt = $this->db->connection->query(
			"SELECT a.name, a.party, COUNT(*) AS count FROM tblCandidates AS a
			LEFT JOIN tblVotes AS b
			ON a.id = b.candidate_id
			GROUP BY a.name
			ORDER BY count DESC"
		);
		
		$result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
		
		if(is_array($result) && !empty($result)) {
			$this->results = $result;
			
			return $this->results;
		} else {
			return false;
		}
	}
}