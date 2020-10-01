<template>
  <div class="fullscreen bg-secondary text-white text-center q-pa-md flex flex-center">
    <div>
      <div>
        <Illustration404 color="#EBCD0A" height="400px"/>
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="GO HOME"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import Illustration404 from "./../components/Svg/Illustration404";
export default {
  name: 'Error404',
  components: {Illustration404}
}
</script>
