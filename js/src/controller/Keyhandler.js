"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keycode_1 = require("keycode");
var Keyhandler = /** @class */ (function () {
    function Keyhandler() {
        document.body.addEventListener('keyup', function (e) {
            console.log(keycode_1.default(e)); // prints name of key
        });
    }
    return Keyhandler;
}());
//# sourceMappingURL=Keyhandler.js.map