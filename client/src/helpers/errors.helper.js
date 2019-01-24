export default function parseErrors(errors) {
	let parsedErrors = [];

	Object.keys(errors).map((key) => {
		const item = errors[key];

		parsedErrors = [].concat(parsedErrors, item);
	});

	return parsedErrors;
}
