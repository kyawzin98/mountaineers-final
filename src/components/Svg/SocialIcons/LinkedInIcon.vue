<template>
  <svg
    viewBox="0 0 26 26"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>ant-design:linkedin-filled</title>
    <desc>Created with Sketch.</desc>
    <g
      id="Design"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Artboard"
        transform="translate(-679.000000, -334.000000)"
        fill-rule="nonzero"
      >
        <g id="Group-3" transform="translate(446.000000, 72.000000)">
          <g
            id="ant-design:linkedin-filled"
            transform="translate(230.000000, 259.000000)"
          >
            <g id="Icon" :fill="color">
              <path
                d="M27.5,3.5 L4.5,3.5 C3.946875,3.5 3.5,3.946875 3.5,4.5 L3.5,27.5 C3.5,28.053125 3.946875,28.5 4.5,28.5 L27.5,28.5 C28.053125,28.5 28.5,28.053125 28.5,27.5 L28.5,4.5 C28.5,3.946875 28.053125,3.5 27.5,3.5 Z M10.915625,24.803125 L7.20625,24.803125 L7.20625,12.871875 L10.915625,12.871875 L10.915625,24.803125 Z M9.0625,11.240625 C7.87508779,11.240625 6.9125,10.2780372 6.9125,9.090625 C6.9125,7.90321279 7.87508779,6.940625 9.0625,6.940625 C10.2499122,6.940625 11.2125,7.90321279 11.2125,9.090625 C11.209375,10.278125 10.246875,11.240625 9.0625,11.240625 L9.0625,11.240625 Z M24.803125,24.803125 L21.096875,24.803125 L21.096875,19 C21.096875,17.615625 21.071875,15.8375 19.16875,15.8375 C17.240625,15.8375 16.94375,17.34375 16.94375,18.9 L16.94375,24.803125 L13.240625,24.803125 L13.240625,12.871875 L16.796875,12.871875 L16.796875,14.503125 L16.846875,14.503125 C17.340625,13.565625 18.55,12.575 20.35625,12.575 C24.1125,12.575 24.803125,15.046875 24.803125,18.259375 L24.803125,24.803125 L24.803125,24.803125 Z"
                id="Icon-Shape"
              ></path>
            </g>
            <rect id="ViewBox" x="0" y="0" width="32" height="32"></rect>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "LinkedInIcon",
  props: {
    color: {
      type: String,
      default: "#000000"
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
