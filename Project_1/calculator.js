$(document).ready(function() { // do this when the document is loaded
                  $("#opsContainer").show(); // show the element with ID "element"
                  $("#funcContainer").hide(); // hide the element with ID "otherElement"
});

$("#ButtonSwitcherf").click(function() { // when "button_id" is clicked
                      $("#funcContainer").show(); // show element
                      $("#opsContainer").hide();    // hide other element
                      });

$("#ButtonSwitchero").click(function() { // when "button_id" is clicked
                      $("#funcContainer").hide(); // show element
                      $("#opsContainer").show();    // hide other element
                      });



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
