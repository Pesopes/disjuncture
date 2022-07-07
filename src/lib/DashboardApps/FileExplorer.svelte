<script>
  import Popup from "./../Popup.svelte"
  import Folder from "./Folders/Folder.svelte"
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
