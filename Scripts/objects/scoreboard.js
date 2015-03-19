var objects;
(function (objects) {
    // SCOREBOARD CLASS ++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard(game) {
            this.score = 0;
            this.lives = 5;
            this.active = true;
            this._livesLabel = new createjs.Text("Lives: ", "40px Garamond", "#D9801A");
            game.addChild(this._livesLabel);
            this._scoreLabel = new createjs.Text("Score: ", "40px Garamond", "#D9801A");
            this._scoreLabel.x = 400;
            game.addChild(this._scoreLabel);
            if (constants.IMPOSSIBLE) {
                this._impossibleLabel = new objects.GameObject("impossible");
                this._impossibleLabel.x = 250;
                this._impossibleLabel.y = 30;
                this._impossibleLabel.scaleX = 0.5;
                this._impossibleLabel.scaleY = 0.5;
                game.addChild(this._impossibleLabel);
            }
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map