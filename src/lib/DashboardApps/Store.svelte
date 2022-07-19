<script>
  import Popup from "./../Popup.svelte"
  import { score } from "../../stores/localStorage"
  import { apps } from "./../../stores/appsStore"
  import DownArrow from "./../../assets/arrow-down.svg"
	import { slide, fade } from 'svelte/transition';


  //TODO: you can see if you installed the app before you click the dropdown and when the dropdown appears the information fades away
  export let visible = false
  export let title = "New window"
  export let isPinned = false
  
  const internalApps = $apps.map(el=>{return{
    id:el.id,
    dropdown:false,
    purchased:false,
    installing:false,
    installProgress:0
  }})
  
  function purchase(app){
    if(app.cost > $score) return

    score.set($score-app.cost)
    internalApps[app.id].purchased = true
  }
  function install(e,app){
    internalApps[app.id].installing = true
    const installTime = Math.floor(Math.random()*7000)+1000
    let iter = 0
    const updateInterval = 150
    const progressInterval = setInterval(()=>{
      iter += updateInterval
      internalApps[app.id].installProgress = iter/installTime
      
    },updateInterval)
    setTimeout(()=>{
      const cachedApps = $apps
      cachedApps[app.id].unlocked = true
      apps.set(cachedApps)
      clearInterval(progressInterval)
    },installTime)
  }

  function formatPrice(papp){
    if(papp.unlocked){
      return "Installed"
    }else if(papp.cost <= 0){
      return "Free"
    }else{
      return "Price: "+papp.cost
    }
  }

  let searchQuery = ""
  let onlyNotInstalled = false
</script>

<Popup bind:visible bind:isPinned title="{title}" backgroundColor=" #e9f2f2">
  <!-- <input type="number" bind:value="{$score}"/> -->
  <label>
    Search:
    <input type="text" bind:value="{searchQuery}"/>
  </label>
  <br/>
  <label>
    Only not installed:
    <input type="checkbox" bind:checked="{onlyNotInstalled}"/>
  </label>
  {#each $apps.filter(el=>{
    if(onlyNotInstalled){
      return  el.title.toLowerCase().includes(searchQuery.toLowerCase())&&!el.unlocked
    }else{
      return el.title.toLowerCase().includes(searchQuery.toLowerCase())
    }
  }).sort((a,b)=>a.title.localeCompare(b.title)) as app (app.id)}
    <div style="position: static;">

      <div class="app-container" on:click="{()=>internalApps[app.id].dropdown=!internalApps[app.id].dropdown}">
        <img class="app-icon" src="{app.image}" alt="icon for {app.title}" draggable="false"/>
        <span class="app-title">{app.title}</span>
        <div class="app-arrow" >
          <img class:upside-down={internalApps[app.id].dropdown} draggable="false" src="{DownArrow}" alt="icon for {app.title}"/>
        </div>
        {#if !internalApps[app.id].dropdown}
        <div transition:fade={{duration:300}}>
          <span class="app-price">{formatPrice(app)}</span>
          <span class="app-description">{@html app.description.slice(0,23)+"..."}</span>
        </div>
        {/if}
      </div>
      {#if internalApps[app.id].dropdown}
        <div class="app-dropdown" transition:slide>
          <div style="margin-bottom: 10px;">{@html app.description}</div>
          {#if app.unlocked}
            <button disabled style="cursor: not-allowed;">
                Unlocked
            </button>
          {:else if !internalApps[app.id].purchased}
            <button on:click="{()=>purchase(app)}">{formatPrice(app)}</button>
          {:else if internalApps[app.id].installing}
            <progress value={internalApps[app.id].installProgress}></progress>
          {:else}
            <button on:click="{(e)=>{install(e,app)}}">Install</button><br/>
          {/if}
        </div>  
      {/if}
    </div>
    
  {/each}
  <!-- </table> -->
</Popup>

<style>
  .upside-down{
    transform: rotate(180deg);
  }
  .app-container{
    position: relative;
    height: 100px;
    width: 400px;
    border: 2px solid black;
    border-radius: 20px;
    background-color:  #f0f0f0 ;
    text-align: left;
    margin-top: 20px;
    scroll-behavior: smooth;
    z-index: 11;
    transition: filter 0.1s;
  }
  .app-container:hover{
    filter: brightness(0.9);
  }
  .app-container:active{
    filter: brightness(0.7);
  }
  .app-dropdown{
    position: relative;
    width: 400px;
    text-align: center;
    border: 2px solid black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-top: 50px;
    padding-bottom: 10px;
    transform: translateY(-40px);
    margin-bottom: -40px;
    background-color:   #3b4042 ;
    color: white;
    /* left: -0.5%; */
    z-index: 10;

    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .app-dropdown button{
    border: 0px;
    border-radius: 5px;
    width: 50%;
  }
  .app-icon{
    position: absolute;
    
    top: 10px;
    left: 10px;
    height: 70%;
    padding: 5px;
    background-color: #6370aa;
    border-radius: 10px;
    user-select: none;
  }
  .app-price{
    position: absolute;
    left: calc(74px + 25px);
    top: 40px;

    user-select: none;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
  }
  .app-description{
    position: absolute;
    left: calc(74px + 25px);
    top: 60px;

    user-select: none;
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 400;
  }
  .app-title{
    position: absolute;
    left: calc(74px + 25px);
    top: 10px;

    user-select: none;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
  }
  .app-arrow{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 40px;
    user-select: none;
  }
  .app-arrow>img{
    height: 90%;
    transition: transform 0.5s;
  }
  .app-arrow:hover{
    background-color: rgba(0, 0, 0, 0.158);
    border-radius: 5px;
    cursor: pointer;
  }

</style>