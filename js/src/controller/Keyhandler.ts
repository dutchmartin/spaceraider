/// <reference path="../references.ts" />
import * as keycode from "keycode";
class Keyhandler {

	constructor() {
		document.body.addEventListener( 'keyup', function ( e ) {
			console.log(keycode(e)) // prints name of key
			//TODO implement observable
		});
		document.body.addEventListener( 'keydown', function ( e ) {
			console.log(keycode(e)) // prints name of key
		});
	}
}