/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		date: new Date()
	}
}
