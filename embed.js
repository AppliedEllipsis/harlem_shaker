// Harlem Shaker Embedded Konami Code (https://github.com/AppliedEllipsis/harlem_shaker/)
function loadjscssfile(filename, filetype){
  var fileref;
  if (filetype=="js"){
    fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
  }
  else if (filetype=="css"){
    fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
  }
  if (typeof fileref!="undefined")
    document.getElementsByTagName("head")[0].appendChild(fileref);
}

var keysPressed = [];
var code = [38,38,40,40,37,39,37,39,66,65];
var playing = false;

window.addEventListener('keydown', function(e) { 
    e = e || window.event;
    var wrkkeyCode = e.keyCode;

	//console.log(wrkkeyCode);
	if (wrkkeyCode === code[keysPressed.length]) {
		//console.log('hit at ' + keysPressed.length	);
		keysPressed.push(wrkkeyCode);
		if (keysPressed.length === code.length) {
            if (window.playing) { keysPressed = []; return; }
            window.playing = true;
		    console.log('yeah baby');
		    keysPressed = [];
            window.scrollTo(0,0);
            loadjscssfile(document.location.protocol.replace(/file|chrome|about|config/,'http') + '//include.rd.to/harlem_shaker/harlem-shake-script.js?rnd='+Math.random().toString(), "js");
        }
    }
}, false);
