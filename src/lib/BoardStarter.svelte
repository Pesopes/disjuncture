<script>
  import { scale } from "svelte/transition"
  import NumberInput from "./Util/NumberInput.svelte";
  import { createEventDispatcher } from 'svelte';
  import { score, settings, usedSeeds } from "./../stores/localStorage"

  const dispatch = createEventDispatcher()
  function newGame(){
    if($score < cost) return

    // if its not already there add the previous seed to used seeds
    if(!$usedSeeds.includes($settings.gameSettings.seed))
      $usedSeeds = [...$usedSeeds,$settings.gameSettings.seed]

    $score = $score - cost
    dispatch("newGame",{
      seed:newSeed,
      ruleCount:newRuleCount
    })
  } 

  let newRuleCount = 1
  let newSeed = 0

  let cost = 0
  $: {
      //I don't even know
      cost = Math.log(newRuleCount) * 3 + 25 * (newRuleCount -1)
      if(newSeed !== 0){
        cost += 100
      }
      if($usedSeeds.includes(newSeed)){
        cost = 0
      }
      cost = Math.floor(cost)
    }

</script>

<h1>New board</h1>
<NumberInput label="Rules:" bind:value={newRuleCount} max={100} min={1}/><br>
<NumberInput label="Seed:" bind:value={newSeed} max={1000000} min={-1000000}/><br>
<div>
  Cost:<span style="color: {$score < cost ? "red" : "green"};">{cost}</span>
  {#if $usedSeeds.includes(newSeed)}
  <div in:scale>
    <p>Seed already done. You will not recieve any score.</p>
    <p>You have also used these seeds: {$usedSeeds.join(", ")}</p>
  </div>
  {/if}
</div>

<button on:click="{newGame}" disabled={$score < cost}>New game</button>
