<script>
	import { fade , blur , fly , slide , scale , draw} from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import PinIcon from "./../assets/pin.svg"

  const dispatch = createEventDispatcher()

  export let visible = true
  export let title = "New window"
  export let pinnable = true
  export let isPinned = false
  export let backgroundColor = "#abaab8"
  export let centered = false

  function disablePopup(){
    visible=false
    dispatch("exit")
  }

  let popupObj = null
  let toolbarObj = null
  let titleObj = null
  let isHold = false
  let offset = [0,0]


	const handle_keydown = e => {
		if (e.key === 'Escape') {
			disablePopup();
			return;
		}

    //copied code ??? https://svelte.dev/examples/modal
		// if (e.key === 'Tab') {
		// 	// trap focus
		// 	const nodes = popupObj.querySelectorAll('*');
		// 	const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

		// 	let index = tabbable.indexOf(document.activeElement);
		// 	if (index === -1 && e.shiftKey) index = 0;

		// 	index += tabbable.length + (e.shiftKey ? -1 : 1);
		// 	index %= tabbable.length;

		// 	tabbable[index].focus();
		// 	e.preventDefault();
		// }
	};


  function handleDown(e){
    if(e.target !== toolbarObj && e.target !== titleObj) return
    isHold = true
    // console.log(e)
    offset = [e.offsetX,e.offsetY]
  }
  function handleGlobalUp(e){
    isHold = false
  }
  function handleGlobalMove(e){
    if(!isHold) return
    if(isPinned) return
    popupObj.style.transform = `translate(calc(${e.clientX-offset[0]+popupObj.clientWidth}px - 50vw),calc(${e.clientY-offset[1]}px - 50vh))`;
  }
</script>

<svelte:window on:keydown={handle_keydown} on:pointerup="{handleGlobalUp}" on:pointermove="{handleGlobalMove}"/>
{#if visible}
<main >
  <!-- Backgound -->
  <!-- class:on-top={!isPinned} This was on background but there are some weird overlapping issues -->
  <div class:background={!isPinned}  transition:fade={{duration:200}} on:pointerdown={(e)=>{
    if(e.target !== e.currentTarget) return; //only on parent not children
    disablePopup()}
    }>
  <!-- The popup -->
    <div bind:this={popupObj} class:centered={centered} style="--popup-background:{backgroundColor};" class="popup-container" in:fly="{{ y: 50, duration:200}}" out:scale={{duration:150,easing:(x)=>Math.sqrt(Math.pow(x,5))}}>
      <div bind:this={toolbarObj} class="toolbar" on:pointerdown="{handleDown}">
        <div class="close-button" on:click="{disablePopup}"/>
        {#if pinnable}
          <img class="pin-button" class:dark={isPinned} src="{PinIcon}" alt="Pin icon" on:click="{()=>isPinned=!isPinned}" draggable="false"/>
        {/if}
        <div bind:this={titleObj} class="window-title">
          {title}
        </div>
      </div>
      <!-- Content -->
      <div class="popup" >
        <slot class="content">
      
        </slot>
    </div>
  </div>
</main>
{/if}

<style>


  .centered{
    /* If it broke just add !important */
    text-align: center !important;
  }

  .dark{
    filter: brightness(0.7);
  }
  /* .on-top{
    z-index: 420 !important;
  } */
  .background{
    position: fixed;
    top: 0;

    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.507);
  }
  .popup-container{
    resize:both;
    overflow:auto;

    position: fixed;
    display: flex;
    flex-direction: column;


    top: 50%;
    right: 50%;
    transform: translate(50%,-50%);
    text-align: left;
    /* justify-content: center; */
    border-radius: 0.1em;
    background-color: var(--popup-background);
    margin: auto;
    font-family: 'Courier New', Courier, monospace;
    color: #1a1a1a;
    pointer-events: auto; /*for some reason I need this*/
    box-shadow: 0.5px 0.5px 0 0.5px black, inset 1px 1px white,inset -1px -1px #85898d;
    max-width: 70%;
    max-height: 70%;
    min-width: 18%;
    min-height: 25%;
  }
  .toolbar{
    position: absolute;

    height: 25px;
    width: 100%;
    top: 0px;
    background-color: gray;
    z-index: 20;
  }
  .pin-button{
    position: absolute;
    top: 0;
    right: 10%;
    min-width: 40px;
    width: 10%;
    height: 25px;
    transform: scale(0.8);
    background-color: rgb(215, 224, 214);
    border-radius: 5px;
    user-select: none;
  }
  
  .close-button{
    position: absolute;
    top: 0;
    right: 0%;
    width: 10%;
    height: 25px;
    background-color: rgb(158, 18, 18);
  }
  .pin-button:hover,.pin-button:focus,.close-button:focus,.close-button:hover {
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
  div :global(button:active:not([disabled])) {

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