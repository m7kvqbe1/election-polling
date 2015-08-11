<?php
namespace Kineo\Component;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class System
{
	public static function generateAssets()
	{
		switch(APP_ENV) {
			case 'DEVELOPMENT':
				$env = '.dev';
				break;

			case 'PRODUCTION':
				$env = '';
				break;

			default:
				$env = '';
				break;
		}
		
		return file_get_contents(__DIR__ . '/../../assets/spa/index'.$env.'.html');
	}
}
