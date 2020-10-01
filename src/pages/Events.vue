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

  <!--Events -->
  <div class="row justify-center">
    <div class="col-12 col-md-10"  :style="$q.platform.is.mobile ? '' : 'margin-top: 3rem;'">
      <q-card class="bg-transparent shadow-0">
        <h4 class="text-center q-mb-sm">Mountain Climbing Events</h4>
        <q-separator class="q-mt-md q-mb-xl q-mx-auto shadow-4" style="width: 40%" size="2px" color="secondary"/>
        <div class="row justify-center q-mt-lg">
          <div class="col-12 col-md-3 q-pa-sm " v-for="(event,index) in events" :key="index">
            <q-card class="event-card bg-white">
              <q-img @click="viewEventDetail(event)" class="event-mountain" :ratio="4/3" basic :src="event.mountainImage">
                <div class="full-height full-width mountain-bg"></div>
              </q-img>
              <q-card-section class="text-center event-info">
                <q-avatar class="event-avatar" size="80px">
                  <q-img :src="event.guidePhoto"></q-img>
                </q-avatar>
                <h4 class="">{{event.mountainName}}</h4>
                <p class="price">${{event.price}}</p>
                <q-btn rounded color="secondary" label="Join Now"/>
              </q-card-section>
              <q-icon class="detail" color="grey-1" name="info" size="32px">
                <q-tooltip>Click Image to View Detail</q-tooltip>
              </q-icon>
            </q-card>
          </div>
        </div>
      </q-card>
    </div>
  </div>
  <!--Events -->

  <!--Event Dialog -->
  <q-dialog v-model="eventDetail" transition-show="rotate" transition-hide="rotate">
    <q-card style="width: 700px;margin-top: -4rem;">
      <q-img class="event-detail-mountain" :ratio="4/3" basic :src="eventData.mountainImage">
      </q-img>
      <q-card-section class="bg-white text-secondary">
        <q-list>
          <q-item class="desktop-only">
            <q-btn class="absolute absolute-top-right" flat round @click="eventDetail = false">
              <q-icon color="negative" name="close"></q-icon>
            </q-btn>
            <q-item-section class="col-3">
              <q-avatar rounded class="event-detail-avatar" size="100px">
                <q-img basic :src="eventData.guidePhoto"/>
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <h5 class="q-my-sm text-weight-bold">{{eventData.mountainName}}</h5>
              <p><span class="text-weight-bold text-primary">{{eventData.guideName}}</span> will be the guide for this event</p>
              <p class="text-weight-bold">Event will be start at <span class="text-primary">{{eventData.startAt}}</span>, join the event with ${{eventData.price}}</p>
            </q-item-section>
          </q-item>
          <q-item class="mobile-only">
            <q-item-section>
              <q-btn class="absolute absolute-top-right" flat round @click="eventDetail = false">
                <q-icon color="negative" name="close"></q-icon>
              </q-btn>
              <q-avatar rounded class="event-detail-avatar" size="100px">
                <q-img basic :src="eventData.guidePhoto"/>
              </q-avatar>
              <h5 class="q-my-sm text-weight-bold">{{eventData.mountainName}}</h5>
              <p><span class="text-weight-bold text-primary">{{eventData.guideName}}</span> will be the guide for this event</p>
              <p class="text-weight-bold">Event will be start at <span class="text-primary">{{eventData.startAt}}</span>, join the event with ${{eventData.price}}</p>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
  <!--Event Dialog -->


  <!-- Footer Section -->
  <Footer/>
  <!-- Footer Section -->
</q-page>
</template>

<script>
  import TopNavBar from "../layouts/components/TopNavBar";
  import WaveBg from "../components/Svg/WaveBg";
  import Footer from "../layouts/components/Footer";
  export default {
    name: "Events",
    components: {Footer, WaveBg, TopNavBar},
    data:()=>({
      eventDetail:false,
      eventData:"",
      events:[
        {
          mountainImage:"img/mountains/mountain-1.jpg",
          mountainName:"Mountain One",
          guidePhoto:"img/avatars/avatar-1.png",
          guideName:"Julia",
          price:"500",
          startAt:"Sep-10-2020"
        },
        {
          mountainImage:"img/mountains/mountain-2.jpg",
          mountainName:"Mountain Two",
          guidePhoto:"img/avatars/avatar-2.png",
          guideName:"John",
          price:"700",
          startAt:"Sep-10-2020"
        },
        {
          mountainImage:"img/mountains/mountain-3.jpg",
          mountainName:"Mountain Three",
          guidePhoto:"img/avatars/avatar-3.png",
          guideName:"Mr Jackkie",
          price:"300",
          startAt:"Sep-14-2020"
        },
        {
          mountainImage:"img/mountains/mountain-4.jpg",
          mountainName:"Mountain Four",
          guidePhoto:"img/avatars/avatar-4.png",
          guideName:"Daisy",
          price:"500",
          startAt:"Sep-20-2020"
        },
        {
          mountainImage:"img/mountains/mountain-4.jpg",
          mountainName:"Mountain Four",
          guidePhoto:"img/avatars/avatar-4.png",
          guideName:"Daisy",
          price:"500",
          startAt:"Sep-20-2020"
        },
        {
          mountainImage:"img/mountains/mountain-3.jpg",
          mountainName:"Mountain Three",
          guidePhoto:"img/avatars/avatar-3.png",
          guideName:"Mr Jackkie",
          price:"300",
          startAt:"Sep-14-2020"
        },
        {
          mountainImage:"img/mountains/mountain-2.jpg",
          mountainName:"Mountain Two",
          guidePhoto:"img/avatars/avatar-2.png",
          guideName:"John",
          price:"700",
          startAt:"Sep-10-2020"
        },
        {
          mountainImage:"img/mountains/mountain-1.jpg",
          mountainName:"Mountain One",
          guidePhoto:"img/avatars/avatar-1.png",
          guideName:"Julia",
          price:"500",
          startAt:"Sep-10-2020"
        },

      ]
    }),
    methods:{
      viewEventDetail(event){
        this.eventDetail = true;
        this.eventData = event;
      }
    }
  }
</script>

<style scoped>
  .event-card .event-info .event-avatar{
    margin-top: -4rem;
  }
  .event-card .event-mountain{
    cursor: pointer;
  }

  .event-card .event-info{
    background: white;
    width: 90%;
    border-radius: 3rem 3rem 0 0;
    margin: -3rem auto auto auto;
  }
  .event-card .event-mountain .mountain-bg{
    background: rgba(0, 0, 0, 0.4);
  }
  .event-card .event-mountain .mountain-bg:hover{
    background: rgba(255, 255, 255, 0.0);
  }

  .event-card .event-info h4{
    font-size: 1.2rem;
    margin: .8rem 0;
  }
  .event-card .event-info .price{
    font-size: 1.5rem;
    color: #777777;
  }

  .event-card .detail{
    position: absolute;
    top: 1%;
    left: 1%;
  }
  .event-card .detail:hover{
    background-color: #EBCD0A;
    border-radius: 50%;
  }

</style>
