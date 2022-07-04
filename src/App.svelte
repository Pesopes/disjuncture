<script>
  import Board from "./lib/Board.svelte";
  import CrtFilter from "./lib/CrtFilter.svelte"
  import Dashboard from "./lib/Dashboard.svelte"
  import Favicon from "./assets/windows.svg"
  //import { mulberry32} from "./lib/mulberry"

  let boardSeed = Math.floor(Math.random()*1000000)//mulberry32(Math.floor(Date.now()/1000/60/60/24))
  let numOfRules = 3
</script>

<svelte:head>
  <link rel="icon" href={Favicon} />
</svelte:head>
<main>
  <CrtFilter>
    <Board/>  
    <Dashboard/>
  </CrtFilter>
</main>

<style>
  :global(body){
    /* background-color: #1b1b1b; */
    /* background-color: #1a1815; */
    background-color: #0b0b20;
  }
</style>