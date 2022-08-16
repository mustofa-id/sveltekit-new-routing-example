<script>
	/** @type {import('./$types').PageData} */
	export let data
</script>

<article>
	<p>Name: {data.name}</p>
	<p>Current time: {data.date.toLocaleString()}</p>

	{#await fetch('/_api/emoji')}
		<p>Fetching emoji...</p>
	{:then response}
		{#await response.text() then text}
			<p>Emoji: {text}</p>
		{/await}
	{/await}
</article>
