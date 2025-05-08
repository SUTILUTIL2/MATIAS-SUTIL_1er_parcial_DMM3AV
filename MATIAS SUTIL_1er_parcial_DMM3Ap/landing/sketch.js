p5.disableFriendlyErrors = true;
let y = 0;
let x = 0;
let speed = 0.05;
let azar;
let bannerX = 0;
let bannerY = 0;
let bannerHeight = 300;
let circles = [];
let ufos = [];
let bannerWidth = 1490;

function preload() {
  heart = loadImage(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IArs4c6QAAAEZJREFUGFd9jcsNACAIQ9tB2MeR3YdBMBBq8CIXPi2vBICIiOwkOedatllqWO6Y8yOWoyuNf1GZwgmf+RRG2YXr+xVFmA8HZ9Mx/KGPMtcAAAAASUVORK5CYII="
  );

  loadJSON(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
  );
  
}

function mousePressed() {

}

function doubleClicked() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    createStringDict({
      john: 1940,
      paul: 1942,
      george: 1943,
      ringo: 1940,
    }).saveJSON("Matias_Sutil_Tp1_diseño de pagina weeb_Json");
  }
  
}

function keyPressed() {
  if (key === "s") {
    saveGif("mySketch", 50, { delay: 50 });
  }
}

function setup() {
  createCanvas(1490, 400); // Tamaño del lienzo
  rectMode(CORNER);

  describe("p5.TypedDict");
  {
    let myDictionary = createStringDict("p5", "js");
    myDictionary.create("TP1-diseño pagina web p5js-", "matias sutil");
    myDictionary.print();

    let myValue = myDictionary.get("p5");
    print(myValue === "js");

    print(myDictionary.hasKey("p5"));
  }

  describe("Dictionary");
  {
    let anotherDictionary = createNumberDict({ 200: 84 });
    print(anotherDictionary.hasKey(200)); // logs true to console
  }

 

  // Crear círculos con posición y velocidad aleatoria dentro del banner
  for (let i = 0; i < 50; i++) {
    circles.push({
      x: random(bannerX, bannerX + bannerWidth),
      y: random(bannerY, bannerY + bannerHeight),
      r: 10,
      vx: random(-2, 2),
      vy: random(-2, 2),
    });
  }
  
  
  // Crear UFOs
for (let i = 0; i < 30; i++) {
  ufos.push({
    x: random(bannerX, bannerX + bannerWidth),
    y: random(bannerY, bannerY + bannerHeight),
    size: 32,
    vx: random(-2, 2),
    vy: random(-2, 2)
  });
}

  
}

function draw() {
  background(40); // Limpiar el lienzo
  
   describe("mouse")
  {
    push()
     stroke("red");
  strokeWeight(3);
  line(pmouseX + random(-20, 20), pmouseY + random(-20, 20), mouseX, mouseY);
    pop()
  }

  push();
  //Dibuja el marco del banner
  fill(0); // Relleno negro para el fondo
  stroke(255); // Color del borde (blanco)
  strokeWeight(5); // Establece el grosor del borde (aquí es 5, puedes ajustarlo a tu gusto)
  rect(bannerX, bannerY, bannerWidth, bannerHeight); // Dibuja el rectángulo del banner
  pop();

  // Contenido del banner
  push();
  drawBannerContents(); // Llamamos a la función que dibuja el contenido del banner
  pop();

  //describe("round y floor")
  {
    azar = random(1, 100);
    console.log("el valor" + azar);
    console.log("el valor de round" + round(azar));
    console.log("el valor de floor" + floor(azar));
    console.log("el valor de ceil" + ceil(azar));
  }
  
}

