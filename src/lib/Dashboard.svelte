<script>
  import Notepad from "./DashboardApps/Notepad.svelte"
  import Calculator from "./DashboardApps/Calculator.svelte"
  import Paint from "./DashboardApps/Paint.svelte"
  import Settings from "./DashboardApps/Settings.svelte"
  import Store from "./DashboardApps/Store.svelte"

  import noteIcon from "../assets/Icons/note.svg"
  import calculatorIcon from "../assets/Icons/calculator.svg"
  import paintIcon from "../assets/Icons/paint.svg"
  import settingsIcon from "../assets/Icons/settings.svg"
  import storeIcon from "../assets/Icons/store.svg"

  let apps = [
    {id:0,visible:false,unlocked:true,title:"Notepad",component:Notepad,image:noteIcon},
    {id:1,visible:false,unlocked:true,title:"Calculator",component:Calculator,image:calculatorIcon},
    {id:2,visible:false,unlocked:true,title:"Paint",component:Paint,image:paintIcon},
    {id:3,visible:false,unlocked:true,title:"Settings",component:Settings,image:settingsIcon},
    {id:4,visible:false,unlocked:true,title:"Store",component:Store,image:storeIcon},
  ]


</script>

<div class="board" >
  {#each apps as {id,visible,unlocked,title,component,image} (id)} 
      <!-- <p on:click="{()=>visible=true}">{title} </p> -->
      {#if unlocked}
      <div class="app-item"  on:click="{()=>visible=true}">
        <img draggable="false"class="app-item-image" src={image} alt="icon for {title}" class:upside-bop-class="{!visible}"class:bop-class="{visible}" />
      </div>
      <svelte:component this="{component}" bind:visible={visible} title={title}/>
      {/if}
  {/each}
</div>

<style>
  .board{
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    bottom: 0%;
    width: 100%;
    height: 5%;
    background-color: rgb(255, 213, 200);
    
    text-align: center;
    box-shadow: 0.5px 0.5px 0 0.5px black, inset 1px 1px white,inset -1px -1px #85898d;
  }
  .app-item{
    display: flex;
    text-align: center;
    cursor: pointer;
    justify-content: center;
    padding: 6px 5px;
    margin: 3px 0px;
    width: 36px;
    transition: background-color 0.2s;
    border-radius: 5px;

  }
  .app-item:hover{
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.164);
  }
  .app-item-image{
    transition: transform 0.1s;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .app-item-image:active{
    transform: scale(0.7);
  }
  .bop-class{
    animation: bop 0.5s;
    animation-iteration-count: 1;
  }
  .upside-bop-class{
    animation: upside-bop 0.5s;
    animation-iteration-count: 1;
  }
  @keyframes bop{
    0%{
      transform: translateY(0);
    }
    40%, 60%{
      transform: translateY(-4px);
    }
    90%{
      transform: translateY(2px);
    }
    100%{
      transform: translateY(0);
    }
  }
  @keyframes upside-bop{
    0%{
      transform: translateY(0);
    }
    40%, 60%{
      transform: translateY(4px);
    }
    90%{
      transform: translateY(-2px);
    }
    100%{
      transform: translateY(0);
    }
  }
</style>