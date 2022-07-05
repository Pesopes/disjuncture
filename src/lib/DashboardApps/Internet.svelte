<script>
  import Popup from "./../Popup.svelte"
  import LoadingImage from "./../../assets/loading.svg"

  export let visible = false
  export let title = "New window"
  export let isPinned = false

  let showLoading = false
  let showRick = false

  let loadingDotsObj = null
  function startLoadingSequence(){
    showLoading=true
    const sequenceLength = 120 * 1000
    const intervalDelay = 1000

    let iter = 0
    const interval = setInterval(()=>{
      const dot = "."
      loadingDotsObj.innerHTML = dot.repeat(iter) 
      iter++
    },intervalDelay)
    setTimeout(()=>{
      clearInterval(interval)
      showRick = true
      showLoading = false
    },sequenceLength)
  }
</script>

<Popup bind:visible bind:isPinned title="{title}">
  <form on:submit|preventDefault="{startLoadingSequence}">
    <input type="url" placeholder="Search with Bang! or enter address" style="width: 300px;"/>
  </form>
  {#if showLoading}
    <img src="{LoadingImage}" alt="Loading" draggable="false"/>
    <div>
      Loading<span bind:this="{loadingDotsObj}"></span>
    </div>
    
  {:else if showRick}
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  {/if}
</Popup>

<style>
  img{
    animation: spin 2s infinite alternate-reverse ease-in-out;
    user-select: none;
  }
  @keyframes spin{
    0%,25%{
      transform: rotate(0deg);
    }
    75%, 100%{
      transform: rotate(180deg);
    }
  }
</style>