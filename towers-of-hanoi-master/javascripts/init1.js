function init() {
  debug = new Debug(); // TODO: convert to singleton to eliminate global variable.
  new Game(5);
  document.getElementById('start-new-game').addEventListener('click', function() {
    document.getElementById('introduction').style.display = 'none';
  }, false);
}
window.addEventListener('load', init, false);
