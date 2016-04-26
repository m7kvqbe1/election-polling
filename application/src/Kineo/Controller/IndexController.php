<?php
namespace Kineo\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Kineo\Component\System;

class IndexController 
{	
	public function indexAction()
	{		
		return System::generateAssets();
	}
}