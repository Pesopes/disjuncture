<script>
  import Popup from "./../Popup.svelte"

  //Exports
  export let visible = false
  export let title = "New window"
  export let isPinned = false

</script>

<Popup bind:visible bind:isPinned title="{title}">
  <!-- Content here -->
</Popup>

<style>
  
</style>