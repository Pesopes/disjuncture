<script>
  import Popup from "./../Popup.svelte"
  import Folder from "./Folders/Folder.svelte"
  import {srcObj} from "./Folders/srcLocations"
	import { notes } from "./../../stores/localStorage"
  import { apps } from "./../../stores/appsStore"
	import { onDestroy } from "svelte";
	import DownloadImage from "./../../assets/download.svg"
	import popSound from "./../../assets/sounds/pop.ogg"
	import kytaravecSound from "./../../assets/sounds/kytaravec.wav"
	import coolBeatSound from "./../../assets/sounds/cool beat.wav"


	
  //Exports
  export let visible = false
  export let title = "New window"
  export let isPinned = false


	// console.log(import("./../Popup.svelte?raw"))
	function assignFunction(objs){

		if(objs!==undefined){
			if(objs.files===undefined){
				objs.clickEvent = () => openCode(objs.path)
				return
			}
			objs.files.forEach(element => {
				assignFunction(element)
			});
		}
	}
	assignFunction({
		name:"test",
		files:srcObj
	})
	function generateSrc(){
	}
	
	//TODO: open sound file as sound, image as image ... not as text
	let codeViewers = []
	async function openCode(codePath){
		// const file = await import(codePath+"?raw")
		console.log(codePath)
		const file = await fetch("https://raw.githubusercontent.com/Pesopes/disjuncture/master/src/"+codePath.slice(8))
		const content = await file.text()
		console.log(content)
		codeViewers = [...codeViewers,
			{
				src:file,
				content:content,
				type:"fileType",
				visible:true,
				title:codePath
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

	//TODO: deno has script make dynamic folder of this source code (very meta)
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
							{name:"pop.ogg",clickEvent:()=>openSound(popSound,"pop.ogg")}
						]
					}
				]
			},
			{
				name:"Music",
				files: [
					{name:"kytaravec.wav",clickEvent:()=>openSound(kytaravecSound,"kytaravec.wav")},
					{name:"cool beat.wav",clickEvent:()=>openSound(coolBeatSound,"cool beat.wav")},
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
		<div>
			{codeViewer.content}
		</div>
		<a style="position: absolute;bottom: 0%;left:50%;" href="{codeViewer.source}" download>
			<img src="{codeViewer.src}" alt="Download" width="20"/>
		</a>
	</Popup>
{/each}

{#each imageViewers as imageViewer}
	<Popup bind:visible={imageViewer.visible} title={imageViewer.title}>
		<img src="{imageViewer.source}" alt="Icon for {imageViewer.source}"/>
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
