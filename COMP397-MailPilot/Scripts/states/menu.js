/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE CLASS
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            this.easy = false;
            this.hard = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //play bg music
            createjs.Sound.play("menuAudio", { loop: -1 });
            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            //title Label
            this.titleLabel = new objects.Label(320, 40, "Hex Runner!");
            this.titleLabel.font = "60px Garamond";
            this.titleLabel.regX = this.titleLabel.getMeasuredWidth() * 0.5;
            this.titleLabel.regY = this.titleLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.titleLabel);
            //instruction label
            this.instLabel = new objects.Label(320, 90, "Use your mouse to survive! Collect points to win!!");
            this.instLabel.font = "30px Garamond";
            this.instLabel.regX = this.instLabel.getMeasuredWidth() * 0.5;
            this.instLabel.regY = this.instLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.instLabel);
            //choose label
            this.chooseLabel = new objects.Label(320, 210, "Choose your difficulty!");
            this.chooseLabel.font = "50px Garamond";
            this.chooseLabel.regX = this.chooseLabel.getMeasuredWidth() * 0.5;
            this.chooseLabel.regY = this.chooseLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.chooseLabel);
            //hard Button
            this.hardButton = new objects.Button(320, 280, "hardButton");
            this.hardButton.on("click", this.hardClicked, this);
            // easy button 
            this.easyButton = new objects.Button(320, 330, "easyButton");
            this.easyButton.on("click", this.easyClicked, this);
            this.game.addChild(this.easyButton);
            this.game.addChild(this.hardButton);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        Menu.prototype.easyClicked = function () {
            this.easy = true;
        };
        Menu.prototype.hardClicked = function () {
            this.hard = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.update = function () {
            this.ocean.update();
            //sets difficulty to hard and stops menu music 
            if (this.hard) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                constants.CLOUD_NUM = 15;
                createjs.Sound.stop();
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            //sets difficulty to easy and stops menu music
            if (this.easy) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                constants.CLOUD_NUM = 7;
                createjs.Sound.stop();
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Menu;
    })();
    states.Menu = Menu; // Menu Class
})(states || (states = {})); // States Module
//# sourceMappingURL=menu.js.map