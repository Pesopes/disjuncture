<script>
  import Popup from "./../Popup.svelte"
  import Folder from "./Folders/Folder.svelte"
  import {srcObj} from "./Folders/srcLocations"
	import { notes } from "./../../stores/localStorage"
  import { apps } from "./../../stores/appsStore"
	import { onDestroy } from "svelte";
	import DownloadImage from "./../../assets/download.svg"
	import Prism from "./Folders/PrismJS.svelte"
	
  //Exports
  export let visible = false
  export let title = "New window"
  export let isPinned = false


	// console.log(import("./../Popup.svelte?raw"))
	//assign click function to all files (uses recursion)
	function assignFunction(objs){

		if(objs!==undefined){
			//if file assign and return
			if(objs.files===undefined){
				objs.clickEvent = () => openCode(objs.path)
				return
			}
			//else it is a folder and loop trough its files and call this function
			objs.files.forEach(element => {
				assignFunction(element)
			});
		}
	}
	assignFunction({
		files:srcObj
	})

	const imageExtensions = ["svg","png","jpeg","jpg","gif"]
	const soundExtensions = ["wav","mp3","ogg"]
	const fileExtensionTable = {
		svelte:"javascript",
		js:"javascript",
		ts:"typescript",
		json:"json",
	}
	//TODO: open sound file as sound, image as image ... not as text
	let codeViewers = []
	async function openCode(codePath){
		// const file = await import(codePath+"?raw")
		const githubPath = "https://raw.githubusercontent.com/Pesopes/disjuncture/master/" + codePath;
		const file = await fetch(githubPath)
		const content = await file.blob()

		//if image open image viewer instead
		if(imageExtensions.includes(codePath.slice(codePath.lastIndexOf('.') + 1))){
			openImage(githubPath,codePath.slice(codePath.lastIndexOf('/') + 1))
			return
		}
		//if sound open sound viewer instead
		if(soundExtensions.includes(codePath.slice(codePath.lastIndexOf('.') + 1))){
			openSound(githubPath,codePath.slice(codePath.lastIndexOf('/') + 1))
			return
		}
		codeViewers = [...codeViewers,
			{
				src:content,
				srcPath:githubPath,
				type:"fileType",
				visible:true,
				title:codePath,
				language:fileExtensionTable[codePath.slice(codePath.lastIndexOf('.') + 1)]
		}]
	}

	function openNote(noteDate){
		let cache = $apps
		cache[0].visible=true
		cache[0].isPinned = false
		cache[0].appInfo.selectedNote = $notes.findIndex(el=>el.date === noteDate)

		apps.set(cache)
	}

	
	let imageViewers = []
	function openImage(imageSrc,imageName){
		imageViewers = [...imageViewers,
			{
				source:imageSrc,
				title:imageName,
				visible:true
		}]
	}

	let soundViewers = []
	function openSound(soundSrc,soundName){
		soundViewers = [...soundViewers,
			{
				source:soundSrc,
				title:soundName,
				visible:true
		}]
	}

	let errorMessageVisible = false
	function openError(){
		errorMessageVisible = true
	}

	let root = null
	function refreshRoot(){
			root = [
			{
				name: 'My notes',
				files: $notes.map(el=>{return {name:el.name+".txt",clickEvent:()=>openNote(el.date)}})
			},
			{
				name: 'Src',
				files: srcObj
			},
			{
				name: "System 123",
				files:[
					{
						name:"!Important",
						files: [
							{	name: "100456",
								files:[
									{name:"vsjitsjčinkčong.dll"}
								]	
							},
							{	name: "104251",
								files:[
									{name:"somethingImportant.dll"},
									{name:"pooPoo.dll"},
								]	
							},
							{	name: "633859",
								files:[
									{	name: "633859",
									files:[
										{	name: "20220707",
											files:[
												{	name: "124572",
													files:[
														{name:"SoManyFolders.dll"}
													]	
												},
											]	
										},
										]	
									},
								]	
							},
							{	name: "696541",
								files:[
									{name:"humvibibib.dll"},
									{name:"indondondondond.dll"}
								]	
							},
							{name:"amdtedds.dll"},
							{name:"appDDDS.dll"},
							{name:"aticds64.dll"},
							{name:"DOnoot_opE_N🤑.dll",clickEvent:openError},
							{name:"mscvcp.dll"},
							{name:"NPSM.dll"},
							{name:"nshts.dll"},
							{name:"Svelte.dll"},
							{name:"Setupapi.dll"},
							{name:"Luxen.ApplicationModel.Store.TestingFramework.dll"},
						]
					},
					{
						name: 'Icons',
						files: $apps.map(el=>{return {name:el.image.slice(el.image.lastIndexOf('/') + 1),clickEvent:()=>openImage(el.image,el.image.slice(el.image.lastIndexOf('/') + 1))}})
					},
					{
						name: 'Sounds',
						files: [
							{name:"pop.ogg",clickEvent:()=>openCode("assets/sounds/pop.ogg")}
						]
					}
				]
			},
			{
				name:"Music",
				files: [
					{name:"kytaravec.wav",clickEvent:()=>openCode("assets/sounds/kytaravec.wav")},
					{name:"cool beat.wav",clickEvent:()=>openCode("assets/sounds/cool beat.wav")},
				]
			}
		];
	}
	refreshRoot()

	let unsub = notes.subscribe(()=>refreshRoot())
	onDestroy(unsub)
</script>


<Popup bind:visible bind:isPinned title="{title}">
  <Folder name="Home" files={root} expanded/>
</Popup>

{#each codeViewers as codeViewer}
<Popup bind:visible={codeViewer.visible} title={codeViewer.title}>
	{#await fetch(codeViewer.srcPath)}
		<p>Downloading file...</p>
	{:then file}	
		{#await file.text()}
			<p>Loading file...</p>
		{:then content}
			<Prism language="{codeViewer.language}" code="{content}" header="{codeViewer.title.slice(codeViewer.title.lastIndexOf('/') + 1)}"/>
				<a style="position: absolute;bottom: 0%;left:50%;" href="{window.URL.createObjectURL(codeViewer.src)}" download>
					<img src="{DownloadImage}" alt="Download" width="20"/>
				</a>
		{/await}
	{/await}
	</Popup>
{/each}

{#each imageViewers as imageViewer}
	<Popup bind:visible={imageViewer.visible} title={imageViewer.title}>
		<img src="{imageViewer.source}" alt="Icon for {imageViewer.source}" style="width: 100%;height: 100%;"/>
		<a style="position: absolute;bottom: 0%;left:50%;" href="{imageViewer.source}" download>
			<img src="{DownloadImage}" alt="Download" width="20"/>
		</a>
	</Popup>
{/each}

{#each soundViewers as soundViewer}
	<Popup bind:visible={soundViewer.visible} title={soundViewer.title}>
		<audio controls>
			<source src="{soundViewer.source}" type="audio/ogg">
			Your browser does not support the audio element.
		</audio>
		<a style="position: absolute;bottom: 0%;left:50%;" href="{soundViewer.source}" download>
			<img src="{DownloadImage}" alt="Download" width="20"/>
		</a>
	</Popup>
{/each}

<Popup bind:visible={errorMessageVisible} title="Error" centered={true}>
  <p>A fatal error has occured</p>
	<button on:click={()=>window.close()}>Okay {":)"}</button>
</Popup>
