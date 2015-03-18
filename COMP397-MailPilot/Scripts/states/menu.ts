/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

/// <reference path="../objects/scoreboard.ts" />

module states {
    // MENU STATE CLASS
    export class Menu {
        // Game Objects 
        public game: createjs.Container;
        public ocean: objects.Ocean;
        public titleLabel: objects.Label;
        public instLabel: objects.Label;
        public chooseLabel: objects.Label;
        public easyButton: objects.Button;
        public hardButton: objects.Button;
        public easy: boolean = false;
        public hard: boolean = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            
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

        public easyClicked() {
            this.easy = true;
        }
        public hardClicked() {
            this.hard = true;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {

            
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

        } // Update Method

    } // Menu Class


} // States Module