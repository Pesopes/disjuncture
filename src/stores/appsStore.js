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

export const apps = writable([
  {id:0,visible:false,isPinned:false,unlocked:true,cost:0,title:"Notepad",component:Notepad,image:noteIcon},
  {id:1,visible:false,isPinned:false,unlocked:false,cost:50,title:"Calculator",component:Calculator,image:calculatorIcon},
  {id:2,visible:false,isPinned:false,unlocked:false,cost:100,title:"Paint",component:Paint,image:paintIcon},
  {id:3,visible:false,isPinned:false,unlocked:true,cost:0,title:"Settings",component:Settings,image:settingsIcon},
  {id:4,visible:false,isPinned:false,unlocked:true,cost:0,title:"Store",component:Store,image:storeIcon},
  {id:5,visible:false,isPinned:false,unlocked:false,cost:10,title:"Internet explurer",component:Internet,image:internetIcon},
])