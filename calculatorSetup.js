function optimize(){
  
  var w_width = $(window).width();
  var w_height = 750;
  
  if(w_width < 320){
    
    w_width = 320;
  }
  
  $('main .row').css('width', w_width).css('height', w_height);
}