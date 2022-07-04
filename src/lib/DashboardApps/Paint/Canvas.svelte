<script lang="ts">
  import * as store from './paintStores';
	let color;

	let isMouseDown = false;
	let grid;
	let gridSize;

	store.color.subscribe(value => {
		color = value;
	});

	store.grid.subscribe(value => {
		grid = value;
	});

	store.gridSize.subscribe(value => {
		gridSize = value;
	})


	function up(_e){
		isMouseDown = false;
	}

	function down(e) {
		isMouseDown = true;
		return changeBackgroundColor(e, color)
	}

	function changeBackgroundColor(e, color) {
		if (isMouseDown) {
			const key = e.currentTarget.getAttribute("id")
			grid = {...grid, [key]: color}
		}
	}
</script>

<div class="canvas" style="--gridSize: {gridSize}">
  {#each Object.entries((grid)) as _, i}
    <div 
    id={i.toString()} 
    class="block" 
    on:mouseup={up}
    on:mousedown={down}
    on:mouseenter={(e) => changeBackgroundColor(e, color)} 
    style={`background-color: ${grid[i.toString()]}`}
    >
    </div>
  {/each}
</div>

<style>
  div.canvas {
		justify-content: center;
		user-select: none;
		display: inline-grid;
		grid-template-columns: repeat(var(--gridSize), 0.4em);
		grid-template-rows: repeat(var(--gridSize), 0.4em);
	}

	div.block {
		background-color: black;
		text-align: center;
	}
</style>