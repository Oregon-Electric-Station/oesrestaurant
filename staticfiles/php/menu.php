<?php

		/*
		 * Copyright 2011 SinglePlatform
		 *
		 * Takes the following commandline parameters (order important):
		 * - debug
		 * - signing key
		 * - client id
		 * - locationId
		 *
		 */


		// if( $argv[1] == "-h" || $argv[1] == "--help" || $argc < 5) {
		//     print("Usage: SP_GetMenus.php DEBUG SIGNING_KEY CLIENT_ID LOCATION_ID

		//     DEBUG        Print debug information? Default: false, Valid values: true, false.
		//     SIGNING_KEY  Your signing key. Used to sign the api URLs.
		//     CLIENT_ID    Your client ID. Appended to the URLs.
		//     LOCATION_ID  id of the location to retrieve

		// Note: All parameters are required.
		// ");

		//     return;
		// }

		require_once( "lib/SP/SP_ApiLibrary.php" );

		$debug = true;
		// if ('true' === $argv[1]) {
		//     $debug = true;
		// }
		$signingKey = "PkkJXNRpO2l0r5u6u0PlCNme1KA8akGejMIjHI5Gkj8";
		$clientId = "c3sbrpbtkbs5gverurfkxpemc";
		$locId = "oregon-electric-station";
		$host = "api.singleplatform.co";
		$protocol = "http";

		$sp_api = new SP_ApiLibrary( $signingKey, $clientId, $host, $protocol, $debug ); 
		print($sp_api);
		$value = $sp_api->getMenus( $locId );
		print( json_encode( $value, true ) . PHP_EOL );

	?>