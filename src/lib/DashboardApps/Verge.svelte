<script>
  import Popup from "./../Popup.svelte"

  //Exports
  export let visible = false
  export let title = "New window"
  export let isPinned = false

  let selectedTab = 0
  let uid= 0
  let tabs = [
    {id:0,name:"test",favicon:"https://stackoverflow.com/favicon.ico",url:"https://disjuncture.web.app/"}
  ]
  function newTab(){
    tabs = [...tabs,{id:++uid,name:"test",favicon:"https://stackoverflow.com/favicon.ico",url:"https://disjuncture.web.app/"}]
    console.log(tabs)
  }
  function closeTab(id){
    if (selectedTab === id) {
      selectedTab = tabs[0].id
    }
    tabs = tabs.filter(tab=>tab.id!==id)

  }
</script>

<Popup bind:visible bind:isPinned title="{title}">
  <button on:click="{newTab}">NEW</button><br>
  {#each tabs as tab}
    <div>
      <button on:click="{()=>selectedTab=tab.id}">SELECT</button>
      <button on:click="{()=>closeTab(tab.id)}">CLOSE</button>
    </div>
  {/each}
  <br>
  {#each tabs as tab}
    {#if selectedTab === tab.id}
      <input type="url" bind:value="{tab.url}"><br>
      <iframe src="{tab.url}" title="{tab.name}"></iframe>
    {/if}
  {/each}
</Popup>

<style>
  iframe{
    width: 1280px;
    height: 720px;
  }
</style>