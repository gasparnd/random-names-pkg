const names = [
	'Gaspar',
	'Violet',
	'Ana',
	'Ruben',
	'Oscar',
	'Nicolay',
	'Matias',
	'Peter',
	'Valentino',
	'Linda'
]

const randomNames = () => {
	const name = names[Math.floor(Math.random() * names.length)]
	console.log(name)
}


module.exports = { randomNames }