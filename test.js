var showText = function (target, message, index, interval) {    
  
    while(index!='n'){
        if (index < message.length) {
             target = target.concat(message[index++]); 
  //begin edit------------------------------|
        if(message[index]=='\n'){
            target = target.concat("<br />");
        }
        }
    }
  //end edit--------------------------------|      
      setTimeout(function () { showText(target, message, index, interval); }, interval);  
  }
      
  
showText("#msg", "Hi! My name is Jacob Maddux\nHope you are doing well\n", 0, 50);    
   

  
  