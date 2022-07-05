<script>
  import Popup from "./../Popup.svelte"
  import { score } from "../../stores/localStorage"
  import { apps } from "./../../stores/appsStore"
  
  export let visible = false
  export let title = "New window"
  export let isPinned = false


  function purchase(app){
    if(app.cost > $score) return
    const cachedApps = $apps
    score.set($score-app.cost)
    cachedApps[app.id].unlocked = true
    apps.set(cachedApps)
  }
</script>

<Popup bind:visible bind:isPinned title="{title}">
  <input type="number" bind:value="{$score}"/>
  <table>
    <tr>
      <th>Name</th>
      <th>Icon</th>
      <th>Price</th>
    </tr>
    {#each $apps as app}
    <tr>
      <td>{app.title}</td>
      <td>
        <img src="{app.image}" alt="icon for {app.title}"/>
      </td>
      <td>
        {#if app.unlocked}
          <button disabled style="cursor: not-allowed;">
            Unlocked
          </button>
        {:else}
          <button on:click="{()=>purchase(app)}">{app.cost}</button>
        {/if}
      </td>
    </tr>
    {/each}
  </table>
</Popup>

<style>
  tr{
    border: solid 10px #000;
    outline: thin solid black;
  }
  td{
    padding: 0px 10px;
    text-align: center;
  }
  table{
    border: solid 1px #000;
  }
  tr:first-child{
    border: 3px solid black;
    border-bottom: 6px solid black;
  }
</style>