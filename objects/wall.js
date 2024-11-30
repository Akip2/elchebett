const Shape = require("./shape.js");
const { Bodies, categoryEnum} = require("../global.js");

class Wall extends Shape{
    constructor(width, height, color, ground=false, x=0, y=0){
        const body=Bodies.rectangle(x, y, width, height, { 
            isStatic: true,
            collisionFilter: {
                category: ground ? categoryEnum.GROUND : categoryEnum.DEFAULT,
            },
            render: {
              fillStyle : color
            }
        });

        super(body, width, height, color);
        this.type="rectangle";
    }
}

module.exports=Wall;