// Función para dibujar el contenido dentro del banner
function drawBannerContents() {
  textSize(32); // Tamaño de texto

 
  //ufo
  {
    drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
  // Dibujar y mover UFOs (emojis) dentro del rectángulo
textSize(32);              // Tamaño del emoji

for (let u of ufos) {
  u.x += u.vx;
  u.y += u.vy;

  // Rebote horizontal
  if (u.x - u.size / 2 < bannerX || u.x + u.size / 2 > bannerX + bannerWidth) {
    u.vx *= -1;
  }

  // Rebote vertical
  if (u.y - u.size / 2 < bannerY || u.y + u.size / 2 > bannerY + bannerHeight) {
    u.vy *= -1;
  }

  text("🛸", u.x, u.y); // Dibujar el emoji
}
pop()
}
  
  //describe("fondos")
  {
    fill(mouseY, mouseX, 200, 30);
    circle(random(width), random(bannerY, bannerHeight), random(10, 40));

    fill(mouseX, mouseY, 200, 30);
    circle(
      random(width),
      random(bannerY, bannerHeight),
      map(mouseX, 0, 1000, 300, 10)
    );
    circle(random(10, 20)); // Esto da error o se dibuja mal
  }

  //describe("circulos")
  {
    push();
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "black";

    // Dibujar el área del banner

    rect(bannerX, bannerY, bannerWidth, bannerHeight);

    // Dibujar y mover círculos dentro del rectángulo
    noStroke();
    fill(mouseY, 100, mouseX);
    for (let c of circles) {
      c.x += c.vx;
      c.y += c.vy;

      // Rebotar en los bordes del rectángulo
      if (c.x - c.r < bannerX || c.x + c.r > bannerX + bannerWidth) {
        c.vx *= -1;
      }
      if (c.y - c.r < bannerY || c.y + c.r > bannerY + bannerHeight) {
        c.vy *= -1;
      }

      circle(c.x, c.y, c.r * 2);
    }
    pop(); // Quitar el clip
  }
  
  //describe("nave triangular sigue al mouse dentro del rectángulo")
{
  let lado = 150;
  let altura = lado * sqrt(3) / 3;

  // Limitar posición del mouse dentro del rectángulo
  let naveX = constrain(mouseX, bannerX + lado / 2, bannerX + bannerWidth - lado / 2);
  let naveY = constrain(mouseY, bannerY + altura / 1.5, bannerY + bannerHeight - altura / 3);

  fill(mouseX % 255, mouseY % 255, 200);

  // Triángulo central
  triangle(
    naveX,
    naveY - 1 * altura / 3,
    naveX - lado / 3,
    naveY + altura / 2,
    naveX + lado / 90,
    naveY + altura / 5
  );

  // Triángulo derecho
 triangle(
    naveX,
    naveY - 1 * altura / 3,
    naveX - lado / 90,
    naveY + altura / 4.5,
    naveX + lado / 3,
    naveY + altura / 2
  );
  
   // Triángulo central
  triangle(
    naveX,
    naveY - 1 * altura / 6,
    naveX - lado / 6,
    naveY + altura / 1,
    naveX + lado / 90,
    naveY + altura / 5
  );

  // Triángulo derecho
 triangle(
    naveX,
    naveY - 1 * altura / 3,
    naveX - lado / 90,
    naveY + altura / 6,
    naveX + lado / 6,
    naveY + altura / 1
  );
}

  //describe(corazones)
  {
     noSmooth();
  image(heart, width-50, 50, 32, 32);
    image(heart, width-100, 50, 32,32);
    image(heart, width-150, 50, 32, 32);
  }

  describe("texto")
  {
    pop()
    textSize(30);
  textAlign(CENTER);
  textStyle(BOLD);
  text('VIDAS', width-90,40);
    
     textSize(30);
  textAlign(CENTER);
  textStyle(BOLD);
  text('Puntuacion', 100, 40);
    push()
  }

      pop()
       describe("millis")
  {
     // Get the number of seconds the sketch has run.
  let s = millis() / 1000;

  // Style the text.
  textSize(25);

  // Display how long the sketch has run.
  text(`Tiempo de vuelo: ${nf(s, 1, 1)} sec`,width/2,40);
  }
    push()
  
   describe("Array Functions")
  {
      let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  // Shuffle the array.
  shuffle(colors, true);

  // Draw  a row of circles using the original array.
  for (let i = 0; i < colors.length; i += 1) {
    // Calculate the x-coordinate.
    let x = (i + 2) * 30;

    // Style the circle.
    let c = colors[i];
    fill(c);

    // Draw the circle.
    circle(x, 260, 15);
  }
  }
  
     fill(mouseY, mouseX, 200);
  
  if (mouseIsPressed === true) {
    for (let i = 0; i < 1000000; i += 1) {
      random();
    }
  }
    
     let fps = frameRate();
  text(fps, width/2, height-50);
  
   //describe("sistema alto")
  {
    console.log(frameCount);

    frameRate(constrain(mouseX, 50, 100));

    cursor(CROSS);

    fill(mouseY, mouseX, 200);
    text(frameCount, 100, 70);

    // If the mouse is pressed, do lots
    // of math to slow down drawing.
    if (mouseIsPressed === true) {
      for (let i = 0; i < 1000000; i += 1) {
        random();
      }
    }
  }
  
}
