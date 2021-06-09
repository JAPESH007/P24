class Ball{
        constructor (x,y,r)
            { var options={
                   restitution:0.3,
                     friction:4,
                    density:1

}
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r-20,options)
Worls.add(world,this.body)
}
display()
{
var ballpos=this.body.position
push()
strokeweight(5)
stroke("red")
fill("orange")
ellipse(0,0,this.r,this.r);
pop()
translate(ballpos.x,ballpos.y)
rectmode(CENTER)



}

}