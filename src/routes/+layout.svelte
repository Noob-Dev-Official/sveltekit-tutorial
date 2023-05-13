<script lang="ts">
	import Title from '$lib/Title.svelte';
	import '../../static/global.css';
</script>

<header>
	<Title title="Hello World" />
</header>
<main>
	<slot />
</main>
<footer>
	<p>Copyright 2022 Hello World</p>
</footer>

<style lang="scss">
	header,
	footer {
		display: flex;
		justify-content: center;
		margin-top: 50px;
	}

	main {
		margin: 20px auto;
	}
</style>
