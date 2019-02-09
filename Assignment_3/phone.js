//alert("hey")

$(document).ready(function() { // do this when the document is loaded
                  $("#MainButtonA").show(); // show the element with ID "element"
                  $("#MainButtonB").show(); // show the element with ID "element"
                  $("#MainButtonC").show(); // show the element with ID "element"
                  $("#MainButtonD").show(); // show the element with ID "element"
                  $("#content2").hide(); // hide the element with ID "otherElement"
                  $("#content3").hide(); // hide the element with ID "otherElement"
                  $("#content4").hide(); // hide the element with ID "otherElement"

});

$("#MainButtonA").click(function() { // when "button_id" is clicked
                      $("#content1").show(); // show element
                      $("#content2").hide();    // hide other element
                      $("#content3").hide(); // hide the element with ID "otherElement"
                      $("#content4").hide(); // hide the element with ID "otherElement"
                      });
$("#MainButtonB").click(function() { // when "button_id" is clicked
                        $("#content2").show(); // show element
                        $("#content1").hide();    // hide other element
                        $("#content3").hide(); // hide the element with ID "otherElement"
                        $("#content4").hide(); // hide the element with ID "otherElement"
                        });
$("#MainButtonC").click(function() { // when "button_id" is clicked
                        $("#content3").show(); // show element
                        $("#content1").hide();    // hide other element
                        $("#content2").hide(); // hide the element with ID "otherElement"
                        $("#content4").hide(); // hide the element with ID "otherElement"
                        });
$("#MainButtonD").click(function() { // when "button_id" is clicked
                        $("#content4").show(); // show element
                        $("#content1").hide();    // hide other element
                        $("#content2").hide(); // hide the element with ID "otherElement"
                        $("#content3").hide(); // hide the element with ID "otherElement"
                        });

