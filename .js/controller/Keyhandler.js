import keycode from "keycode";
var Keyhandler = /** @class */ (function () {
    function Keyhandler() {
        document.body.addEventListener('keyup', function (e) {
            console.log(keycode(e)); // prints name of key
        });
    }
    return Keyhandler;
}());
//# sourceMappingURL=Keyhandler.js.map