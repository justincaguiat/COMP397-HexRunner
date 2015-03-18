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
        public mailPilotLabel: objects.Label;
        public easyButton: objects.Button;
        public hardButton: objects.Button;
        public easy: boolean = false;
        public hard: boolean = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //title Label
            this.mailPilotLabel = new objects.Label(320, 40, "Hex Runner!");
            this.mailPilotLabel.font = "60px Garamond";
            this.mailPilotLabel.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel);


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

            if (this.hard) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                constants.CLOUD_NUM = 15;
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }

            if (this.easy) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                constants.CLOUD_NUM = 7;
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }



            stage.update(); // Refreshes our stage

        } // Update Method

    } // Menu Class


} // States Module