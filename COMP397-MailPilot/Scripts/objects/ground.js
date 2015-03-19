var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var Ground = (function (_super) {
        __extends(Ground, _super);
        // CONSTRUCTOR
        function Ground() {
            _super.call(this, assetLoader.getResult("ocean"));
            // PUBLIC INSTANCE VARIABLES
            this._dy = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Ground.prototype.update = function () {
            this.x -= this._dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        Ground.prototype.reset = function () {
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Ground.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x === -640) {
                this.reset();
            }
        };
        return Ground;
    })(createjs.Bitmap);
    objects.Ground = Ground;
})(objects || (objects = {}));
//# sourceMappingURL=ground.js.map