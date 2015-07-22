<?php
namespace Kineo\Model;
	
interface ModelInterface
{
	function hydrateObjects($collectionPropertyName, $modelType, $records);
}

class BaseModel implements ModelInterface
{
	public function hydrateObjects($collectionPropertyName, $modelType, $records)
	{
		if(empty($records)) {
			throw new \Exception('No records found');
		} else {
			foreach($records as $item) {
				// Must be fully qualified namespace
				$doc = new $modelType($this->app);
				
				foreach($item as $key => $val) {
					$doc->{$key} = $val;
				}
				
				$this->{$collectionPropertyName}[] = $doc;
			}
			
			return $this->{$collectionPropertyName};
		}
	}
}