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

    <!-- Content -->
    <div class="row justify-center q-pa-md" :style="$q.platform.is.desktop ? 'margin-top: 4rem;' : ''">
      <div class="col-12 col-md-10">
        <q-card class="transparent shadow-0">
          <div class="row">
            <div class="col-12 col-md-6 animate__animated animate__fadeInLeft">
              <h2 :style="$q.platform.is.mobile ? 'font-size:2rem;' : ''">Example Title</h2>
              <div class="text-subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                reprehenderit, voluptas. Amet consequuntur dolorum ducimus
                explicabo fugit ipsa laboriosam minima optio qui, quod sed sint
                tempore vel, voluptatibus voluptatum. Maxime?
              </div>
              <div class="text-subtitle1 q-mt-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                architecto dolores eligendi exercitationem nam officia, sequi.
                Blanditiis cum eligendi excepturi, facilis, labore laudantium
                modi molestiae quisquam ratione veniam vitae voluptatibus.
              </div>
            </div>
            <div class="col-12 col-md-6 text-center animate__animated animate__bounceIn animate__delay-1s">
              <AboutUsIllustration :height="$q.platform.is.desktop ?' 500px' : '300px'"/>
            </div>
          </div>
        </q-card>
        <h3 class="text-center q-mt-lg q-mb-sm" :style="$q.platform.is.mobile ? 'font-size:1.7rem;' : ''">Our Teams</h3>
        <q-separator size="4px" :style="$q.platform.is.mobile ? 'width:170px': 'width: 300px'" class="q-mb-xl q-mx-auto" color="primary"/>
        <div class="row justify-center">
          <div class="col-11 col-md-3 q-pa-sm">
            <PersonCard/>
          </div>
          <div class="col-11 col-md-3 q-pa-sm">
            <PersonCard bubble-bg-color="#777777">
              <template #avatar>
                <img src="~/assets/avatars/avatar-2.png"/>
              </template>
              <template #content>
                <h4 class="q-my-sm">John Doe</h4>
                <div class="text-caption">Senior Web Designer</div>
              </template>
            </PersonCard>
          </div>
          <div class="col-11 col-md-3 q-pa-sm">
            <PersonCard bubble-bg-color="#21BA45">
              <template #avatar>
                <img src="~/assets/avatars/avatar-3.png"/>
              </template>
              <template #content>
                <h4 class="q-my-sm">Mr Jackie</h4>
                <div class="text-caption">CEO & Founder</div>
              </template>
            </PersonCard>
          </div>
          <div class="col-11 col-md-3 q-pa-sm">
            <PersonCard bubble-bg-color="#474bff">
              <template #avatar>
                <img src="~/assets/avatars/avatar-4.png"/>
              </template>
              <template #content>
                <h4 class="q-my-sm">Marry Smith</h4>
                <div class="text-caption">Project Manager</div>
              </template>
            </PersonCard>
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->

    <!-- Footer Section -->
    <Footer/>
    <!-- Footer Section -->
  </q-page>
</template>

<script>
  import TopNavBar from "../layouts/components/TopNavBar";
  import Footer from "../layouts/components/Footer";
  import AboutUsIllustration from "../components/Svg/AboutUsIllustration";
  import PersonCard from "../components/PersonCard";
  import WaveBg from "../components/Svg/WaveBg";

  export default {
    name: "About",
    components: {WaveBg, PersonCard, AboutUsIllustration, Footer, TopNavBar}
  };
</script>

<style scoped>

</style>
