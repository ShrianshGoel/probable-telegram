var input,i1;
var button1;
var iframe


function setup() {
  createCanvas(windowWidth, windowHeight);
  
    button1=createButton("")
  button1.size(width,height)
  button1.position(-width/2777,-height/2777)
  button1.class("k")
  
  input = createInput("")
  input.class("o")
  input.position(width/33.50,height*0.003)
      input.size(width/1.07,height/12)
  
  button=createButton("Launch")
  button.class("buttn")
   button.position(width/1.35,height/27.50)
  
  
 
}

function draw() {
  background(220);
  button.mousePressed(
  ()=>{
     iframe=createElement("iframe").attribute("src","https://"+input.value())
  iframe.class("o4")
    iframe.position(width/44.35,height/7.22)
    iframe.size(width/1.07,height/1.24)
    
  }
  )
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);

  button1.size(width,height)
  button1.position(-width/2777,-height/2777)


  input.position(width/33.50,height*0.003)
      input.size(width/1.07,height/12)

   button.position(width/1.35,height/27.50)
  
}