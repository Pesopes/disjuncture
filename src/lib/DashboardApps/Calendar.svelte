<script>
  import Popup from "./../Popup.svelte"
  import "./Calendar/CalendarApp.svelte"
  import CalendarApp from "./Calendar/CalendarApp.svelte"

  //Exports
  export let visible = false
  export let title = "New window"
  export let isPinned = false

  const today = new Date()
</script>

<Popup bind:visible bind:isPinned title="{title}">
  <CalendarApp {today} year={2020} />
  <a href="https://svelte.dev/repl/cb4d121decc54cc98e312d5b83c96df7?version=3.17.2">Credit</a>
</Popup>

<style>
  
</style>