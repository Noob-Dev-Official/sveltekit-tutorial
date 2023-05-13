<!-- context="module" -->
<script lang="ts">
	import { onMount } from 'svelte';

	let guides: any;
	onMount(async () => {
		guides = await fetchData();
	});

	const fetchData = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const guides = await res.json();

		if (res.ok) {
			return guides;
		}
	};
</script>

<svelte:head>
	<title>Guides</title>
</svelte:head>

<div class="guides">
	<ul>
		{#await fetchData()}
			<p>loading...</p>
		{:then data}
			{#each data as guide}
				<li>
					<a href="/">{guide.title}</a>
				</li>
			{/each}
		{/await}
	</ul>
</div>

<style lang="scss">
	.guides {
		margin-top: 20px;

		ul {
			list-style-type: none;
			padding: 0;

			a {
				display: inline-block;
				margin-top: 10px;
				padding: 10px;
				border: 1px dotted rgba(255, 255, 255, 0.2);
			}
		}
	}
</style>
