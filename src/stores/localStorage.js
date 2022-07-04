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

export const settingsDefault = {
  gameSettings:{
    rulesCount:3,
    seed:Math.floor(Math.random()*1000000)
  },
  renderSize:150,
  baseNumberSize:0.3,
  displayShadows:true,
  runMouseOver:true,
  scanLines:true,
  crtFilter:true,
}

const storedSettings = JSON.parse(localStorage.getItem("settings"))|| settingsDefault

export const settings = writable(storedSettings);
settings.subscribe(value => {
  localStorage.setItem("settings", JSON.stringify(value));
});