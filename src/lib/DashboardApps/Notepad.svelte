<script>
  import { notes } from "./../../stores/localStorage"
  import Popup from "./../Popup.svelte"
  export let visible = false
  export let title = "New window"

  let showAllNotes = false

  let selectedNote = 0
  function newNote(){
    let newNote = {
      name:"new note",
      content:"",
      date:new Date()
    }

    notes.set([...$notes,newNote])
    selectedNote = $notes.length-1
  }

  function deleteNote(note){
    console.log($notes)
    notes.set($notes.filter(el=>new Date(el.date).getTime() !== new Date(note.date).getTime()))
    while(selectedNote>=$notes.length) selectedNote--
  }

  function formatDate(date){
    date = new Date(date)
    function pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    }
    //5 -> 05 , 12 -> 12
    let hour =    pad(date.getHours(),2)
    let minute =  pad(date.getMinutes(),2)
    let second =  pad(date.getSeconds(),2)
    let day =     pad(date.getDate(),2)
    let month =   pad(date.getMonth()+1,2)//btw why the **** is month from 0-11 while date is 1-31
    let year =    date.getFullYear()
    
    return `${hour}:${minute}:${second} ${day}/${month}/${year}`
  }
</script>

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
              <button class="item" on:click="{()=>{selectedNote=i;showAllNotes=false}}">Select</button>
              <button class="item" on:click="{()=>deleteNote(note)}">Delete</button>
            </td>
          </tr>
        {/each}
      </table>
  </Popup>
</div>

<Popup bind:visible={visible} title="{title}">
  <button on:click="{newNote}">New note</button>
  <button on:click="{()=>showAllNotes=true}">Load note</button>
  <input type="number" bind:value="{selectedNote}" max="{$notes.length-1}" min="0"/>
  <div class="text-editor" 
    contenteditable="true"
    bind:innerHTML="{$notes[selectedNote].content}"
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