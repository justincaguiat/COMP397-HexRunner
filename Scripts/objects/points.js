var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Points = (function (_super) {
        __extends(Points, _super);
        // CONSTRUCTOR
        function Points() {
            _super.call(this, "island");
            this.sound = "yay";
            this._dy = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Points.prototype.update = function () {
            this.x -= this._dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        Points.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480);
            ;
            this.x = 690;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Points.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        return Points;
    })(objects.GameObject);
    objects.Points = Points;
})(objects || (objects = {}));
//# sourceMappingURL=points.js.map