var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // CONSTRUCTOR
        function Enemy() {
            _super.call(this, "cloud");
            this.sound = "thunder";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Enemy.prototype.update = function () {
            this.y += this._dy;
            this.x -= this._dx;
            this.rotation += this._dx;
            this.scaleX = this._scale;
            this.scaleY = this._scale;
            this._checkBounds();
        };
        // Reset position of island to the top
        Enemy.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480);
            ;
            this.x = 690;
            this._dy = Math.floor(Math.random() * 10) - 5;
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._scale = (Math.random() * 1.2) + 1;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Enemy.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map