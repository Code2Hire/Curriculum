(function () {
  var orig = console.log.bind(console);
  var el = document.getElementById('console');
  console.log = function log() {
    var i, n;
    for (i = 0, n = arguments.length; i < n; i += 1) {
      p(arguments[i]);
      orig(arguments[i]);
    }
  };

  function p(arg) {
    var n = document.createElement('p');
    n.innerHTML = arg;
    el.appendChild(n);
  }
}());