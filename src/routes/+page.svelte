<script lang="ts">
	import { goto } from '$app/navigation';

	let title: string = 'hello';

	const updateTitle = () => {
		title = 'different';
	};

	const onDocsBtnClick = () => {
		goto('/docs');
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="index">
	<h2>Some Title</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad alias
		quos totam magnam eos sequi numquam sit doloribus dolore {title}.
	</p>

	<button on:click={updateTitle}>Change Title</button>
	<button on:click={onDocsBtnClick}>Docs</button>

	<input type="text" bind:value={title} />

	<a href="/about">About</a>
	<a href="/guides">Guide</a>
</div>

<style lang="scss">
	.index {
		text-align: center;
		display: block;
	}
</style>
