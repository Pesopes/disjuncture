<script>
  import Popup from "./../Popup.svelte"
  import Canvas from "./Paint/Canvas.svelte"
  import Menu from "./Paint/Menu.svelte"
  
  export let visible = false
  export let title = "New window"
  export let isPinned = false

</script>

<Popup bind:visible bind:isPinned title="{title}">
  <Menu/>
  <Canvas/>
  <br/>
  <a href="https://github.com/gspasov/paint">Credit</a>
</Popup>