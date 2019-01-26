export function isEmpty(obj) {
	const result = Object.keys(obj).length;

	return !result;
}
