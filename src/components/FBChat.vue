<template>
  <div>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <!-- Your Chat Plugin code -->
    <div class="fb-customerchat"
         attribution=setup_tool
         page_id="104289111362872"
         theme_color="#fa3c4c"
         logged_in_greeting="ဘာလဲပြော"
         logged_out_greeting="ဘိုင်ဘိုင်">
    </div>
  </div>
</template>

<script>
export default {
  name: "FBChat"
}
window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v9.0'
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

<style scoped>

</style>
