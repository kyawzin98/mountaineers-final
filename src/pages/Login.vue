<template>
  <q-page class="bg-grey-1">
    <WaveBg
      class="animate__animated animate__fadeInDown absolute absolute-top"
    />
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <!-- Top Nav Bar -->
        <TopNavBar/>
        <!-- Top Nav Bar -->
      </div>
    </div>
    <div class="row q-pa-md justify-center">
      <div class="col-12 col-md-4" style="margin-top: 4rem;">
        <q-card
          class="animate__animated animate__bounceInDown animate__delay-1s"
        >
          <q-card-section class="text-center q-pt-xl">
            <img src="~/assets/mountaineers_logo2.svg" height="40px" />
          </q-card-section>
          <q-form ref="loginForm">
            <q-card-section class="q-pb-lg">
              <q-input v-model="loginData.email" outlined label="Email">
                <template #prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                v-model="loginData.password"
                outlined
                label="Password"
                class="q-mt-lg"
                :type="showPassword ? 'text': 'password'"
              >
                <template #prepend>
                  <q-icon name="fingerprint" />
                </template>
                <template #append>
                  <q-icon @click="showPassword = !showPassword" :name="showPassword ? 'visibility' : 'visibility_off'" />
                </template>
              </q-input>
              <q-btn
                color="accent"
                flat
                label="Forget Password?"
                class="q-my-md"
              />
              <q-btn color="primary" label="Login" style="width: 40%" class="block q-py-xs q-mx-auto" />
              <div class="row flex items-center q-mt-lg justify-center">
                <span class="text-subtitle1">New Here?</span>
                <q-btn
                  :to="{name:'register'}"
                  color="primary"
                  flat
                  rounded
                  label="Sign up"
                  class="q-mx-sm"
                />
              </div>

            </q-card-section>
          </q-form>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import TopNavBar from "./../layouts/components/TopNavBar";
import WaveBg from "../components/Svg/WaveBg";
export default {
  name: "Login",
  components: {WaveBg, TopNavBar },
  data: () => ({
    showPassword:false,
    loginData: {
      name: "",
      email: "",
      password: ""
    }
  })
};
</script>

<style scoped>
.login-bg {
  /*background: url("./../../assets/hero_section_bg.svg") no-repeat;*/
  background-size: contain;
  min-height: 100vh;
}
</style>
