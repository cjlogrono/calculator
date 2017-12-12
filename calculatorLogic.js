$(document).ready(function(){
  
  var lastOperation = "";
  var total = 0;
  var result = false;
  
  $(document).on('click', '.buttons div', function(){
  
      $('.buttons div').removeClass('animated pulse');
      $(this).addClass('animated pulse');
      var pressedVal = $(this).find('p').text();
      //alert(pressedVal);

      switch(pressedVal){

        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
          if(($('.screen div:first-child p').text() === "0" && 
             total === 0) || 
             $('.screen div:first-child p').text() === "+" ||
             $('.screen div:first-child p').text() === "-" || 
             $('.screen div:first-child p').text() === "÷" ||
             $('.screen div:first-child p').text() === "×" ||
             result){
           
                if($('.screen div:first-child p').text() === "0" || result){
                  $('.screen div:last-child p').text("");
                  result = false;
                  total = 0;
                }
                $('.screen div:first-child p').text("");
          }
          $('.screen div:first-child p, .screen div:last-child p').append(pressedVal);
        break;
          
        case "÷":
        case "×":
        case "+":
        case "-":
          if(total === 0)
            total = parseFloat($('.screen div:first-child p').text());
          else{ 
            if(lastOperation === "+")
              total += parseFloat($('.screen div:first-child p').text());
            else if(lastOperation === "-")
              total -= parseFloat($('.screen div:first-child p').text());
            else if(lastOperation === "×")
              total *= parseFloat($('.screen div:first-child p').text());
            else
              total /= parseFloat($('.screen div:first-child p').text());
          }
          $('.screen div:first-child p').text(pressedVal);
          $('.screen div:last-child p').append(pressedVal);
          lastOperation = pressedVal;
          break;
          
        case "=":
            if(total !== 0 && !result){
              if(lastOperation === "+")
                total += parseFloat($('.screen div:first-child p').text());
              else if(lastOperation === "-")
                total -= parseFloat($('.screen div:first-child p').text());
              else if(lastOperation === "×")
                total *= parseFloat($('.screen div:first-child p').text());
              else
                total /= parseFloat($('.screen div:first-child p').text());
              $('.screen div:first-child p').text(total);
              $('.screen div:last-child p').append("= " + total);
              result = true;
            }
            break;
          
        case "CE":
          if(result){
            $('.screen div:first-child p').text("0");
            $('.screen div:last-child p').text("Let's get calculating!");
            total = 0;
            result = false;
          }else{
            var updateSum = $('.screen div:last-child p').text();
            if(total === 0)
              $('.screen div:last-child p').text("0");
            else{
              updateSum = updateSum.substr(0, updateSum.length - $('.screen div:first-child p').text().length);
              $('.screen div:last-child p').text(updateSum);
            }
            $('.screen div:first-child p').text("0");
          }
          break;
          
        case "AC":
          $('.screen div:first-child p').text("0");
          $('.screen div:last-child p').text("Let's get calculating!");
          total = 0;
          result = false;
          break;
      }
  });
  optimize();
});

$(window).resize(function(){
  
  optimize();
});