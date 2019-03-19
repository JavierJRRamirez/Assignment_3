downX = 0;
downY = 0;

$("#gestureArea").mouseup(function() {
                          $("#gestureResult").text("mouse up");
                          upX = event.pageX;
                          upY = event.pageY;
                          
                          if (upX < downX) {
                          $("#gestureResult").text("swipe left");
                          }
                          else if (upX > downX){
                          $("#gestureResult").text("swipe right");
                          }
                          else if (upX == downX){
                          $("#gestureResult").text("mouse up");
                          }

                          });

$("#gestureArea").mousedown(function() {
                          $("#gestureResult").text("mouse down");
                            downX = event.pageX;
                            downY = event.pageY;
                          });

