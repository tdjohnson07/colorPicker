$(document).ready(function(){
  $(".game").append("<div class=blue></div>");
  $(".blue").css({"background-color": "blue", "color": "blue", "height": "50px", "width": "50px"});
  $(".game").append("<div class=red>red</div>");
  $(".red").css({"background-color": "red", "color":"transparent","height": "50px", "width": "50px"});
  $(".game").append("<div class=green>color3</div>");
  $(".green").css({"background-color":"green", "color": "transparent","height": "50px", "width": "50px"});
  $(".game").append("<div class=yellow>color 4</div>");
  $(".yellow").css({"background-color": "yellow", "color": "transparent","height": "50px", "width": "50px"});
  $(".game").css("display", "flex");
  // var colorPrompt= "red";
  var colorArray=["blue","red","green", "yellow"];
  var colorIndex=Math.floor(Math.random()*colorArray.length);
  var colorPrompt=colorArray[colorIndex];
  $(".promt").append("<h2>Pick Color "+colorPrompt+"</h2>");
  $(".game").on("click",function(){
    var picked=event.target.className;
    if(picked===colorPrompt){
      $("h3").text("Picked Correct");
      colorIndex=Math.floor(Math.random()*colorArray.length);
      colorPrompt=colorArray[colorIndex];
      $("h2").text("Pick Color "+colorPrompt)
    }
    else{
        $("h3").text("Try Again ");
    }
  });
});
