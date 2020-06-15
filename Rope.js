class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY;
        var otions = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
        rope1 = new this.rope(bobObject1.body,roofObject.body, -bobDiameter*2,0)
    }
}