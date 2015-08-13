<?php
namespace Kineo\Model;

use Kineo\Component\Database;

class UserModel extends BaseModel 
{
	protected $db;
	
	public $id;
	
	public $email;
	
	public $first_name;
	
	public $surname;
	
	public $voting;
	
	public $constituency_id;
	
	public function __construct(Database $db, $email = null)
	{
		$this->db = $db;
		
		if(isset($email)) {
			$this->loadUserByEmail($email);
		}
	}
	
	public function loadUserByEmail($email)
	{
		$stmt = $this->db->prepare(
			'SELECT * FROM `tblUsers` AS a 
			LEFT JOIN `tblConstituencies` AS b 
			ON a.constituency_id = b.id
			WHERE email = :email'
		);
		
		$stmt->bindValue(':email', $email, \PDO::PARAM_STR);
		
		$stmt->execute();
		
		$result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
		
		// Hydrate model
		if(isset($result[0])) {
			foreach($result[0] as $key => $val) {
				$this->{$key} = $val;
			}
			
			return true;
		} else {
			return false;
		}
	}
	
	public function saveUser($email, $firstName, $surname, $constituencyId, $voting = false, $candidateId = null)
	{		
		try {
			$this->db->beginTransaction();
			
			// Statement 1 - Save user
			$stmt = $this->db->prepare(
				'INSERT INTO `tblUsers` (email, first_name, surname, constituency_id, voting)
				VALUES (:email, :first_name, :surname, :constituency_id, :voting)'
			);
			
			$stmt->bindValue(':email', $email, \PDO::PARAM_STR);
			$stmt->bindValue(':first_name', $firstName, \PDO::PARAM_STR);
			$stmt->bindValue(':surname', $surname, \PDO::PARAM_STR);
			$stmt->bindValue(':constituency_id', $constituencyId, \PDO::PARAM_INT);
			$stmt->bindValue(':voting', $voting, \PDO::PARAM_BOOL);
			$stmt->execute();
			
			if(!$voting) {
				$this->db->commit();
				return;
			}
			
			$userId = $this->db->lastInsertId();
			
			// Statement 2 - Save voting intention
			$stmt2 = $this->db->prepare(
				'INSERT INTO `tblVotes` (user_id, candidate_id)
				VALUES (:user_id, :candidate_id)'
			);
			
			$stmt2->bindValue(':user_id', $userId, \PDO::PARAM_INT);
			$stmt2->bindValue(':candidate_id', $candidateId, \PDO::PARAM_INT);
			$stmt2->execute();
			
			$this->db->commit();
			
			return $userId;
		} catch(\PDOException $e) {
			$this->db->rollback();
			
			throw new \Exception('There was a problem saving this user: ' . $e->getMessage());
		}
	}
}