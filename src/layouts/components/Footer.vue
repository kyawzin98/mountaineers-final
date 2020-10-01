<template>
  <div class="row justify-center footer-section">
    <div class="col-12 col-md-10 ">
      <q-list class="">
        <q-item class="row">
          <q-item-section :class="$q.platform.is.desktop ? 'col-4' : ''" top>
            <q-item-label>
              <img src="~/assets/mountaineers_logo2.svg" height="40px" class="q-my-md" />
            </q-item-label>
            <q-item-label>
              <p class="text-subtitle2" style="line-height: 1.6rem;width: 270px;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio hic, illo maxime nostrum obcaecati quibusdam!
              </p>
            </q-item-label>
            <q-item-label>
              <div class="row justify-center q-pa-md" :class="$q.platform.is.mobile ? 'text-center' : ''">
                <div class="col">
                  <router-link to="#">
                    <q-icon name="" size="26px">
                      <FacebookIcon color="#262626"/>
                    </q-icon>
                  </router-link>
                </div>
                <div class="col">
                  <q-icon name="" size="26px">
                    <TwitterIcon color="#262626"/>
                  </q-icon>
                </div>
                <div class="col">
                  <q-icon name="" size="26px">
                    <InstagramIcon color="#262626"/>
                  </q-icon>
                </div>
                <div class="col">
                  <q-icon name="" size="26px">
                    <LinkedInIcon color="#262626"/>
                  </q-icon>
                </div>
              </div>
            </q-item-label>
          </q-item-section>
          <q-item-section top class="desktop-only">
            <q-item-label class="text-h6">
              Quick Links
            </q-item-label>
            <q-item-label class="q-pt-lg">
              <router-link to="/" class="my-link">About Us</router-link>
            </q-item-label>
            <q-item-label class="q-pt-md">
              <router-link to="/" class="my-link">Blog</router-link>
            </q-item-label>
            <q-item-label class="q-pt-md">
              <router-link to="/" class="my-link">Content</router-link>
            </q-item-label>
            <q-item-label class="q-pt-md">
              <router-link to="/" class="my-link">FAQ</router-link>
            </q-item-label>
          </q-item-section>
          <q-item-section top class="desktop-only">
            <q-item-label class="text-h6">
              Pages
            </q-item-label>
            <q-item-label class="q-pt-lg">
              <router-link to="/" class="my-link">Disclaimer</router-link>
            </q-item-label>
            <q-item-label class="q-pt-md">
              <router-link to="/" class="my-link">Financing</router-link>
            </q-item-label>
            <q-item-label class="q-pt-md">
              <router-link to="/" class="my-link">Privacy Policy</router-link>
            </q-item-label>
            <q-item-label class="q-pt-md">
              <router-link to="/" class="my-link">Terms of Service</router-link>
            </q-item-label>
          </q-item-section>
          <q-item-section top side class="desktop-only">
            <q-item-label class="text-h6">
              Legal Stuff
            </q-item-label>
            <q-item-label class="q-pt-lg">
              <router-link to="/" class="my-link">Disclaimer</router-link>
            </q-item-label>
            <q-item-label class="q-pt-md">
              <router-link to="/" class="my-link">Financing</router-link>
            </q-item-label>
            <q-item-label class="q-pt-md">
              <router-link to="/" class="my-link">Privacy Policy</router-link>
            </q-item-label>
            <q-item-label class="q-pt-md">
              <router-link to="/" class="my-link">Terms of Service</router-link>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator class="q-mb-md q-mt-lg" size="2px"/>
      <div class="text-center text-caption q-mb-md">Made with love By <span class="text-primary text-weight-bold">KyawZin</span></div>
    </div>
  </div>
</template>

<script>
  import FacebookIcon from "../../components/Svg/SocialIcons/FacebookIcon";
  import TwitterIcon from "../../components/Svg/SocialIcons/TwitterIcon";
  import InstagramIcon from "../../components/Svg/SocialIcons/InstagramIcon";
  import LinkedInIcon from "../../components/Svg/SocialIcons/LinkedInIcon";
  export default {
    name: "Footer",
    components: {LinkedInIcon, InstagramIcon, TwitterIcon, FacebookIcon}
  }
</script>

<style scoped>
  .footer-section{
    margin-top: 4.6rem !important;
  }
  .my-link {
    text-decoration: none;
    color: #262626;
  }
  .my-link:hover {
    color: #ff4f4f !important;
  }
</style>
