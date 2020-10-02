function removeSpaces(s) {
	return s.replace(/("[^"]*")|([ \t\n]+)/g, (x) => {
		return x.charCodeAt(0) == 34 ? x : "";
	});
}

function dataJsonToJs(jsonFile, jsFile) {
	fs = require("fs");
	fs.readFile(jsonFile, "utf8", function (err, data) {
		if (err) {
			return console.log(err);
		}
		data = "const data = '" + removeSpaces(data) + "';";
		fs.writeFile(jsFile, data, (err) => {
			if (err) {
				return console.log(err);
			}
		});
	});
}

dataJsonToJs("./data.json", "./data.js");
