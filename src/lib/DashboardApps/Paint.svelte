<script>
  import Popup from "./../Popup.svelte"
  import Canvas from "./Paint/Canvas.svelte"
  import Menu from "./Paint/Menu.svelte"
  export let visible = false
  export let title = "New window"
</script>

<Popup bind:visible={visible} title="{title}">
  <Menu/>
  <Canvas/>
  <br/>
  <a href="https://github.com/gspasov/paint">Credit</a>
</Popup>