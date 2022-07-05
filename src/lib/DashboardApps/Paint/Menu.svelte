<script lang="ts">
  import * as store from './paintStores';
	import { createGrid } from './utils';

	let gridSize;

	store.gridSize.subscribe(value => {
		gridSize = value;
	})
</script>

<div class="menu">
  <button on:click={() => store.color.set("#ff3e00")} style="--bg-color: #ff3e00"></button>
  <button on:click={() => store.color.set("red")} style="--bg-color: red"></button>
  <button on:click={() => store.color.set("green")} style="--bg-color: green"></button>
  <button on:click={() => store.color.set("blue")} style="--bg-color: blue"></button>
  <button class="clear" on:click={() => store.grid.set(createGrid(gridSize))} style="--bg-color: #ff3e00">clear</button>
</div>

<style>
  .menu {
		justify-content: center;
		margin-bottom: 10px;
	}

  button {
		border: none;
  	vertical-align: top;
		padding: 20 20;
		text-align: center;
		outline: 1px solid transparent;
		outline-offset: 2px !important;
		background: var(--bg-color) !important;
    width: 35px;
		height: 35px;
		margin: 0;
		font-size: 14px;
		color: #fdf6e3;
	}

	button:hover {
		border: 2px solid #fdf6e3;
	}

  button.clear {
		height: 35px;
		width: 80px;
	}

	button.clear:hover {
		border: 2px solid black;
	}
	
	button:active {
		background: #fdf6e3;
	}
</style>