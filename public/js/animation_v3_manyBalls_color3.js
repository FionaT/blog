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

      //var canvas1 = $("#layer1");
      var canvas1 = document.getElementById('layer1');
      var canvas2 = document.getElementById('layer2');
      var context1 = canvas1.getContext('2d');
      var context2 = canvas2.getContext("2d");
      var winWidth = $(window).width();
      var winHeight = $(window).height();



      canvas1.width = winWidth;
      canvas1.height = winHeight;
      canvas2.width = winWidth;
      canvas2.height = winHeight;

      //canvas1.attr("width", winWidth);
      //canvas1.attr("height", winHeight);

      var circles = [],
          a = 1,
          r = 0;



      for(var i=0; i<20; i++){
        a *= -1;
        random = Math.random();

        var myCircle = {
          x: 75+i*40,
          y: Math.random()*500,
          r: 15+random*25,
          angle: random*2*a,
          dirY: 1,
          dirX: 1,
        }
        circles.push(myCircle);
      }

      function drawCircle(myCircle, context) {
        var color = [];
        color[0] = 255;
        color[1] = 255;
        color[2] = 255;

        var alpha = 0.3;

        var gradient = context.createRadialGradient(myCircle.x, myCircle.y, myCircle.r, myCircle.x, myCircle.y, 0);
        gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
        gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

        context.beginPath();
        context.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2*Math.PI);
        context.fillStyle = gradient;
        context.fill();

        //context.beginPath();
        //context.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2*Math.PI);
        //context.fillStyle = '#8ED6FF';
        //context.fill();
        //context.stroke();
      }

      function drawBackground(ctx){

        var g = ctx.createRadialGradient(0, 0, 0, 0, 0, 1680);
        g.addColorStop(0, '#f4b4d0');
        g.addColorStop(0.25, '#ec7a9b');
        g.addColorStop(0.5, '#e72a76');
        g.addColorStop(0.75, '#e50060');
        g.addColorStop(1, '#9d2142');
        ctx.setTransform(1, 0, 0, 0.625, 0, 0);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, winWidth, 1680);
      }

      function animate(circles, canvas1, context1, canvas2, context2) {
        // update

      context2.clearRect(0, 0, canvas2.width, canvas2.height);
      

        for(var i=0; i<circles.length; i++){

          //circles[i].y += 1;
          
          var linearSpeed = 300;
          var dx = linearSpeed / 1000;
          var dy = dx * circles[i].angle;
          var newX = circles[i].x + dx * circles[i].dirX;
          var newY = circles[i].y + dy * circles[i].dirY;

          if( newX >= winWidth - circles[i].r || newX <= circles[i].r ){
            circles[i].dirX = -1 * circles[i].dirX; 
          }
          else{
            circles[i].x = newX;  
          }

          if( newY >= winHeight - circles[i].r || newY <= circles[i].r ){
            circles[i].dirY = -1 * circles[i].dirY;
          }
          else{
            circles[i].y = newY;
          }  

          drawCircle(circles[i], context2);
        
        }
    

        // request new frame
        requestAnimFrame(function() {
          animate(circles, canvas1, context1, canvas2, context2 );
        });

        drawBackground(context1);
      }
   
      
      // wait one second before starting animation
      setTimeout(function() {

        for(var i=0; i<circles.length; i++){
          drawCircle(circles[i],context2);
        }

        animate(circles, canvas1, context1, canvas2, context2);
      }, 1000);



})(jQuery);