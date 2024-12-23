import Shape from "./shape.js";
import { Bodies, categoryEnum} from "../global.js";

class Wall extends Shape{
    constructor(width, height, color, isGround=false, x=0, y=0){
        const body=Bodies.rectangle(x, y, width, height, { 
            isStatic: true,
            collisionFilter: {
                category: isGround ? categoryEnum.GROUND : categoryEnum.DEFAULT,
            },
            render: {
              fillStyle : color
            }
        });

        super(body, width, height, color);
        this.type="wall";
        this.isGround=isGround;
    }

    serialize(){
        let json=super.serialize();

        json.isGround=this.isGround;

        return json;
    }
}

export default Wall;
