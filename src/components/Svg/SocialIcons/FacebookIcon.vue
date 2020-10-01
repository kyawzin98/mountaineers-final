<template>
  <svg
    viewBox="0 0 26 26"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Design"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Artboard"
        transform="translate(-489.000000, -335.000000)"
        fill-rule="nonzero"
      >
        <g id="Group-3" transform="translate(446.000000, 72.000000)">
          <g
            id="brandico-facebook-rect"
            transform="translate(43.000000, 263.000000)"
          >
            <g id="Icon" :fill="color">
              <path
                d="M0,4.56485 L0,20.435175 C0,22.9639 2.036125,25.00005 4.56485,25.00005 L13.166425,25.00005 L13.166425,15.226575 L10.58205,15.226575 L10.58205,11.707825 L13.166425,11.707825 L13.166425,8.701575 C13.166425,6.3397 14.6934,4.1711 18.21095,4.1711 C19.63515,4.1711 20.6883,4.307825 20.6883,4.307825 L20.605475,7.593775 C20.605475,7.593775 19.5314,7.583625 18.359375,7.583625 C17.0909,7.583625 16.8875,8.168075 16.8875,9.138325 L16.8875,11.70785 L20.70625,11.70785 L20.53985,15.2266 L16.8875,15.2266 L16.8875,25.00005 L20.43515,25.00005 C22.963875,25.00005 25,22.963925 25,20.4352 L25,4.564875 C25,2.03615 22.963875,0 20.43515,0 L4.564825,0 C2.036125,0 0,2.036125 0,4.56485 Z"
                id="IconPath"
              ></path>
            </g>
            <rect id="ViewBox" x="0" y="0" width="25" height="25"></rect>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "FacebookIcon",
  props:{
    color:{
      type:String,
      default:"#000000"
    }
  }
};
</script>

<style scoped>
  svg , #Icon{
    transition: all .2s;
  }
  svg:hover #Icon path{
    fill: #EBCD0A;
  }
</style>
