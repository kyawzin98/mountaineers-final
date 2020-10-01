<template>
  <q-page class="bg-grey-1">
    <WaveBg
      class="animate__animated animate__fadeInDown login-bg absolute absolute-top"
    />

    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <!-- Top Nav Bar -->
        <TopNavBar/>
        <!-- Top Nav Bar -->
      </div>
    </div>

    <div class="row justify-center q-my-xl animate__animated animate__bounceIn animate__delay-1s">
      <div class="col-11 col-md-8">
        <q-card class="bg-grey-1 shadow-0">
          <q-card-section class="text-center">
            <h4 class="q-my-md text-weight-bold">Contact Us</h4>
            <q-separator size="3px" color="primary" class="q-mx-auto" style="width: 150px;"/>
          </q-card-section>
          <q-card-section style="margin: 3rem 0  3rem 0">
            <div class="row">
              <div class="col-12 col-md-6 q-px-sm">
                <q-input v-model="name" outlined label="Name"/>
                <q-input v-model="email" outlined label="Email" class="q-mt-md"/>
                <q-input v-model="subject" outlined label="Subject" class="q-mt-md"/>
              </div>
              <div class="col-12 col-md-6 q-px-sm">
                <q-input :class="$q.platform.is.mobile ? 'q-mt-md' : ''" v-model="message" outlined label="Message" type="textarea"/>
              </div>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn color="primary" class="q-mx-auto q-px-md q-py-xs" label="Sent Message"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!-- Footer Section -->
    <Footer/>
    <!-- Footer Section -->
  </q-page>
</template>

<script>
  import TopNavBar from "../layouts/components/TopNavBar";
  import Footer from "../layouts/components/Footer";
  import WaveBg from "../components/Svg/WaveBg";
  export default {
    name: "Contact",
    components: {WaveBg, Footer, TopNavBar},
    data:()=>({
      name:"",
      email:"",
      subject:"",
      message:""
    })
  }
</script>

<style scoped>

</style>
