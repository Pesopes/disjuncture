<script>
  //import popSound from "../assets/pop.ogg"
  import { onDestroy } from 'svelte';
  import { getRuleFunctions } from "./Rules"
  import { mulberry32 } from "./mulberry"
  import { onMount } from "svelte";
  import { settings } from "../stores/localStorage"

  let GRID_SIZE = 18;
  $: seed = $settings.gameSettings.seed
  $: rulesCount = $settings.gameSettings.rulesCount
  let board
  let score = 0
  let numOfSolved = 0
  let solvable = 0
  //count how many squares are valid for some seed
  function countSolvable(newSeed){
    let customBoard = [...Array(GRID_SIZE)].map((_,i) =>
      [...Array(GRID_SIZE)].map((_,j) =>
          Math.floor(mulberry32(newSeed+i+j*newSeed*mulberry32(i+j*i)*1000)*100))
        );
    let retSolvable = 0
    customBoard.map(arr=>{
      arr.forEach(el => {
        if(checkRule(el,getRuleFunctions(newSeed,rulesCount)))
        {
          retSolvable++
        }
      });
    })
    return retSolvable
  }
  function init(firstInit=false){
    board = [...Array(GRID_SIZE)].map((_,i) =>
      [...Array(GRID_SIZE)].map((_,j) =>
        {return{
          text:Math.floor(mulberry32(seed+i+j*seed*mulberry32(i+j*i)*1000)*100),
          selected:false,
          used:false,
          scale:1,
          dropshadow: "none"
        }})
        );
    score = 0
    numOfSolved = 0
    
    solvable = countSolvable(seed)
    
    
    if(solvable==0){
      console.warn ("Board not solvable")
    }else{
      console.log("Created board\nSolvable squares: %c"+solvable,"color:green;")
    }

    if(!firstInit){
      handleGlobalMove({pageX:99999,pageY:99999})
    }
  }
  //All squares will be small at start
  onMount(()=>{
    init(true)
    handleGlobalMove({pageX:99999,pageY:99999})
  })
  $: solvedPercent = Math.round(numOfSolved / solvable *100 )

  // update board when settings change (BUG: changes even from settings that dont affect the board like visual stuff)
  const settingsUnsubscribe = settings.subscribe(()=>init(false))
  onDestroy(settingsUnsubscribe)

  // BUG?:because prime is so good it always chooses it
  function generateGoodGame(solveMin){
    let limit = 5000
    while(limit-- > 0){
      let newSeed = Math.floor(Math.random()*10000)
      let newSolvable = countSolvable(newSeed)
      if(newSolvable>solveMin){
        seed = newSeed
        init(false)
        return true
      }
    }
    return false
  }

  //checks all rules for a single element (only one 1 rule has to be true)
  function checkRule(number,rules){
    let ret = false
    rules.forEach((fun)=>{
      //console.log(fun.toString())
      const funResult = fun(number)
      if (funResult){
        ret = true
      }
    })
    return ret
  }

  //prints all rule functions to console
  function debugPrintRules(){
    getRuleFunctions(seed,rulesCount).forEach((fun)=>{
      console.log(fun.toString())
    })
  }

  let firstPos = null
  let secondPos = null

  // in bounds of GRID_SIZE (true/false)
  function inBounds(x,y){
    if (x > GRID_SIZE || x<0 || y>GRID_SIZE || y<0) return false
    return true
  }
  //if between firstpos and second pos
  function checkSelect(x,y){
    if (firstPos === null || secondPos === null) return false
    if (!inBounds(x,y)) return false
    let xCheck = x>=Math.min(firstPos[0],secondPos[0])&&x<=Math.max(firstPos[0],secondPos[0])
    let yCheck = y>=Math.min(firstPos[1],secondPos[1])&&y<=Math.max(firstPos[1],secondPos[1])
    return xCheck && yCheck
  }

  // sets firstPos and selects current square
  function handleDown(x,y,e){
    firstPos = [x,y]
    board[x][y].selected = true
  }

  //selects from firstPos to second pos
  function handleOver(x,y,e){
    if (firstPos===null) return;

    secondPos = [x,y]
    //unselect
    board.forEach((arr)=>{arr.forEach(el=>el.selected=false)})
    //loop trough everything and select
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if(board[i][j].selected === false && checkSelect(i,j)){
          board[i][j].selected = true
        }
      }
    }

  }
  // Checking rules and stuff
  function handleUp(x,y,e){
    // first get all squares to check by reference
    let checkingArray = []
    if (firstPos === null) {
      return
    }else
    if (secondPos === null){
      checkingArray.push(board[firstPos[0]][firstPos[1]])
    }else{
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if(checkSelect(i,j)){
            checkingArray.push(board[i][j])
          }
        }
      }
    }
    //only if all have at least 1 rule continue
    let isValid = true
    checkingArray.forEach(el=>{
      if(!checkRule(el.text,getRuleFunctions(seed,rulesCount))){
        isValid=false
      }
    })
    //only assign points if all satisfy at least 1 rule
    if(isValid){      
      let notUsed = 0
      checkingArray.forEach(el=>{
        if(checkRule(el.text,getRuleFunctions(seed,rulesCount))){
          if (!el.used) {
            el.used= true
            notUsed++
          }
  
        }
      })
      //give points and count solved
      score += notUsed * notUsed
      numOfSolved += notUsed
    }
    
    //update used
    if(e!==null)
      handleGlobalMove(e)

    //reset vars
    board[firstPos[0]][firstPos[1]].selected = false
    firstPos = null
    secondPos = null
    
    //unselect all
    board.forEach((arr)=>{arr.forEach(el=>el.selected=false)})
  }

  // Cool number effects

  let boardDiv = null // bound to div that contains squares
  
  $: renderSize = $settings.renderSize
  $: baseNumberSize = $settings.baseNumberSize
  $: displayShadows = $settings.displayShadows
  $: runMouseOver = $settings.runMouseOver
  function handleGlobalMove(e){
    // pre calculate so its faster
    if(!runMouseOver){
      board = board.map(arr=>arr.map(el=> {
        let newObj= el
        newObj.scale=1
        newObj.dropshadow = "none"
        return newObj
      }))
      return
    }
    const px = e.pageX
    const py = e.pageY
    const offsetLeft = boardDiv.offsetLeft
    const offsetTop = boardDiv.offsetTop
    const squareWidthCenter = boardDiv.childNodes[0].childNodes[0].clientWidth/4
    const squareHeightCenter = boardDiv.childNodes[0].childNodes[0].clientHeight/4
    const sumLeftOffset = offsetLeft+squareWidthCenter-px
    const sumTopOffset = offsetTop+squareHeightCenter-py
    for (let x = 0; x < GRID_SIZE; x++) {
      const dy = x*40 + sumTopOffset;
      for (let y = 0; y < GRID_SIZE; y++) {
        const dx = y*40 + sumLeftOffset;
        const dist = Math.hypot(dx,dy);

        if(dist > renderSize){
          board[x][y].scale = baseNumberSize
          //this is continue makes this A LOT faster
          continue
        }
        let size = Math.pow(6,dist * -0.004 + 0.5) ;
        if (board[x][y].used) {
          size /= 2
        }
        // is this faster ??
        if(displayShadows){
          const dropShadowCache = board[x][y].dropshadow
          if(dist<100){
            board[x][y].dropshadow = `${dx/3}px ${dy/3}px ${size}px rgba(255, 255, 255, ${size-1.3}))`
          }else if(dropShadowCache !== "0px 0px"){
            board[x][y].dropshadow = `0px 0px`
          }
        }
        board[x][y].scale = (Math.round(size * 100) / 100).toFixed(1);
      }
    }
  }

  function handleGotPointerCapture(e){
    e.target.releasePointerCapture(e.pointerId)
  }
