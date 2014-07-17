/**
 * log.js hufeng
 * The safe wrapper for `console.xxx` functions
 *  log("message") ==> console.log("message")
 *  log("message", "warn") ==> console.warn("message")
 */

//cache current location hash, when the module loading
//only fetch hash one time.
var isDebug = parent.window.location.hash === '#debug';

module.exports = function() {	
  window.console &&
  // Do NOT print `log(msg)` in non-debug mode
  isDebug &&
  // Call native method of console
  // if not pass 'console' as first argument, 
  // chrome error!
  console.log.apply(console, arguments);
}
