window.onload = function () {
  var pageColor = document.getElementById('keyboard').getAttribute('page-color');
  var keyPressed = function (event) {
    event.preventDefault();
    var code = event.keyCode;
    console.log(code);-
    switch (code) {
    case 16:
      document.getElementById('shift1').setAttribute('style', 'background-color: ' + pageColor);
      document.getElementById('shift2').setAttribute('style', 'background-color: ' + pageColor);
      break;
    case 17:
      document.getElementById('control1').setAttribute('style', 'background-color: ' + pageColor);
      document.getElementById('control2').setAttribute('style', 'background-color: ' + pageColor);
      break;
    case 18:
      document.getElementById('option1').setAttribute('style', 'background-color: ' + pageColor);
      document.getElementById('option2').setAttribute('style', 'background-color: ' + pageColor);
      break;
    default:
      console.log(code);
      document.getElementById(code).setAttribute('style', 'background-color: ' + pageColor);
      break;
    }
  }

  var keyRelease = function (event) {
    var code = event.keyCode;
    switch (code) {
    case 16:
      document.getElementById('shift1').removeAttribute('style');
      document.getElementById('shift2').removeAttribute('style');
      break;
    case 17:
      document.getElementById('control1').removeAttribute('style');
      document.getElementById('control2').removeAttribute('style');
      break;
    case 18:
      document.getElementById('option1').removeAttribute('style');
      document.getElementById('option2').removeAttribute('style');
      break;
    default:
      console.log(code);
      document.getElementById(code).removeAttribute('style');
      break;
    }
  }

  window.addEventListener('keydown', keyPressed, true);
  window.addEventListener('keyup', keyRelease, true);
}
