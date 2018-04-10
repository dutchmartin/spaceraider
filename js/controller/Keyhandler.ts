import keycode from "keycode";
class Keyhandler {
	constructor() {
		document.body.addEventListener('keyup', function (e) {
			console.log(keycode(e)) // prints name of key
		});
	}
}