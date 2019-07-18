firstx = 100,firsty = 100;
lastx = 200 , lasty = 200;
//var shapex = 100;
//var shapey = 100;
var cvs 
var mouse_down = 0;
var imgData;
var feat = 1;
var status = 1;
var colorful = 0 ;
var hue = 0;

var previous_and_next_count = 0;
var previous_and_next = new Array();
var op = {};

var p = document.getElementById("pensize");
p.addEventListener("input", function() {
  ctx.lineWidth = p.value;
}, false);

function showpensize()
{
  var pensizetext = document.getElementById("pensizetext");
  var pensize = document.getElementById("pensize"); 
  if(pensizetext.style.display == "none")
  {
    pensizetext.style.display = "block";
    pensize.style.display = "block";
  }
  else
  {
    pensizetext.style.display = "none";
    pensize.style.display = "none";
  }
}

function feat_L() {
  feat = 1;
}

function feat_C() {
  feat = 2;
}

function feat_S() {
  feat = 3;
}


function feat_N() {
  status = 1;
  var setpieacebar = document.getElementById("setpieace");
  setpieacebar.style.display = "none";
  var setpieacebartext = document.getElementById("setpieacetext");
  setpieacebartext.style.display = "none";
}

function feat_F() {
  status = 2;
  var setpieacebar = document.getElementById("setpieace");
  setpieacebar.style.display = "block";
  var setpieacebartext = document.getElementById("setpieacetext");
  setpieacebartext.style.display = "block";
}

function feat_R() {
  if(colorful == 1)
    colorful = 0;
  else if(colorful == 0)
    colorful = 1;
}
/*var pieace;

function setpieace()
{
  alert("hahahaha");
  pieace = document.getElementById("pieace").value;

}*/

var pieace;

function setpieace()
{
  //alert("hahahaha");
  pieace = document.getElementById("setpieace").value;
  var setpieacetext = document.getElementById("setpieacetext");
  setpieacetext.innerHTML = "Piece is = " + pieace;

}

function drawFn(op) {
  //pieace = 6;
  //var pieace = document.getElementById("pieace");
   var deg = Math.floor(360 / pieace);
   for (var i = 0, l = 360; i < l; i += deg) {
   drawRotate(i / 180 * Math.PI, function(ctx) {
   draw(op);
   });
   }
 }

function draw(option, _ctx) {
  _ctx = _ctx || ctx;
  if(feat == 1)
  {
    _ctx.beginPath();
    _ctx.moveTo(option.bx - _ctx.canvas.width / 2, option.by - _ctx.canvas.height / 2);
    _ctx.lineTo(option.ex - _ctx.canvas.width / 2, option.ey - _ctx.canvas.height / 2);
    if(colorful == 1)
      {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 300) hue = 0;
      }
    _ctx.stroke();
  }
  

  if(feat == 2)
  {
   _ctx.beginPath();
   _ctx.arc(option.ex - _ctx.canvas.width / 2, option.ey - _ctx.canvas.height / 2,50,0,2*Math.PI);
   if(colorful == 1)
      {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 300) hue = 0;
      }
  _ctx.stroke();
  }
  

   if(feat == 3)
   {
     _ctx.beginPath();
     _ctx.rect(option.ex - _ctx.canvas.width / 2, option.ey - _ctx.canvas.height / 2,50,50);
     if(colorful == 1)
      {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 300) hue = 0;
      }
     _ctx.stroke();
   }
   if(feat == 4)
   {

    _ctx.beginPath();
    _ctx.moveTo(option.bx - _ctx.canvas.width / 2, option.by - _ctx.canvas.height / 2);
    _ctx.lineTo(option.ex - _ctx.canvas.width / 2, option.ey - _ctx.canvas.height / 2);
    _ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue++;
    if(hue >= 360) hue = 0;
    _ctx.stroke();
    //ctx.beginPath();
   }
  
}

function drawRotate(deg, fn, _ctx) {
  _ctx = _ctx || ctx;
  _ctx.save();
  _ctx.translate(_ctx.canvas.width / 2, _ctx.canvas.height / 2);
  _ctx.rotate(deg);
  fn && fn(_ctx);
  _ctx.restore();
}

function reset()
{


  //ctx.beginPath();
  ctx.clearRect(0,0,cvs.width,cvs.height);  
  //ctx.stroke();
  previous_and_next_count = 0;
  previous_and_next.splice(0,previous_and_next.length);
  var imgtemp = ctx.getImageData(0, 0, cvs.width, cvs.height);
  previous_and_next.push(imgtemp);
  
  ctx.beginPath();
  ctx.fillStyle = "#FFFFFF";
  ctx.rect(0,0,cvs.width,cvs.height);
  ctx.fill();

}

