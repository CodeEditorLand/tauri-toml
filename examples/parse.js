const TOML = require("..");
const util = require("util");
const dump = (d) =>
	util.inspect(d, { colors: true, depth: Number.POSITIVE_INFINITY });

success();
failure();

function success() {
	const testtoml = `a = [1.0,1e0]`;

	console.log("Parsing:", testtoml);
	try {
		console.log("Result:", dump(TOML.parse(testtoml)));
	} catch (err) {
		console.error("Error:", err.message);
	}
}

function failure() {
	const testtoml = `a = [1.0,1e0`;

	console.log("Parsing:", testtoml);
	try {
		console.log("Result:", dump(TOML.parse(testtoml)));
	} catch (err) {
		console.error("Error:", err.message);
	}
}
