
module objects {
    // PLANE CLASS
    export class Hexagon extends createjs.Bitmap {
        public width: number;
        public height: number;
        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("plane"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = 50;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("gameAudio", {loop: -1});
        }

        // PUBLIC METHODS
        public update() {
            this.y = stage.mouseY;
            this.x = stage.mouseX;
          

        }

    }

} 