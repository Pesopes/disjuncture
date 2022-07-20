<script>
  //Input that clamps the value to the max and min
  export let value
  export let max = null
  export let min = null
  export let label = ""
  export let readonly = false

  let thisInput

  function handleInput(e){
    //force number
    if(isNaN(parseInt(value))){
      value = min | 0
      return
    }
    
    if (max === null || min === null) return
    //clamps value    
    if (thisInput.value > max) {
      value = max
    }
    if (thisInput.value < min) {
      value = min
    }
  }

</script>

<label>
  {label}
  <input type="number" bind:value="{value}" bind:this="{thisInput}" on:change="{handleInput}" max={max} {min} {readonly}>
</label>