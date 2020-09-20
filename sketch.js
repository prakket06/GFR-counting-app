var canvas, input, button, input2, button2, greeting, greeting2, greeting3, greeting4;

var backimage, back

var gfr;

function preload(){
  backimage = loadImage("kidback.jpg");
  
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  input = createInput("Height (in cm.)");
  input.position(displayWidth/2 - 50, displayHeight/2 - 30);

  input2 = createInput("Creatinine");
  input2.position(displayWidth/2 - 50, displayHeight/2 - 10);
  

  button = createButton("Calculate");
  button.position(displayWidth/2, displayHeight/2 + 80);
  button.mousePressed(calculate);

  button2 =  createButton("Reset");
  button2.position(displayWidth/2 + 10, displayHeight/2 + 100);
  button2.mousePressed(reset);
  
  back = createSprite(displayWidth/2, displayHeight/2);
  back.addImage("back", backimage); 
  
  
}


function draw(){
  drawSprites();
  
}

function calculate(){ 
  const hght = input.value();
  const creta = input2.value();
  gfr = (0.41 * hght)/creta;
  a = 1;
  greeting = createElement('h2','Your eGFR is '+ gfr);
  greeting.position(displayWidth/2 - 50, displayHeight/2 + 10);
  if(gfr == 60 || gfr > 60){
    greeting2 = createElement('h2','Your kidney is normal and fit');
    greeting2.position(displayWidth/2 - 50, displayHeight/2 + 25);
  }
  else if(gfr < 60 && gfr > 15){
    greeting2 = createElement('h2','You have a kidney desease please consult a doctor');
    greeting2.position(displayWidth/2 - 50, displayHeight/2 + 25);
  }
  else if(gfr < 15){
    greeting2 = createElement('h2','You have a kidney failure immediately cosult a doctor');
    greeting2.position(displayWidth/2 - 50, displayHeight/2 + 25);
  }
}
function reset(){
  greeting.hide();
  greeting2.hide();
  
}
  