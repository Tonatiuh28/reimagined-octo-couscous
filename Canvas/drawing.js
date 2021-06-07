var ask = document.getElementById("lines_ask");
var boton = document.getElementById("check_button");

boton.addEventListener("click", dibujalinea );




var d = document.getElementById("Drawing1");
var lienzo = d.getContext("2d");
var width = d.width;

var e = document.getElementById("Drawing2");
var lienzo_two = e.getContext("2d");





function drawinglines(color, beginx,beginy,closex,closey)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(beginx, beginy);
  lienzo.lineTo(closex, closey);
  lienzo.stroke();
  lienzo.closePath();
}

function logo (col, bx, by, clx, cly)
{
  lienzo_two.beginPath();
  lienzo_two.strokeStyle = col;
  lienzo_two.moveTo(bx, by);
  lienzo_two.lineTo(clx, cly);
  lienzo_two.stroke();
  lienzo_two.closePath();
}
logo("white", 70, 50, 50, 55);
logo("white", 70, 20, 70, 50);
logo("white", 60, 10, 70, 20);
logo("white", 60, 20, 60, 10);
logo("white", 55, 20, 60, 20);
logo("white", 55, 10, 55, 20);
logo("white", 45, 10, 55, 10);
logo("white", 45, 20, 45, 10);
logo("white", 40, 20, 45, 20);
logo("white", 40, 10, 40, 20);
logo("white", 30, 20, 40, 10);
logo("white", 30, 20, 30, 50);
logo("white", 30, 50, 50, 80);
logo("white", 50, 80, 63, 60);

logo("white", 30, 50, 60, 45);
logo("white", 60, 45, 60, 35);
logo("white", 60, 35, 58, 33);
logo("white", 58, 33, 56, 33);
logo("white", 56, 33, 51.5, 33);
logo("white", 51.5, 33, 48, 36);
logo("white", 48, 36, 48, 45);

console.log("ask");

function dibujalinea()
{

var linesO = parseInt(ask.value);
var linesX = 0;
var yi, xf;
var space_between_lines = width / linesO
  while (linesX < linesO )
  {
    yi= space_between_lines * linesX;
    xf= space_between_lines * (linesX+1);
    drawinglines("yellow",0,yi,xf,300 );
    console.log("lines"+ linesX);
    linesX = linesX + 1;
  }

drawinglines("Black",1,1,1,300 );
drawinglines("Black",1,299,299,299 );

}
