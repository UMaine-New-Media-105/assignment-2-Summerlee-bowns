 let line1X = 0 ;
 let line2Y = 80;
 let line2X = 160;
 let line3X = 240;
 let line4x = 320; 

function setup() {

 
  createCanvas(400, 400);
}

function draw() {
  background(220);
    //row 1 
  fill (100,100,150)
      rect(line1X,line1X,line2Y);
  fill (200,100,150)
      rect(line2Y,line1X,line2Y)
  fill (200,100,150)
      rect(line2X,line1X,line2Y)
  fill (200,100,150)
      rect(line3X,line1X,line2Y)
  fill (100,100,150)
      rect(line4x,line1X,line2Y)
      // row 2
      rect(line1X,line2Y,line2Y)
  fill (200,100,150)
      rect(line2Y,line2Y,line2Y)
  fill (100,100,150)
      rect(line2X,line2Y,line2Y)
      rect(line3X,line2Y,line2Y)
      rect(line4x,line2Y,line2Y)
      // row 3
      rect(line1X,line2X,line2Y)
  fill (200,100,150)
      rect(line2Y,line2X,line2Y)
      rect(line2X,line2X,line2Y)
      rect(line3X,line2X,line2Y)
  fill (100,100,150)
      rect(line4x,line2X,line2Y)
      // row 4
      rect(line1X,line3X,line2Y)
      rect(line2Y,line3X,line2Y)
      rect(line2X,line3X,line2Y)
  fill (200,100,150)
      rect(line3X,line3X,line2Y)
  fill (100,100,150)
      rect(line4x,line3X,line2Y)
      // row 5
      rect(line1X,line4x,line2Y)
  fill (200,100,150)
      rect(line2Y,line4x,line2Y)
      rect(line2X,line4x,line2Y)
  fill (200,100,150)
      rect(line3X,line4x,line2Y)
  fill (100,100,150)
      rect(line4x,line4x,line2Y)
  
}
