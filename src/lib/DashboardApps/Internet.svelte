<script>
  import Popup from "./../Popup.svelte"
  import LoadingImage from "./../../assets/loading.svg"

  export let visible = false
  export let title = "New window"
  export let isPinned = false

</script>

<Popup bind:visible bind:isPinned title="{title}">
  <img src="{LoadingImage}" alt="Loading"/>
  <span>Loading</span>
</Popup>

<style>
  img{
    animation: spin 2s infinite alternate-reverse ease-in-out;
  }
  @keyframes spin{
    0%,25%{
      transform: rotate(0deg);
    }
    75%, 100%{
      transform: rotate(180deg);
    }
  }
</style>