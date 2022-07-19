import { writable } from "svelte/store";
//WHY!!!!
// @ts-ignore
import Notepad from "./../lib/DashboardApps/Notepad.svelte"
// @ts-ignore
import Calculator from "./../lib/DashboardApps/Calculator.svelte"
// @ts-ignore
import Paint from "./../lib/DashboardApps/Paint.svelte"
// @ts-ignore
import Settings from "./../lib/DashboardApps/Settings.svelte"
// @ts-ignore
import Store from "./../lib/DashboardApps/Store.svelte"
// @ts-ignore
import Internet from "./../lib/DashboardApps/Internet.svelte"
// @ts-ignore
import FileExplorer from "./../lib/DashboardApps/FileExplorer.svelte"
// @ts-ignore
import About from "./../lib/DashboardApps/About.svelte"
// @ts-ignore
import Chat from "./../lib/DashboardApps/Chat.svelte"

import noteIcon from "../assets/Icons/note.svg"
import calculatorIcon from "../assets/Icons/calculator.svg"
import paintIcon from "../assets/Icons/paint.svg"
import settingsIcon from "../assets/Icons/settings.svg"
import storeIcon from "../assets/Icons/store.svg"
import internetIcon from "../assets/Icons/internet.svg"
import fileExplorerIcon from "../assets/Icons/folder.svg"
import aboutIcon from "../assets/Icons/about.svg"
import chatIcon from "../assets/Icons/chat.svg"

const fileExplorerDesc = `
Browse through your computer with ease. <br/>
Who knows what you will find in there. <br/>
Additionally comes with a built-in:
<ul style="text-align:left;">
  <li>Sound viewer</li>
  <li>Image viewer</li>
  <li>Code viewer</li>
</ul>
`

const defualtApps= [
  {id:0,visible:false,isPinned:false,unlocked:true,cost:0,title:"Notepad",component:Notepad,image:noteIcon,description:"This is the basic note taking app.",appInfo:{selectedNote:0}},
  {id:1,visible:false,isPinned:false,unlocked:false,cost:50,title:"Calculator",component:Calculator,image:calculatorIcon,description:"A calculator app of your dreams. It can add and even multiply!"},
  {id:2,visible:false,isPinned:false,unlocked:false,cost:100,title:"Paint",component:Paint,image:paintIcon,description:"Embrace your inner artist with this paint program. Up to 4 breathtaking colours will make your dreams come to life."},
  {id:3,visible:false,isPinned:false,unlocked:true,cost:0,title:"Settings",component:Settings,image:settingsIcon,description:"Customize your Luxen™ experience to your liking."},
  {id:4,visible:false,isPinned:false,unlocked:true,cost:0,title:"Store",component:Store,image:storeIcon,description:"Wait you are using this app right now aren`t you?"},
  {id:5,visible:false,isPinned:false,unlocked:false,cost:10,title:"Internet explurer",component:Internet,image:internetIcon,description:"The only good web browser available."},
  {id:6,visible:false,isPinned:false,unlocked:false,cost:200,title:"File explurer",component:FileExplorer,image:fileExplorerIcon,description:fileExplorerDesc},
  {id:7,visible:false,isPinned:false,unlocked:false,cost:0,title:"About",component:About,image:aboutIcon,description:"Get some information about this computer.<br/>Free of charge you just have to install it."},
  {id:8,visible:false,isPinned:false,unlocked:false,cost:10,title:"Chat",component:Chat,image:chatIcon,description:"Chat with other disjunctors!"},
]

export const storedApps = JSON.parse(localStorage.getItem("apps"))|| defualtApps

export const apps = writable(storedApps.map((el,_)=>{return {...defualtApps[_],...el}}))

apps.subscribe(value => {
  localStorage.setItem("apps", JSON.stringify(value));
});