<script>
	import { onMount } from 'svelte'

	onMount(() => {
		const thisWorldStyle = 'bg-another-world'
		document.body.classList.add(thisWorldStyle)
		return () => document.body.classList.remove(thisWorldStyle)
	})
</script>

<main>
	<slot />
</main>

<style>
	:global(body.bg-another-world) {
		background-color: bisque;
	}
</style>
