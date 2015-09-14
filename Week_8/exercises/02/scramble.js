(function () {
  var orig = document.getElementById('dolla-bill');
  var lines = orig.innerHTML.split('\n');
  orig.innerHTML = '';
  
  var yeah = [];
  
  lines.forEach(function (line) {
    yeah.push(line, 'lol'.repeat(40));
  });

  document.getElementById('fixed').innerHTML = yeah.join('\n');

  window.artArray = yeah;
  window.writeAscii = writeAscii;
  
  function writeAscii(arr) {
    document.getElementById('fixed').innerHTML = arr.join('\n');
  }
}());