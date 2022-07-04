<script>
  export let scanlinesOn = true
  export let filterOn = true
</script>

<main>
  <div class:scanlines={scanlinesOn} class:filter={filterOn} class="main">
    <slot>

    </slot>
  </div>
        <!-- the SVG filter embedded in the HTML
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
            <feMorphology operator="erode" radius="3 3" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="morphology3"/>
          </filter>
        </svg> -->
</main>

<!-- https://codepen.io/meduzen/pen/zxbwRV -->
<style>
  .main{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .filter{
    filter: blur(0.6px) sepia(80%);
  }


  .scanlines:before, .scanlines:after {
    display: block;
    pointer-events: none;
    content: "";
    position: absolute;
  }
  .scanlines:before {
    width: 100%;
    height: 2px;
    z-index: 2147483649;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0.75;
    -webkit-animation: scanline 6s linear infinite;
            animation: scanline 6s linear infinite;
  }
  .scanlines:after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2147483648;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3) 51%);
    background-size: 100% 4px;
    -webkit-animation: scanlines 1s steps(60) infinite;
            animation: scanlines 1s steps(60) infinite;
  }

  /* ANIMATE UNIQUE SCANLINE */
  @-webkit-keyframes scanline {
    0% {
      transform: translate3d(0, 200000%, 0);
    }
  }
  @keyframes scanline {
    0% {
      transform: translate3d(0, 200000%, 0);
    }
  }
  @-webkit-keyframes scanlines {
    0% {
      background-position: 0 50%;
    }
  }
  @keyframes scanlines {
    0% {
      background-position: 0 50%;
    }
  }
</style>
