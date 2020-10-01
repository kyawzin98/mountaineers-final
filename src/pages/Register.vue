<template>
  <q-page class="bg-grey-1">
    <WaveBg class="animate__animated animate__fadeInDown absolute absolute-top"/>
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
          <q-form ref="registerForm">
            <q-card-section class="q-pb-lg">
              <q-input v-model="registerData.name" outlined label="User Name">
                <template #prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input v-model="registerData.email" type="email" outlined label="Email" class="q-mt-lg">
                <template #prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                v-model="registerData.password"
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
              <q-input
                v-model="registerData.confirmPassword"
                outlined
                label="Confirm Password"
                class="q-mt-lg"
                :type="showConfirmPassword ? 'text': 'password'"
              >
                <template #prepend>
                  <q-icon name="fingerprint" />
                </template>
                <template #append>
                  <q-icon @click="showConfirmPassword = !showConfirmPassword" :name="showConfirmPassword ? 'visibility' : 'visibility_off'" />
                </template>
              </q-input>
              <q-btn color="primary" label="Register" style="width: 40%" class="block q-py-xs q-mx-auto q-mt-lg" />
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
  name: "Register",
  components: {WaveBg, TopNavBar },
  data: () => ({
    showPassword:false,
    showConfirmPassword:false,
    registerData: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  })
};
</script>

<style scoped>
.login-bg {
  /*background: url("./../../assets/hero_section_bg.svg") no-repeat;*/
  /*background-size: contain;*/
  min-height: 100vh;
}
</style>
