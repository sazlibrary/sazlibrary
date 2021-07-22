$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;
  var active5 = false;

    $('.button').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.btn1').css({'background-color': 'royalblue', 'transform': 'translate(130px,20px)'});
    else $(this).find('.btn1').css({'background-color': 'blue', 'transform': 'none'}); 
     if (!active2) $(this).find('.btn2').css({'background-color': 'royalblue', 'transform': 'translate(85px,95px)'});
    else $(this).find('.btn2').css({'background-color': 'blue', 'transform': 'none'});
      if (!active3) $(this).find('.btn3').css({'background-color': 'royalblue', 'transform': 'translate(0px,120px)'});
    else $(this).find('.btn3').css({'background-color': 'blue', 'transform': 'none'});
      if (!active4) $(this).find('.btn4').css({'background-color': 'royalblue', 'transform': 'translate(-80px,90px)'});
    else $(this).find('.btn4').css({'background-color': 'blue', 'transform': 'none'});
      if (!active5) $(this).find('.btn5').css({'background-color': 'royalblue', 'transform': 'translate(-130px,20px)'});
    else $(this).find('.btn5').css({'background-color': 'blue', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
    active5 = !active5;  
    });
});