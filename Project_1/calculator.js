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
		 function sin() {
			let x = document.getElementById("answer").value
			let z = Math.sin(x)
             document.getElementById("answer").value = z
		 }
		 function cos() {
			let x = document.getElementById("answer").value
			let z = Math.cos(x)
             document.getElementById("answer").value = z
		 }
		 function tan() {
			let x = document.getElementById("answer").value
			let z = Math.tan(x)
             document.getElementById("answer").value = z
		 }
		 function sqrt() {
			let x = document.getElementById("answer").value
			let z = Math.sqrt(x)
             document.getElementById("answer").value = z
		 }
		 function log() {
			let x = document.getElementById("answer").value
			let z = Math.log(x)
             document.getElementById("answer").value = z
		 }
           
         //clear the display 
         function clr() 
         { 
             document.getElementById("answer").value= "";
         } 
