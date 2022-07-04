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

</script>

<div style="z-index: 3;">
  <Popup bind:visible={showAllNotes} title="Load note"> 
    <div class="container">
      <div class="row">
        <div class="item">Name</div>
        <div class="item">Date</div>
        <div class="item">Content</div>
      </div>
      {#each $notes as note,i}
        <div class="row" on:click="{()=>selectedNote=i}">
          <div class="item">{note.name}</div>
          <div class="item">{note.date}</div>
          <div class="item">{note.content.slice(0,10)}</div>
        </div>
      {/each}
    </div>
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
  }
  .text-editor:focus{
    filter: brightness(1.1);
    outline: none;
  }
  .row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .item{
    padding: 0px 10px;
    text-align: center;
    border: solid 1px #000;
  }
  .container{
    display: flex;
    flex-direction: column;
    border: solid 1px #000;
  }
</style>