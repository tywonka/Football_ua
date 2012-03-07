document.getElementsByClassName = function(cl) {
	var retnode = [];
	var myclass = new RegExp('.*'+cl);
	var elem = this.getElementsByTagName('*');
	for (var i = 0; i < elem.length; i++) {
		var classes = elem[i].className;
		if (myclass.test(classes)) retnode.push(elem[i]);
	}
	return retnode;
};
var targets = document.getElementsByClassName(' autblock');
for (var i = 0; i < targets.length; ++i) {
	targets[i].onclick = '';
}