function setting()
{
  var canvas1 = document.getElementById("cvs");
  var ctx1 = canvas1.getContext("2d");
  cvs = canvas1;
  ctx = ctx1;

  var imgtemp = ctx.getImageData(0, 0, canvas1.width, canvas1.height);
  previous_and_next.push(imgtemp);
  //alert("test");
  //previous_and_next_count++;
  ctx.beginPath();
  ctx.fillStyle = "#FFFFFF";
  ctx.rect(0,0,canvas1.width, canvas1.height);
  ctx.fill();
}



function getMousePos(cvs, event) {
  var rect = cvs.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
  
function mouseMove(event) {
  var mousePos = getMousePos(cvs, event);
  if(mouse_down == 1 && status ==1)
  {
    if(feat == 1)
    {
      ctx.lineTo(mousePos.x, mousePos.y);
      if(colorful == 1)
      {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 300) hue = 0;
      }
      ctx.stroke();

      if(colorful == 1)
      {
        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
      }
      var normal = document.getElementById("normal");
      normal.play();
    }


    else if(feat == 2)
    {
      ctx.arc(mousePos.x,mousePos.y,50,0,2*Math.PI);
      var bubble = document.getElementById("bubble");
      bubble.play();
      if(colorful == 1)
      {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 300) hue = 0;
      }
      ctx.stroke();
      ctx.beginPath();
    }

    else if(feat == 3)
    {
      ctx.rect(mousePos.x,mousePos.y,50,50);
      var rect = document.getElementById("rect");
      rect.play();
      if(colorful == 1)
      {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 300) hue = 0;
      }
      ctx.stroke();
      ctx.beginPath();
    }
 
  }

  if(mouse_down == 1 && status ==2)
  {
    if(feat == 1)
    {
      op.bx = op.ex;
      op.by = op.ey;
      op.ex = mousePos.x;
      op.ey = mousePos.y;
      drawFn(op);
      var normal = document.getElementById("normal");
      normal.play();
    }

    else if(feat == 2)
    {
      // ctx.arc(mousePos.x,mousePos.y,50,0,2*Math.PI);
      op.bx = op.ex;
      op.by = op.ey;
      op.ex = mousePos.x;
      op.ey = mousePos.y;
      drawFn(op);
      var bubble = document.getElementById("bubble");
      bubble.play();
    }
    else if(feat == 3)
    {
      // ctx.rect(mousePos.x,mousePos.y,50,50);
      op.bx = op.ex;
      op.by = op.ey;
      op.ex = mousePos.x;
      op.ey = mousePos.y;
      drawFn(op);
      var rect = document.getElementById("rect");
      rect.play();
    }
    else if(feat == 4)
    {
      op.bx = op.ex;
      op.by = op.ey;
      op.ex = mousePos.x;
      op.ey = mousePos.y;
      drawFn(op);

    }
  }
}

      
function down(event)
{
  mouse_down = 1;
  var mousePos = getMousePos(cvs, event);
  op.ex = op.bx = mousePos.x;
  op.ey = op.by = mousePos.y;
  if(feat == 1)
    ctx.moveTo(mousePos.x,mousePos.y);  
  else if( feat == 2)
  {
    ctx.beginPath();
    ctx.arc(mousePos.x,mousePos.y,50,0,2*Math.PI);
    ctx.stroke();
  }
  else if( feat == 3)
  {
    ctx.beginPath();
    ctx.rect(mousePos.x,mousePos.y,50,50);
    ctx.stroke();
  }
  else if(feat == 4)
  {
    ctx.beginPath();
    ctx.stroke();
  }
}

function up(event)
{
  ctx.beginPath();
  mouse_down = 0;
  
  imgData = ctx.getImageData(0, 0, cvs.width, cvs.height);
  previous_and_next.push(imgData);
  previous_and_next_count++;
  //alert(previous_and_next.length);
}

function previous()
{
  
  if(previous_and_next_count <= 0)
  {
    alert("沒有上一步了！")
  }
  else
  {
    previous_and_next_count--;
    ctx.putImageData(previous_and_next[previous_and_next_count], 0, 0)
  }
  
}
function next()
{
  if(previous_and_next_count > previous_and_next.length-2)
  {
    alert("沒有下一步了！")
  }
  else
  {
    previous_and_next_count++;
    ctx.putImageData(previous_and_next[previous_and_next_count], 0, 0)
  }
  
}

canvas.addEventListener('keydown', doKeyDown, true);

function setpensize_one()
{
  ctx.beginPath();
  ctx.lineWidth = 1; 
  ctx.stroke(); 
}
function setpensize_two()
{
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.stroke();
}
function setpensize_three()
{
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.stroke();
}
function setpensize_five()
{
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.stroke();
}

function setpensize_ten()
{
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.stroke();
}

