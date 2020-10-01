<template>
  <q-card class="my-person-card">
    <q-card-section class="text-center">
      <BubbleBg :color="bubbleBgColor" class="absolute absolute-top bubble-bg"/>
      <div class="my-person-card-spacer"></div>
      <q-avatar size="100px">
        <slot name="avatar">
          <img src="~/assets/avatars/avatar-1.png"/>
        </slot>
      </q-avatar>
      <div>
        <slot name="content">
          <h4 class="q-my-sm">Marry Jane</h4>
          <div class="text-caption">Senior Web Developer</div>
        </slot>
        <div class="row justify-center q-pa-md q-mt-md">
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
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
  import BubbleBg from "../components/Svg/BubbleBg";
  import FacebookIcon from "../components/Svg/SocialIcons/FacebookIcon";
  import TwitterIcon from "../components/Svg/SocialIcons/TwitterIcon";
  import InstagramIcon from "../components/Svg/SocialIcons/InstagramIcon";
  import LinkedInIcon from "../components/Svg/SocialIcons/LinkedInIcon";

  export default {
    name: "PersonCard",
    props:{
      bubbleBgColor:{
        type:String,
        default:"#ff4f4f"
      }
    },
    components:{   LinkedInIcon, InstagramIcon, TwitterIcon, FacebookIcon, BubbleBg,}
  }
</script>

<style scoped>
  .my-person-card{
    transition: all .3s;
  }
  .my-person-card,
  .bubble-bg {
    border-radius: 1rem;
  }
  .my-person-card:hover{
    transform: scale(1.05);
  }
  .my-person-card .my-person-card-spacer {
    min-height: 2rem;
  }
</style>
