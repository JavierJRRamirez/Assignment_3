//display numbers
         function show(num) 
         { 
             document.getElementById("answer").value+=num
         } 
           
         //calculate
         function calculate() 
         { 
             let x = document.getElementById("answer").value 
             let y = document.getElementById("answer").value 
			 let z = eval(x,y)
             document.getElementById("answer").value = z 
         } 
           
         //clear the display 
         function clr() 
         { 
             document.getElementById("answer").value= "";
         } 