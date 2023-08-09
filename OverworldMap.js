class OverworldMap {
    constructor(config){
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage,0,0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage,0,0)
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "/images/maps/DemoLower.png",
        upperSrc: "/images/maps/DemoUpper.png",
        gameObjects : {
            hero : new Person({
                isPayerControlled : true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
            }),
            npc1: new Person ({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: "/images/characters/people/npc1.png"
            })
        }
    },
    Kitchen: {
        lowerSrc: "/images/maps/KitchenLower.png",
        upperSrc: "/images/maps/KitchenUpper.png",
        gameObjects : {
            hero : gameObject({
                x: 3,
                y: 5,
            }),
            npcA: new gameObject ({
                x: 9,
                y: 6,
                src: "/images/characters/people/npc2.png"
            }),
            npcB: new gameObject ({
                x: 10,
                y: 8,
                src: "/images/characters/people/npc3.png"
            })
        }
    },
    Street: {

    }
}