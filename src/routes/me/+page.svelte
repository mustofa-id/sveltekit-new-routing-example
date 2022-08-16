<script>
	/** @type {import('./$types').PageData} */
	export let data
</script>

<article>
	<p>Name: {data.name}</p>
	<p>Current time: {data.date.toLocaleString()}</p>
</article>
