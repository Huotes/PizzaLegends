class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop(){
        const step = () => {

            //limpa possíveis anomalias caso os objetos saiam das salas
            this.ctx.ClearRect(0,0,this.canvas.width,this.canvas.height);

            //desenha o layer inferior
            this.map.drawLowerImage(this.ctx);
 
            //desenha os objetos do jogo
            Object.values(this.map.gameObjects).forEach(object => {
               object.update({
                arrow : this.directionInput.direction
               })
               
                object.sprite.draw(this.ctx);
            })

            //desenha o layer superior
            this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(() => {
                step();  
            })
        }
        step();
    }
    
    init() {
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.directionInput.direction // "down"

        this.startGameLoop();


    }
}