const emojies = ['😀', '😁', '😂', '🤣', '😫']

/** @type {import('./$types').RequestHandler} */
export function GET() {
	const rand = Math.floor(Math.random() * emojies.length)
	return new Response(emojies[rand])
}
