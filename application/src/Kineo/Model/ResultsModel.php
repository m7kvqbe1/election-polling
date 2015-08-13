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
		$stmt = $this->db->query(
			"SELECT a.name, a.party, a.constituency_id, c.name AS constituency, COUNT(*) AS count 
			FROM tblCandidates AS a
			INNER JOIN tblVotes AS b
			ON a.id = b.candidate_id
			LEFT JOIN tblConstituencies AS c
			ON a.constituency_id = c.id
			GROUP BY b.candidate_id
			ORDER BY count DESC, constituency ASC"
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