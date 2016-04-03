(function($){
      window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

      window.onresize = function(){
        winWidth = $(window).width();
        winHeight = $(window).height();

        canvas1.width = winWidth;
        canvas1.height = winHeight;
        canvas2.width = winWidth;
        canvas2.height = winHeight;
      }

      var canvas1 = document.getElementById('layer1');
      var canvas2 = document.getElementById('layer2');
      var context1 = canvas1.getContext('2d');
      var context2 = canvas2.getContext("2d");
      var winWidth = $(window).width();
      var winHeight = $(window).height();

      canvas1.width = winWidth;
      canvas1.height = 1000;
      canvas2.width = winWidth;
      canvas2.height = 1000;



      var circles = [],
          a = 1,
          r = 0;



      for(var i=0; i<10; i++){="" a="" *="-1;" random="Math.random();" var="" mycircle="{" x:="" 45+i*24,="" y:="" math.random()*800,="" r:="" 15+random*25,="" angle:="" random*2*a,="" diry:="" 1,="" dirx:="" }="" circles.push(mycircle);="" function="" drawcircle(mycircle,="" context)="" {="" color="[];" color[0]="255;" color[1]="255;" color[2]="255;" alpha="0.3;" gradient="context.createRadialGradient(myCircle.x," mycircle.y,="" mycircle.r,="" mycircle.x,="" 0);="" gradient.addcolorstop(0,="" 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');="" gradient.addcolorstop(1,="" 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');="" context.beginpath();="" context.arc(mycircle.x,="" 0,="" 2*math.pi);="" context.fillstyle="gradient;" context.fill();="" ;="" context.stroke();="" drawbackground(ctx){="" g="ctx.createRadialGradient(0," 1680);="" g.addcolorstop(0,="" '#f4b4d0');="" g.addcolorstop(0.25,="" '#ec7a9b');="" g.addcolorstop(0.5,="" '#e72a76');="" g.addcolorstop(0.75,="" '#e50060');="" g.addcolorstop(1,="" '#9d2142');="" ctx.settransform(1,="" 0.625,="" ctx.fillstyle="g;" ctx.fillrect(0,="" winwidth,="" animate(circles,="" canvas1,="" context1,="" canvas2,="" context2)="" update="" context2.clearrect(0,="" canvas2.width,="" canvas2.height);="" for(var="" i="0;" i<circles.length;="" circles[i].y="" +="1;" linearspeed="500;" dx="linearSpeed" 1000;="" dy="dx" circles[i].angle;="" newx="circles[i].x" circles[i].dirx;="" newy="circles[i].y" circles[i].diry;="" if(="">= winWidth - circles[i].r || newX <= circles[i].r="" ){="" circles[i].dirx="-1" *="" circles[i].dirx;="" }="" else{="" circles[i].x="newX;" if(="" newy="">= winHeight - circles[i].r || newY </=></10;>