function setpensize_fifteen()
{
  ctx.beginPath();
  ctx.lineWidth = 15;
  ctx.stroke();
}

function setpensize_twenty()
{
  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.stroke();
}

function red(event)
{ 
  ctx.beginPath();
  ctx.strokeStyle = "#FF0000";
  ctx.fillStyle = "#FF0000";
  ctx.stroke();
  // canvas.freeDrawingBrush.color
}

function blue(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #0000FF";
  ctx.fillStyle = " #0000FF";
  ctx.stroke();
}

function green(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #008000";
  ctx.fillStyle = " #008000";
  ctx.stroke();
}

function purple(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #8B00FF";
  ctx.fillStyle = " #8B00FF";
  ctx.stroke();
}

function yellow(event)
{
  ctx.beginPath();
  ctx.strokeStyle = "#FFFF00";
  ctx.fillStyle = "#FFFF00";
  ctx.stroke();
}

function orange(event)
{
  ctx.beginPath();
  ctx.strokeStyle = "#FFA500";
  ctx.fillStyle = "#FFA500";
  ctx.stroke();
}

function pink(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #FFC0CB";
  ctx.fillStyle = " #FFC0CB";
  ctx.stroke();
}

function black(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #000000";
  ctx.fillStyle = " #000000";
  ctx.stroke();
}

function white(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #FFFFFF";
  ctx.fillStyle = " #FFFFFF";
  ctx.stroke();
}

function showcolorpicker()
{
   //var redtext = document.getElementById("redtext");
   //var pickerred = document.getElementById("colorpickerred");
   //var greentext = document.getElementById("greentext");
   //var pickergreen = document.getElementById("colorpickergreen");
   //var bluetext = document.getElementById("bluetext");
   //var pickerblue = document.getElementById("colorpickerblue");
   var color_picker =  document.getElementById("color-picker");
   /*if (pickerred.style.display === "none") {
     pickerred.style.display = "block";
     redtext.style.display = 'block';
   } 
   else {
     pickerred.style.display = "none";
     redtext.style.display = 'none';
   }
   if (pickergreen.style.display === "none") {
     pickergreen.style.display = "block";
     greentext.style.display = "block";
   } 
   else {
     pickergreen.style.display = "none";
     greentext.style.display = "none";

   }
   if (pickerblue.style.display === "none") {
     pickerblue.style.display = "block";
     bluetext.style.display = "block";
   } 
   else {
     pickerblue.style.display = "none";
     bluetext.style.display = "none";
   }*/
   if (color_picker.style.display === "none") {
     color_picker.style.display = "block";
     color_picker.style.display = 'block';
   }
   else {
     color_picker.style.display = "none";
     color_picker.style.display = "none";

   }
  
}


function changepensize(event)
{
  // var input = document.querySelectorAll("input");
      
  ctx.beginPath();
  
  var pensize = document.getElementById("pensize").value;
  document.getElementById("change").innerHTML= pensize
  ctx.lineWidth = pensize;
  ctx.stroke();
} 

/*function displaychange(event)
{
   // var input = document.querySelectorAll("input");
  
    var red = document.getElementById("colorpickerred").value,
        green = document.getElementById("colorpickergreen").value,
        blue = document.getElementById("colorpickerblue").value;
            
    var display = document.getElementById("display");
    display.style.background = "rgb(" + red + ", " + green + ", " + blue +")";

    ctx.beginPath();
  
    var red = document.getElementById("colorpickerred").value,
        green = document.getElementById("colorpickergreen").value,
        blue = document.getElementById("colorpickerblue").value;
  
    ctx.strokeStyle = "rgb(" + red + ", " + green + ", " + blue +")";
    ctx.fillStyle = "rgb(" + red + ", " + green + ", " + blue +")";
    ctx.stroke();
}*/





function downloadimg()
{
  var link = document.getElementById("download");
  link.download = "image.png";
  link.href = cvs.toDataURL("image/png");
  link.click();
}

function setsize()
{
  var can = document.getElementById("cvs");
  var width = document.getElementById("setwidth");
  var height = document.getElementById("setheight");
  if(width.value>=200 && height.value>=300)
  {
      can.width = width.value;
      can.height = height.value;
  }
  else
  {
      if(width.value < 200 && height.value >=300)
      {
          alert("寬度太小！寬度應大於200！");
      }
      if(width.value >= 200 && height.value < 300)
      {
          alert("高度太小！高度應大於300！");
      }
      if(width.value <200 && height.value < 300)
      {
          alert("寬度及高度太小，寬度應大於200且高度應大於300！");
      }
  }

  ctx.beginPath();
  ctx.fillStyle = "#FFFFFF";
  ctx.rect(0,0,width.value,height.value);
  ctx.fill();
}

