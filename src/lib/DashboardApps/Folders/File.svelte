<script>


	export let name;
	export let clickEvent = null;
	export let path = "kul"
	path = "bruh"//this is so svelte doesn't yell at me :)
	let type = name.slice(name.lastIndexOf('.') + 1);
	let src = `./icons/${type}.svg`

	let style = clickEvent === null ? "" : "cursor:pointer;"
</script>

<span on:click="{clickEvent}" {style}>
	<img {src} alt="icon for type {type}"/>
	{name}
</span>

<style>
	img{
		height: 1.5em;
		width: 1.5em;
	}
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
