function setup() {
  createCanvas(200, 200);
  noLoop();
}

function draw() {
  background(220);
  
  var c1 = color(155, 33, 64);
  var c2 = color(116, 72, 87);
  
	for(var x = 0; x < 5; x++){
    for(var y = 0; y < 5; y++){
        var r = random();
        if(r > 0.8){
            fill(c1);
        } else {
            fill(c2);
        }
        rect(10 + x*35, 10 + y*35, 30, 30);
    }    
	}
}
