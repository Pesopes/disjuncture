<script>
  import { notes } from "./../../stores/localStorage"
  import Popup from "./../Popup.svelte"
  import { apps } from "./../../stores/appsStore"

  //BUG: the laod note popup is not on top

  export let visible = false
  export let isPinned = false
  export let title = "New window"

  let showAllNotes = false

  //There has to be a better way
  //but this is my first svelte project I guess
  function setSelectedNote(num){
    let appCache = $apps
    appCache[0].appInfo.selectedNote = num
    apps.set(appCache)
  }
  
  //Create new note and select it
  function newNote(){
    let newNote = {
      name:"new note ("+$notes.length+")",
      content:"",
      date:new Date()
    }

    //add note
    notes.set([...$notes,newNote])
    //select last note (the new one)
    setSelectedNote($notes.length-1)
  }

  //Delete note based on Date
  function deleteNote(note){
    if($notes.length<=1) return; //dont delete last note

    notes.set($notes.filter(el=>new Date(el.date).getTime() !== new Date(note.date).getTime()))
    
    while($apps[0].appInfo.selectedNote>=$notes.length) setSelectedNote($apps[0].appInfo.selectedNote-1)
    
  }

  //"day/month/year hour:minutes:seconds"
  function formatDate(date){
    date = new Date(date)
    
    //5 -> 05 , 12 -> 12
    function pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    }
    let hour =    pad(date.getHours(),2)
    let minute =  pad(date.getMinutes(),2)
    let second =  pad(date.getSeconds(),2)
    let day =     pad(date.getDate(),2)
    let month =   pad(date.getMonth()+1,2)//btw why the **** is month from 0-11 while date is 1-31
    let year =    date.getFullYear()
    
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`
  }

  //change selected note +1 -> next note
  function changeSelected(offset){
    let newSelect = $apps[0].appInfo.selectedNote+offset
    if(newSelect>=$notes.length || newSelect<0) return

    setSelectedNote(newSelect)
  }
</script>

<!-- Load note popup -->
<div style="z-index: 3;">
  <Popup bind:visible={showAllNotes} title="Load note"> 
      <table class="container">
        <tr class="row">
          <th class="item">Name</th>
          <th class="item">Date</th>
          <!-- <th class="item">Content</th> -->
          <th class="item">Options</th>
        </tr>
        {#each $notes as note,i (new Date(note.date).getTime())}
          <tr class="row" >
            <td class="item" contenteditable="true" bind:innerHTML="{note.name}">{note.name}</td>
            <td class="item">{formatDate(note.date)}</td>
            <!-- <td class="item">{note.content.slice(0,10)}</td> -->
            <td>
              <button class="item" on:click="{()=>{setSelectedNote(i);showAllNotes=false}}">Select</button>
              <button class="item" on:click="{()=>deleteNote(note)}">Delete</button>
            </td>
          </tr>
        {/each}
      </table>
  </Popup>
</div>

<!-- Note popup -->
<Popup bind:visible bind:isPinned title="{title}">
  <button on:click="{newNote}">New note</button>
  <button on:click="{()=>showAllNotes=true}">Load note</button>
  <button on:click="{()=>changeSelected(-1)}">-</button>
  <button on:click="{()=>changeSelected(+1)}">+</button>
  <!-- <input type="number" bind:value="{selectedNote}" max="{$notes.length-1}" min="0" style="width: 50px;"/> -->
  <div class="text-editor" 
    contenteditable="true"
    bind:innerHTML="{$notes[$apps[0].appInfo.selectedNote].content}"
    >
  </div>
</Popup>


<style>
  .text-editor{
    background-color: #dbdae7;
    text-align: left;
    border-radius: 2px;
    text-overflow: clip;
    overflow-wrap: break-word;
    min-height: 100px;
  }
  .text-editor:focus{
    filter: brightness(1.1);
    outline: none;
  }
  .row{
    border: solid 10px #000;
    outline: thin solid black;
  }
  .item{
    padding: 0px 10px;
    text-align: center;
  }
  .container{
    border: solid 1px #000;
  }
  .row:first-child{
    border: 3px solid black;
    border-bottom: 6px solid black;
  }
</style>