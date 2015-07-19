<?php
namespace Kineo\Component;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class System
{
	public static function generateAssets(Request $request, Application $app)
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
		
		return file_get_contents(DOCUMENT_ROOT.'/src/assets/app/index'.$env.'.html');
	}
}
