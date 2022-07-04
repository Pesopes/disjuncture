<script>
	import { fade , blur , fly , slide , scale , draw} from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher()

  export let visible = true
  export let title = "New window"

  function disablePopup(){
    visible=false
    dispatch("exit")
  }
</script>

{#if visible}
<main >
  <div class="background" transition:fade={{duration:200}} on:click={(e)=>{
    if(e.target !== e.currentTarget) return; //only on parent not children
    disablePopup()}
    }>

    <div class="popup-container" in:fly="{{ y: 50 }}" out:scale={{duration:150,easing:(x)=>Math.sqrt(Math.pow(x,5))}}>
      <div class="toolbar">
        <div class="close-button" on:click="{disablePopup}"/>
        <div class="window-title">
          {title}
        </div>
      </div>
      <div class="popup" >
        <slot class="content">
      
        </slot>
    </div>
  </div>
</main>
{/if}
<style>
  .background{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.507);
  }
  .popup-container{
    display: flex;
    flex-direction: column;
    pointer-events: none;
    --popup-background:#abaab8;
    z-index: 2;
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%,-50%);
    text-align: center;
    border-radius: 0.1em;
    background-color: var(--popup-background);
    margin: auto;
    font-family: 'Courier New', Courier, monospace;
    color: #1a1a1a;
    pointer-events: auto; /*for some reason I need this*/
    box-shadow: 0.5px 0.5px 0 0.5px black, inset 1px 1px white,inset -1px -1px #85898d;
    max-width: 70%;
    max-height: 70%;

  }
  .toolbar{
    position: absolute;
    z-index: 1000;
    height: 20px;
    width: 100%;
    top: 0px;
    background-color: gray;

  }
  .close-button{
    position: absolute;
    top: 0;
    right: 0%;
    width: 10%;
    height: 20px;
    background-color: rgb(158, 18, 18);
  }
  .close-button:focus,.close-button:hover {
    cursor: pointer;
  }
  .window-title{
    position: absolute;
    top: 0;
    left: 1%;
    width: 80%;
    height: 20px;
    text-align: left;
    color: aliceblue;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .popup{

    overflow: auto;
    padding: 40px 50px 10px; /*top,sides,bottom*/

  }
  div :global(button) {
    
    user-select: none;
    color: rgb(238, 240, 241);
    font-family: 'Droid Sans Mono', Courier, monospace;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
    border: 3px solid;
    border-image:  linear-gradient(to bottom right,white 0% 50%,black 50% 100%) 1;
    background-color: rgb(143, 142, 142);
    text-align: center;
  }
  div :global(button:active) {

    border-image:  linear-gradient(to bottom right,black 0% 50%,white 50% 100%) 1;

    filter: brightness(0.8);
  }
  /* Disable the arrows */


  div :global(input[type=number]) {
    background-color: var(--popup-background);
    border: 2px solid;
    border-radius: 0px;
    border-image:  linear-gradient(to bottom right,black 0% 50%,white 50% 100%) 1;

  }

</style>