module objects {
    // CLOUD CLASS
    export class Cloud extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("cloud");
            this.sound = "thunder";
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y += this._dy;
            this.x -= this._dx;
            this.rotation += this._dx;
            this.scaleX = this._scale;
            this.scaleY = this._scale;
            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.y = Math.floor(Math.random() * 480);;
            this.x = 690;
            this._dy = Math.floor(Math.random() * 10) - 5;
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._scale = Math.floor(Math.random() * 1.5) +1;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x<0) {
                this.reset();
            }
        }

    }

}  