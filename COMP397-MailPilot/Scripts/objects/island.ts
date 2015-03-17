module objects {
    // ISLAND CLASS
    export class Island extends objects.GameObject{

        // CONSTRUCTOR
        constructor() {
            super("island");
            this.sound = "yay";
            this._dy = 5;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x += this._dy;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.x = -this.width;
            this.y = Math.floor(Math.random() * 440);
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x >= (640 + this.width)) {
                this.reset();
            }
        }

    }

} 