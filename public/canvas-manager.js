class CanvasManager{
    constructor(canvas){
        this.height=canvas.height;
        this.width=canvas.width;

        this.ctx=canvas.getContext("2d");
    }

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    setBackground(color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawPlayer(player, self=false){
        this.ctx.fillStyle=self ? "red" : player.color;

        this.ctx.beginPath();
        this.ctx.arc(player.position.x, player.position.y, player.width/2, 0, 2 * Math.PI, false);
        this.ctx.fill();
    }

    drawObject(obj){
        switch(obj.type){
            case "rectangle":
                this.drawRectangle(obj);
                break;

            default:
                console.log("Unknown object type");
        }
    }

    drawRectangle(rec){
        this.ctx.fillStyle = rec.color;
        this.ctx.fillRect(rec.position.x-rec.width, rec.position.y-rec.height, rec.width, rec.height);
    }
}

export default CanvasManager;