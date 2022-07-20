<script>
  import Popup from "./../Popup.svelte"
  import { settings, settingsDefault } from "../../stores/localStorage"
  import { get } from 'svelte/store'
  import NumberInput from "../Util/NumberInput.svelte"

  export let visible = false
  export let title = "New window"
  export let isPinned = false

  let settingsCache = JSON.parse(JSON.stringify(get(settings)))

  function resetSettings(){
    const gameSettingsCache = settingsCache.gameSettings
    settingsCache=JSON.parse(JSON.stringify(settingsDefault))
    settingsCache.gameSettings = gameSettingsCache
  }
</script>

<Popup bind:visible bind:isPinned title="{title}" on:exit={()=>settingsCache = JSON.parse(JSON.stringify(get(settings)))}>
  <NumberInput label="Rendering sphere size:" bind:value="{settingsCache.renderSize}" min={50}/><br/>
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

  <p>Rules:{settingsCache.gameSettings.rulesCount}</p>
  <p>Seed:{settingsCache.gameSettings.seed}</p>


  <!-- <button on:click={()=>generateGoodGame(100)}>Generate good game</button> -->
  <button on:click={()=>settings.set(settingsCache)}>Apply settings</button>
  <button on:click={resetSettings}>Reset</button>

</Popup>