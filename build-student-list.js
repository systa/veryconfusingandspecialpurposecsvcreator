// NOT BE USED OR UNDERSTOOD SEPARATELY
var fs = require("fs");
var stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
var data = JSON.parse(stdinBuffer.toString());
var res = data.results;
console.log("Opnro;Nimi;Email");
for (i in res) {
    var line = "";
    if (res[i].student_id != null) {
	line += tuniid(res[i].student_id) + ";";
	line += res[i].full_name + ";";
	line += res[i].email;
	console.log(line);
    }
}

function tuniid(s) {
    var i = s.indexOf("tuni.fi:");
    if (i < 0)
	return ("??");
    var s1 = s.substr(i+8);
    i = s1.indexOf(" ");
    if (i > 0)
	s1 = s1.substr(0,i);
    return s1;
}
