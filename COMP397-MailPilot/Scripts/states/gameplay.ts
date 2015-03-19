/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/points.ts" />
/// <reference path="../objects/ground.ts" />
/// <reference path="../objects/hexagon.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />

module states {

    export class GamePlay {
        // Game Objects 
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public hexagon: objects.Hexagon;
        public points: objects.Points
        public enemies: objects.Enemy[] = [];
        public ground: objects.Ground;

        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();


            //Ground object
            this.ground = new objects.Ground();
            this.game.addChild(this.ground);

            //Island object
            this.points = new objects.Points();
            this.game.addChild(this.points);


            //Hexagon object
            this.hexagon = new objects.Hexagon();
            this.game.addChild(this.hexagon);

            //Enemy object
            for (var cloud = constants.CLOUD_NUM; cloud >= 0; cloud--) {
                this.enemies[cloud] = new objects.Enemy();
                this.game.addChild(this.enemies[cloud]);
            }


            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor


        // DISTANCE CHECKING METHOD
        public  distance(p1: createjs.Point, p2: createjs.Point): number {
        return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } //Distance Method

        // CHECK COLLISION METHOD
        public checkCollision(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                var planePosition: createjs.Point = new createjs.Point(this.hexagon.x, this.hexagon.y);
            var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
            var theDistance = this.distance(planePosition, objectPosition);
            if (theDistance < ((this.hexagon.height * 0.5) + (collider.height * 0.5))) {
                if (collider.isColliding != true) {
                    if (!constants.HIT) {
                        if (collider.name == "cloud") {
                            createjs.Sound.play(collider.sound);
                            constants.HIT = true;
                            this.scoreboard.lives--;
                            //function for hit cooldown.
                            this.delayTimer(this.isHit);
                        }
                    }
                    if (collider.name == "island") {
                        createjs.Sound.play(collider.sound);
                        this.points.reset();
                        this.scoreboard.score += 100;
                    }
                }
                collider.isColliding = true;
            } else {
                collider.isColliding = false;
            }
        }
        } // checkCollision Method

        //sets constant to false, allowong player to be hit again
        public isHit() {
            return constants.HIT = false;
        }
        //timer to delay the function call
        public delayTimer(functiontoDelay) {
            return window.setTimeout(functiontoDelay, 2000);
        }
        
        public update() {

            this.ground.update();

            this.points.update();

            this.hexagon.update();

            for (var cloud = constants.CLOUD_NUM; cloud >= 0; cloud--) {
                this.enemies[cloud].update();
                this.checkCollision(this.enemies[cloud]);
            }

            this.checkCollision(this.points);


            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

    } // Update Method

    } // GamePlay Class


} // States Module