import { writable } from "svelte/store";

const storedNotes = JSON.parse(localStorage.getItem("notes")) || [{
  name:"First note",
  content:"So empty...",
  date:new Date()
}];
export const notes = writable(storedNotes);
notes.subscribe(value => {
    localStorage.setItem("notes", JSON.stringify(value));
});

const storedSettings = JSON.parse(localStorage.getItem("settings"))|| {
  gameSettings:{
    rulesCount:3,
    seed:123321
  },
  renderSize:150,
  baseNumberSize:0.3,
  displayShadows:true,
  runMouseOver:true,
}

export const settings = writable(storedSettings);
settings.subscribe(value => {
  localStorage.setItem("settings", JSON.stringify(value));
});