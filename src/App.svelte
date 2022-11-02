<script>
	import MindMap from "./components/MindMap.svelte";
</script>

<main class="w-100 h-100">
	<MindMap />
</main>

<style>
	

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>