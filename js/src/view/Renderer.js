var Renderer = /** @class */ (function () {
    function Renderer() {
        var Canvas = document.getElementById("gamecanvas");
        if (Canvas != null) {
            var Graphics = Canvas.getContext("2d");
        }
        else {
            console.log("ERROR: COULD NOT GET CANVAS CONTEXT");
        }
    }
    return Renderer;
}());
;
//# sourceMappingURL=Renderer.js.map