<script>
	/** @type {import('./$types').LayoutData} */
	export let data
</script>

<nav>
	{#each data.menu as [href, text]}
		<a {href}>{text}</a>
	{/each}
</nav>

<slot />

<style>
	a {
		padding: 0 0.5rem;
	}
</style>
