//capitalize only the first letter of the string.
export function capitalizeFirstLetter(string) {
	if (!string) return ''
	return string.charAt(0).toUpperCase() + string.slice(1)
}

//capitalize all words of a string.
export function capitalizeWords(string) {
	return string.replace(/(?:^|\s)\S/g, function (a) {
		return a.toUpperCase()
	})
}
