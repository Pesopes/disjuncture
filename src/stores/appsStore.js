import { writable } from "svelte/store";

import Notepad from "./../lib/DashboardApps/Notepad.svelte"
import Calculator from "./../lib/DashboardApps/Calculator.svelte"
import Paint from "./../lib/DashboardApps/Paint.svelte"
import Settings from "./../lib/DashboardApps/Settings.svelte"
import Store from "./../lib/DashboardApps/Store.svelte"
import Internet from "./../lib/DashboardApps/Internet.svelte"

import noteIcon from "../assets/Icons/note.svg"
import calculatorIcon from "../assets/Icons/calculator.svg"
import paintIcon from "../assets/Icons/paint.svg"
import settingsIcon from "../assets/Icons/settings.svg"
import storeIcon from "../assets/Icons/store.svg"
import internetIcon from "../assets/Icons/internet.svg"

const defualtApps= [
  {id:0,visible:false,isPinned:false,unlocked:true,cost:0,title:"Notepad",component:Notepad,image:noteIcon,description:"This is the basic note taking app."},
  {id:1,visible:false,isPinned:false,unlocked:false,cost:50,title:"Calculator",component:Calculator,image:calculatorIcon,description:"A calculator app of your dreams. It can add and even multiply!"},
  {id:2,visible:false,isPinned:false,unlocked:false,cost:100,title:"Paint",component:Paint,image:paintIcon,description:"Embrace your inner artist with this paint program. Up to 4 breathtaking colours will make your dreams come to life."},
  {id:3,visible:false,isPinned:false,unlocked:true,cost:0,title:"Settings",component:Settings,image:settingsIcon,description:"Customize your Luxen™ experience to your liking."},
  {id:4,visible:false,isPinned:false,unlocked:true,cost:0,title:"Store",component:Store,image:storeIcon,description:"Wait you are using this app right now aren`t you?"},
  {id:5,visible:false,isPinned:false,unlocked:false,cost:10,title:"Internet explurer",component:Internet,image:internetIcon,description:"The only good web browser available."},
]

export const storedApps = JSON.parse(localStorage.getItem("apps"))|| defualtApps

export const apps = writable(storedApps.map((el,_)=>{return {...defualtApps[_],...el}}))

apps.subscribe(value => {
  localStorage.setItem("apps", JSON.stringify(value));
});