<template>
  <svg
    viewBox="0 0 300 116"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>bubble-bg</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <path
        d="M304.001287,0 L304.00367,91.6815478 C256.366175,107.459563 205.431094,116 152.501287,116 C99.2013412,116 47.9241174,107.339698 -9.23705556e-14,91.3494791 L0.00128692347,0 L304.001287,0 Z"
        id="path-1"
      ></path>
    </defs>
    <g
      id="Design"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Artboard" transform="translate(-446.000000, -72.000000)">
        <g id="Group-3" transform="translate(446.000000, 72.000000)">
          <g id="bubble-bg">
            <mask id="mask-2" fill="white">
              <use xlink:href="#path-1"></use>
            </mask>
            <use
              id="Combined-Shape"
              :fill="color"
              opacity="0.402646019"
              xlink:href="#path-1"
            ></use>
            <circle
              id="Oval"
              fill-opacity="0.5"
              :fill="color"
              mask="url(#mask-2)"
              cx="57"
              cy="94"
              r="32"
            ></circle>
            <circle
              id="Oval-Copy-5"
              fill-opacity="0.5"
              :fill="color"
              mask="url(#mask-2)"
              cx="97"
              cy="27"
              r="15"
            ></circle>
            <circle
              id="Oval-Copy-6"
              fill-opacity="0.5"
              :fill="color"
              mask="url(#mask-2)"
              cx="220"
              cy="0"
              r="42"
            ></circle>
            <circle
              id="Oval-Copy-7"
              fill-opacity="0.5"
              :fill="color"
              mask="url(#mask-2)"
              cx="298"
              cy="84"
              r="42"
            ></circle>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "BubbleBg",
  props:{
    color:{
      type:String,
      default:"#ff4f4f"
    }
  }
};
</script>

<style scoped></style>
