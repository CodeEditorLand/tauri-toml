const TOML = require("..");
const util = require("util");
const dump = (d) =>
	util.inspect(d, { colors: true, depth: Number.POSITIVE_INFINITY });

success().then(() => failure());

function success() {
	const testtoml = `a = [1.0,1e0]`;

	console.log("Parsing:", testtoml);
	return TOML.parse
		.async(testtoml, { blocksize: 4 })
		.then((_) => console.log("Result:", dump(_)))
		.catch((_) => console.error("Error:", _.message));
}

function failure() {
	const testtoml = `a = [1.0,1e0`;

	console.log("Parsing:", testtoml);
	return TOML.parse
		.async(testtoml, { blocksize: 4 })
		.then((_) => console.log("Result:", dump(_)))
		.catch((_) => console.error("Error:", _.message));
}
