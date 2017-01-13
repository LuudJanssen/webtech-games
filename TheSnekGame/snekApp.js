(function (window, document, drawModule, undefined) {

var btn = document.getElementById('btn');
btn.addEventListener("click", function(){ drawModule.init();});

	document.onkeydown = function(event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            }
        }, false)

        switch(keyCode) {

        case 37:
          if (direction != 'right') {
            direction = 'left';
          }
          break;

        case 39:
          if (direction != 'left') {
          direction = 'right';
          }
          break;

        case 38:
          if (direction != 'down') {
          direction = 'up';
          }
          break;

        case 40:
          if (direction != 'up') {
          direction = 'down';
          }
          break;
          }
      }


})(window, document, drawModule);
