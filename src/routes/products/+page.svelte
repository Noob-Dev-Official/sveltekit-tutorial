<script lang="ts">
	export let data;
	const products = data.products;
</script>

<h1>{data.title}</h1>

{#each products as prd}
	<div>
		<h2>{prd.title}</h2>
		<p>{prd.description}</p>
	</div>
{/each}
