class Sprite {
    constructor(config) {

    //seta os padrões da imagem
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
        this.isLoaded = true;
    }

        //configura a animação e aplica o seu estado inicial
        this.animations = config.animations || {
            idleDown : [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //Referencia o GameObject
        this.GameObject = config.gameObject;
    }

    draw(ctx){
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32
            )
    }
}