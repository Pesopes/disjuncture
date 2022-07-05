<script>
  import Popup from "./../Popup.svelte"
  import { storeApps } from "../../stores/localStorage"

  export let visible = false
  export let title = "New window"
</script>

<Popup bind:visible={visible} title="{title}">
  Store coming soon...
  <!-- {#each $storeApps as app}
    <div>{app.name}</div>
    <img src="{app.image}" alt="icon for {app.name}"/>
  {/each} -->
</Popup>