</script>


<!-- <svelte:window on:mousemove="{(e)=>handleGlobalMove(e)}"/> -->
<main >
  <div class="main"on:pointermove="{(e)=>handleGlobalMove(e)}">
    <p class="tcenter" style="font-size: 1rem;" on:click="{debugPrintRules}">Rules:{rulesCount}</p>
    <p class="tcenter">{solvedPercent}% complete; score: {score}</p>
    
    <div class="center">
      <div  bind:this="{boardDiv}">
        {#each board as row, i}
        <div class="row">
            {#each row as cell, k}
            <div class:selected={cell.selected}
                on:pointerdown="{(e)=>handleDown(i,k,e)}"
                on:pointerover="{(e)=>handleOver(i,k,e)}"
                on:pointerup="{(e)=>handleUp(i,k,e)}"               
                on:gotpointercapture="{handleGotPointerCapture}"
                >
              <div
                class="square empty"
                class:used={cell.used}
                style="transform-origin:top center;transform:scale({cell.scale});filter:drop-shadow({cell.dropshadow};"
                >
                {cell.text}
              </div>
            </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>


<style>
    @keyframes boop {
		0% {
			transform: rotate(0deg);

		}
		20% {
			transform: rotate(calc(var(--final-rotate)*-1));
		}
		40% {
			transform: rotate(var(--final-rotate));
		}
		60% {
			transform: rotate(calc(var(--final-rotate)*-1/2));
		}
		80% {
			transform: rotate(calc(var(--final-rotate)/2)) ;
		}
		90% {
			transform: rotate(calc(var(--final-rotate)*-1/4));
		}
		95% {
			transform: rotate(calc(var(--final-rotate)/5));
		}
		100% {
			transform: rotate(0deg);
		}
	}
  .main{
    line-height: 0.4;
  }
  .square {
    pointer-events: none;
    --square-size: 40px;
    width: var(--square-size);
    height: var(--square-size);
    user-select: none;
    color:#fff;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-variant-numeric: oldstyle-nums;
    font-weight: bold;
  }  

  .empty {
    background-color: transparent;
  }
  .selected{
    --final-rotate: 18deg;
    animation: boop infinite 0.4s;
  }
  .used{
    color: grey;
    transition: color 0.2s;
  }
  .row {
    display: flex;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    touch-action: none;
  }
  .tcenter {
    text-align: center;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;
  }
</style>