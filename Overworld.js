class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
       const image = new Image();
       image.onload = () => {
        this.ctx.drawImage(image,0,0)
       };
       image.src = "/images/maps/DemoLower.png";

       //os objetos do jogo manin
       const hero = new gameObject({
        x : 5,
        y : 16,
       })
       const npc1 = new gameObject({
        x : 7,
        y : 9,
        src : "/images/character/people/npc1.png"
       })
       setTimeout(() => {
       hero.sprite.draw(this.ctx);
       npc1.sprite.draw(this.ctx);
       }, 200)
    }
}