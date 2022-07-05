import { writable } from "svelte/store";

// Notes
const storedNotes = JSON.parse(localStorage.getItem("notes")) || [{
  name:"First note",
  content:"You can see all your notes by click load note or you can cycle through them using the + and - buttons",
  date:new Date('February 18, 2022 03:24:34')
},
{
  name:"Second note",
  content:"The rules of the game like to change",
  date:new Date('February 18, 2022 03:25:10')
},
{
  name:"Third note",
  content:"You can move this window anywhere and then pin it with the little pin icon.<br/><br/>Maybe write the rules of the game here but you know do whatever you want as long as I get paid",
  date:new Date('February 18, 2022 03:26:16')
}
];
export const notes = writable(storedNotes);
notes.subscribe(value => {
    localStorage.setItem("notes", JSON.stringify(value));
});

// Score
const storedScore = JSON.parse(localStorage.getItem("score")) || 0
export const score = writable(storedScore);
score.subscribe(value => {
    localStorage.setItem("score", JSON.stringify(value));
});

// Settings
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
