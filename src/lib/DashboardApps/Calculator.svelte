<script>
  import Popup from "./../Popup.svelte"
  import Calc from "./Calculator/Calc.svelte"
  export let visible = false
  export let title = "New window"
</script>

<Popup bind:visible={visible} title="{title}">
  <Calc/>
  <a href="https://codesandbox.io/s/svelte-calculator-9icog?file=/Components/Calculator/Display.svelte:0-1841">Credit</a>
</Popup>