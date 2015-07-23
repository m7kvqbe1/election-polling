<?php
namespace Kineo\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Kineo\Component\System;

class IndexController 
{
	protected $app;
	
	public function __construct(Application $app) 
	{
		$this->app = $app;
	}
	
	public function indexAction()
	{		
		return System::generateAssets();
	}
}