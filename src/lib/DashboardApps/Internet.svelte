<script>
  import Popup from "./../Popup.svelte"

  export let visible = false
  export let title = "New window"
</script>

<Popup bind:visible={visible} title="{title}">

</Popup>