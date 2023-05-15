<script>
	import { page } from '$app/stores';

	const arr = $page.params.slug.split('/');
</script>

{#if arr.length === 1}
	<h1>Viewing docs for feature {arr[0]}</h1>
{:else if arr.length === 2}
	<h1>Viewing docs for feature {arr[0]} and concept {arr[1]}</h1>
{/if}
