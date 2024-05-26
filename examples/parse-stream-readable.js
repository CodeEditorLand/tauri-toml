const Readable = require("stream").Readable;
const TOML = require("..");
const util = require("util");
const dump = (d) =>
	util.inspect(d, { colors: true, depth: Number.POSITIVE_INFINITY });

success().then(() => failure());

function streamString(str) {
	// creates a readable stream from a string that just emits the stream as a
	// single block.
	let streamed = false;
	return new Readable({
		read() {
			if (streamed) return this.push(null);
			streamed = true;
			this.push(str);
		},
	});
}

function success() {
	const testtoml = `a = [1.0,1e0]`;

	console.log("Parsing:", testtoml);
	return TOML.parse
		.stream(streamString(testtoml))
		.then((_) => console.log("Result:", dump(_)))
		.catch((_) => console.error("Error:", _.message));
}

function failure() {
	const testtoml = `a = [1.0,1e0`;

	console.log("Parsing:", testtoml);
	return TOML.parse
		.stream(streamString(testtoml))
		.then((_) => console.log("Result:", dump(_)))
		.catch((_) => console.error("Error:", _.message));
}
