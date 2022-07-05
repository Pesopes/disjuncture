<script>
  import Popup from "./../Popup.svelte"
  import { settings, settingsDefault } from "../../stores/localStorage"
  import { get } from 'svelte/store'

  export let visible = false
  export let title = "New window"
  export let isPinned = false

  let settingsCache = JSON.parse(JSON.stringify(get(settings)))
</script>

<Popup bind:visible bind:isPinned title="{title}" on:exit={()=>settingsCache = JSON.parse(JSON.stringify(get(settings)))}>
  <label>
    Rendering sphere size:
    <input type="number" bind:value="{settingsCache.renderSize}" min="50 "/><br/>
  </label>
  <label>
    Base number size:
    <input type="range" bind:value="{settingsCache.baseNumberSize}" min="0" max="0.9" step="0.05"/><br/>
  </label>
  <label>
    Display shadows:
    <input type="checkbox" bind:checked="{settingsCache.displayShadows}"/><br/>
  </label>
  <label>
    Change number size:
    <input type="checkbox" bind:checked="{settingsCache.runMouseOver}"/><br/>
  </label>
  <label>
    Scanlines:
    <input type="checkbox" bind:checked="{settingsCache.scanLines}"/><br/>
  </label>
  <label>
    Filter:
    <input type="checkbox" bind:checked="{settingsCache.crtFilter}"/><br/>
  </label>
  <label>
    Rules:
    <input type="number" bind:value="{settingsCache.gameSettings.rulesCount}"  min="1"/><br/>
  </label>
  <label>
    Seed:
    <input type="number" bind:value="{settingsCache.gameSettings.seed}"  min="1"/><br/>
  </label>
  <!-- <button on:click={()=>generateGoodGame(100)}>Generate good game</button> -->
  <button on:click={()=>settings.set(settingsCache)}>Apply settings</button>
  <button on:click={()=>settingsCache=JSON.parse(JSON.stringify(settingsDefault))}>Reset</button>

</Popup>