<script>
  import Popup from "./../Popup.svelte"

  //Exports
  export let visible = false
  export let title = "New window"
  export let isPinned = false

</script>

<Popup bind:visible bind:isPinned title="{title}" centered>
  <h1>About</h1>

  <span>Source code on <a href="https://github.com/Pesopes/disjuncture">Github</a></span>
</Popup>

<style>
  
</style>