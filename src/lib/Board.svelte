<script>
  //import popSound from "../assets/pop.ogg"
  import { onDestroy } from 'svelte';
  import { getRuleFunctions } from "./Rules"
  import { mulberry32 } from "./mulberry"
  import { onMount } from "svelte";
  import { settings, score, usedSeeds } from "../stores/localStorage"
  import skipImg from "./../assets/skip.svg"
  import Popup from './Popup.svelte';
  import BoardStarter from './BoardStarter.svelte';

  let GRID_SIZE = 18;
 
  let boardStarterVisible = false

  $: rulesCount = $settings.gameSettings.rulesCount
  let board
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
          x:j,
          y:i,
          text:Math.floor(mulberry32($settings.gameSettings.seed+i+j*$settings.gameSettings.seed*mulberry32(i+j*i)*1000)*100),
          selected:false,
          used:false,
          scale:1,
          dropshadow: "none"
        }})
        );
    numOfSolved = 0
    
    solvable = countSolvable($settings.gameSettings.seed)
    
    // if(solvable==0){
    //   console.warn ("Board not solvable")
    // }else{
      console.log(`Created board with seed: ${$settings.gameSettings.seed}\nSolvable squares: %c${solvable}`,solvable===0?"color:red;":"color:green;")
    // }

    if(!firstInit){
      //All squares will be small
      handleGlobalMove({pageX:99999,pageY:99999})
    }
  }
  onMount(()=>{
    init(true)
    //All squares will be small at start
    handleGlobalMove({pageX:99999,pageY:99999})
  })
  $: solvedPercent = Math.round(numOfSolved / solvable *100 )
  
  // update board when settings change (FIXME: changes even from settings that dont affect the board like visual stuff)
  // FIXME: I have to create some board through init before onMount but then it warns me that I have 0 solvable
  const settingsUnsubscribe = settings.subscribe(()=>init(false))
  onDestroy(settingsUnsubscribe)

  function newGame(e){
    // console.log(e.detail)
    $settings.gameSettings.rulesCount = e.detail.ruleCount
    if(e.detail.seed !== 0){
      $settings.gameSettings.seed = e.detail.seed 
    }else{
      $settings.gameSettings.seed = Math.floor(Math.random() * 100000)
    }
    boardStarterVisible=false 
    init(false);
  }

  // BUG?:because prime is so good it always chooses it
  function generateGoodGame(solveMin){
    let limit = 5000
    while(limit-- > 0){
      let newSeed = Math.floor(Math.random()*10000)
      let newSolvable = countSolvable(newSeed)
      if(newSolvable>solveMin){
        const settingsCache = $settings
        settingsCache.gameSettings.seed=newSeed
        settings.set(settingsCache)
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
    getRuleFunctions($settings.gameSettings.seed,rulesCount).forEach((fun)=>{
      console.log(fun.toString())
    })
  }

  // let firstPos = null
  // let secondPos = null

  //holds all selected BOARD squares 
  let posArray = []
  let isHold = false
  //used for iterating over
  const neighbourOffset = [
    [-1,0],
    [1,0],
    [0,1],
    [0,-1],
  ]
  // sets isHold true and pushes the first square
  function handleDown(x,y,e){
    isHold = true
    posArray.push(board[x][y])
    board[x][y].selected = true
  }

  //add square if it is neighbour and not already in the array
  function handleOver(x,y,e){
    if(posArray.length <=0 || !isHold) return

    // if(!isNeighbour(board[x][y],posArray[posArray.length-1])) return
    let isNeighbourArray = neighbourOffset.map(offset=>{
      try{
        return posArray.includes(board[x+offset[0]][y+offset[1]])
      }catch{
        //FIXME:??maybe I should actually check if it is in the array
        return false
      }
    })
    let atLeastOneNeighbour = false
    isNeighbourArray.forEach(isNeighbour=>{if(isNeighbour){atLeastOneNeighbour=true}})
    if(atLeastOneNeighbour && !posArray.includes(board[x][y])){
      posArray.push(board[x][y])
      board[x][y].selected = true
    }
    // console.log(posArray)
  }
  // Checking rules and stuff
  function handleUp(x,y,e){
    //only if all have at least 1 rule continue
    let isValid = true
    posArray.forEach(el=>{
      if(!checkRule(el.text,getRuleFunctions($settings.gameSettings.seed,rulesCount))){
        isValid=false
      }
    })
    //only assign points if all satisfy at least 1 rule
    if(isValid){      
      let notUsed = 0
      posArray.forEach(el=>{
        if(checkRule(el.text,getRuleFunctions($settings.gameSettings.seed,rulesCount))){
          if (!el.used) {
            el.used= true
            notUsed++
          }
  
        }
      })
      //give points and count solved
      if(!$usedSeeds.includes($settings.gameSettings.seed)){
        score.set($score+notUsed * notUsed)
      }
      numOfSolved += notUsed
    }
    
    //update used
    if(e!==null)
      handleGlobalMove(e)

    if(numOfSolved>=solvable){
      const settingsCache = $settings
      console.log("RANDOM???")
      settingsCache.gameSettings.seed = Math.random() * 1000000
      settings.set(settingsCache)
    }

    //unselect all
    board.forEach((arr)=>{arr.forEach(el=>el.selected=false)})
  }

  function handleGlobalUp(e){
    // firstPos = null
    isHold = false
    posArray = []
    //unselect all
    board.forEach((arr)=>{arr.forEach(el=>el.selected=false)})
    
    // FIXME:clicking for example in a popup triggers this => not good 
    // handleGlobalMove(e)
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


<svelte:window on:pointerup="{handleGlobalUp}"/>

<div class="main"on:pointermove="{(e)=>handleGlobalMove(e)}">
  <p class="tcenter" style="font-size: 1rem;" on:click="{debugPrintRules}">Rules:{rulesCount}</p>
  <p class="tcenter">{solvedPercent}% complete; score: {$score}</p>
  <div class="tcenter" >
    <img src="{skipImg}" alt="New Board" on:click="{()=>boardStarterVisible=true}">
  </div>

  <div class="center">
    <div  bind:this="{boardDiv}">
      {#each board as row, i}
      <div class="row">
          {#each row as cell, k}
          <div class:dark={cell.selected}>
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
                >{cell.text}</div>
            </div>
          </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<Popup bind:visible={boardStarterVisible} title="New board" pinnable="{false}" centered>
  <BoardStarter on:newGame={newGame}></BoardStarter>
</Popup>

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

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-10deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-10deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(10deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

  .main{
    line-height: 0.4;
    height: 95%;
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
    animation: shake infinite 0.4s;
  }
  .dark{
    filter: brightness(0.5);
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