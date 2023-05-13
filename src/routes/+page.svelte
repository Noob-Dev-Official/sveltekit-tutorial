<script>
	let title = 'hello';

	const updateTitle = () => {
		title = 'different';
	};
</script>

<div class="index">
	<h2>Some Title</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad alias
		quos totam magnam eos sequi numquam sit doloribus dolore {title}.
	</p>

	<button on:click={updateTitle}>Change Title</button>

	<input type="text" bind:value={title} />
</div>

<style>
	.index {
		text-align: center;
		display: block;
		color: var(--red-color);
	}
</style>
