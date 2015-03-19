var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // PLANE CLASS
    var Hexagon = (function (_super) {
        __extends(Hexagon, _super);
        // CONSTRUCTOR
        function Hexagon() {
            _super.call(this, assetLoader.getResult("plane"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 50;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("gameAudio", { loop: -1 });
        }
        // PUBLIC METHODS
        Hexagon.prototype.update = function () {
            this.y = stage.mouseY;
            this.x = stage.mouseX;
            this.rotation += 20;
        };
        return Hexagon;
    })(createjs.Bitmap);
    objects.Hexagon = Hexagon;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map