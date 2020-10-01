<template>
  <q-page class="bg-grey-1">
    <WaveBg
      class="absolute absolute-top animate__animated animate__fadeInDown"
    />
    <div class="row justify-center hero-section">
      <div class="col-10">
        <!-- Top Nav Bar -->
        <TopNavBar />
        <!-- Top Nav Bar -->

        <!-- Hero Section -->
        <div class="row">
          <div class="col-12 col-md-5 animate__animated animate__fadeInLeft">
            <h3
              class="text-secondary"
              :style="$q.platform.is.mobile ? 'font-size:1.8rem;' : 'margin-top: 9rem;'"
              style="line-height: 4rem;"
            >
              A Guide To <span class="text-weight-bold">Mountain</span>
              Vacations
            </h3>
            <p style="font-size: 18px;">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              cumque deserunt dolore dolorem dolores dolorum error ex id impedit
              itaque neque nesciunt odit perspiciatis quis quod saepe sit
              tempore, voluptas?
            </p>
            <q-btn
              color="primary"
              class="q-px-md q-py-xs q-mt-md"
              label="get started"
            />
          </div>
          <div
            :class="$q.platform.is.desktop ? 'q-pa-lg' : ''"
            class="col-12 col-md-7 animate__animated animate__fadeInRight animate__delay-1s"
          >
            <q-video
              class="q-mt-xl shadow-3"
              :ratio="4 / 3"
              src="https://www.youtube.com/embed/NhBzhi9jPFs"
            />
          </div>
        </div>
        <!-- Hero Section -->
      </div>
    </div>

    <!-- Feature Section -->
    <div class="row justify-center" :style="$q.platform.is.mobile ? 'margin-top: 3rem;' : ''">
      <div class="col-12 col-md-10">
        <div class="row justify-center">
          <div class="col-10 col-md-3 q-pa-md text-center">
            <q-card class="feature-card">
              <q-img
                basic
                src="~/assets/img/mountains/mountain-1.jpg"
                :ratio="1"
              >
                <div class="full-height full-width feature-card-content">
                  <h5 class="q-my-md q-mt-lg text-uppercase">Expeditions</h5>
                  <p class="q-mt-sm text-subtitle1">
                    Guiding quality expeditions across the globe
                  </p>
                  <q-btn
                    label="Explore"
                    class="feature-card-btn q-mt-lg"
                    color="primary"
                  />
                </div>
              </q-img>
            </q-card>
          </div>
          <div class="col-10 col-md-3 q-pa-md text-center">
            <q-card class="feature-card">
              <q-img
                basic
                src="~/assets/img/mountains/mountain-2.jpg"
                :ratio="1"
              >
                <div class="full-height full-width feature-card-content">
                  <h5 class="q-my-md q-mt-lg text-uppercase">Treks</h5>
                  <p class="q-mt-sm text-subtitle1">
                    Quality logistics, professional staff and good food are just
                    the beginning
                  </p>
                  <q-btn
                    label="Explore"
                    class="feature-card-btn"
                    color="primary"
                  />
                </div>
              </q-img>
            </q-card>
          </div>
          <div class="col-10 col-md-3 q-pa-md text-center">
            <q-card class="feature-card">
              <q-img
                basic
                style="border-radius: 0 2rem 0 2rem;"
                src="~/assets/img/mountains/mountain-3.jpg"
                :ratio="1"
              >
                <div class="full-height full-width feature-card-content">
                  <h5 class="q-my-md q-mt-lg text-uppercase">
                    Climbing Schools
                  </h5>
                  <p class="q-mt-sm text-subtitle1">
                    Keep your mind (& ice axe) sharp
                  </p>
                  <q-btn
                    label="Explore"
                    class="feature-card-btn q-mt-lg"
                    color="primary"
                  />
                </div>
              </q-img>
            </q-card>
          </div>
          <div class="col-10 col-md-3 q-pa-md text-center">
            <q-card class="feature-card">
              <q-img
                basic
                style="border-radius: 0 2rem 0 2rem;"
                src="~/assets/img/mountains/mountain-4.jpg"
                :ratio="1"
              >
                <div class="full-height full-width feature-card-content">
                  <h5 class="q-my-md q-mt-lg text-uppercase">Skiing</h5>
                  <p class="q-mt-sm text-subtitle1">
                    Travel into the world's best mountain terrain with our ski
                    guides
                  </p>
                  <q-space></q-space>
                  <q-btn
                    label="Explore"
                    class="feature-card-btn"
                    color="primary"
                  />
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <!-- Feature Section -->

    <!-- Learn with Pro Tips Section -->
    <div class="row justify-center protips-section">
      <div class="col-12 col-md-10">
        <div class="row" :style="$q.platform.is.desktop ? 'margin-top: 6rem;' : ''">
          <div class="col-12 col-md-6">
            <PeopleSittingWithLaptop class="" />
          </div>
          <div class="col-12 col-md-6 q-pa-lg" :class="$q.platform.is.mobile ? 'text-center' : ''">
            <img src="~/assets/mountaineers_logo2.svg" :height="$q.platform.is.mobile ?' 30px' : ''" />
            <h4 class="text-weight-bold q-mt-sm" :style="$q.platform.is.mobile ? 'font-size: 1.4rem;' : ''">Tips from Professionals</h4>
            <q-list>
              <q-item>
                <q-item-section side>
                  <q-item-label>
                    <q-icon size="sm" name="check_circle" color="primary" />
                  </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle1">
                    <span class="pro-tip-text">Lorem ipsum dolor sit.</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section side>
                  <q-item-label>
                    <q-icon size="sm" name="check_circle" color="primary" />
                  </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle1">
                    <span class="pro-tip-text">Lorem ipsum dolor sit amet.</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section side>
                  <q-item-label>
                    <q-icon size="sm" name="check_circle" color="primary" />
                  </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle1">
                    <span class="pro-tip-text">Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section side>
                  <q-item-label>
                    <q-icon size="sm" name="check_circle" color="primary" />
                  </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle1">
                    <span class="pro-tip-text">Lorem ipsum dolor sit amet, consectetur.</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section side>
                  <q-item-label>
                    <q-icon size="sm" name="check_circle" color="primary" />
                  </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle1 ">
                    <span class="pro-tip-text">Lorem ipsum dolor sit amet adipisicing.</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section side>
                  <q-item-label>
                    <q-icon size="sm" name="check_circle" color="primary" />
                  </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle1">
                    <span class="pro-tip-text">Lorem ipsum dolor sit amet.</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-btn
              color="primary"
              class="q-px-md q-py-xs q-mt-md"
              label="know more"
            />
            <q-btn
              color="primary"
              flat
              rounded
              class="q-px-md q-mt-md q-ml-md"
              label="watch video"
            >
              <q-icon name="play_circle_outline" class="q-ml-md" />
            </q-btn>

          </div>
        </div>
      </div>
    </div>
    <!-- Learn with Pro Tips Section -->

    <!-- Testimonial Section -->
    <div class="row justify-center" style="margin-top: 2rem;">
      <div class="col-12 col-md-6 text-center q-pa-md">
        <q-carousel
          v-model="testimonialSlide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          control-color="primary"
          navigation
          class="rounded-borders bg-transparent shadow-0"
          height="500px"
          :autoplay="true"
          infinite
        >
          <q-carousel-slide :name="1" class="column no-wrap flex-center">
            <div style="margin-bottom: 4rem;">
              <h5 class="text-weight-bold q-my-md">Testimonial</h5>
              <p class="text-subtitle2">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <q-avatar square rounded size="80px" style="margin-top: 2.5rem;">
                <img src="https://api.adorable.io/avatars/285/helo.png" />
              </q-avatar>
              <h6 class="text-weight-bold q-my-sm">John Doe</h6>
              <p class="text-caption text-weight-medium text-primary">
                CEO, KK Donuts
              </p>
              <p
                class="text-subtitle2 q-mx-auto text-blue-9"
                :style="$q.platform.is.desktop ? 'width: 420px' : 'width: 300px'"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, quis!
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap flex-center">
            <div style="margin-bottom: 4rem;">
              <h5 class="text-weight-bold q-my-md">Testimonial</h5>
              <p class="text-subtitle2">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <q-avatar square rounded size="80px" style="margin-top: 2.5rem;">
                <img src=" https://api.adorable.io/avatars/285/adorable.png" />
              </q-avatar>
              <h6 class="text-weight-bold q-my-sm">John Doe</h6>
              <p class="text-caption text-weight-medium text-primary">
                CEO, Hulooo
              </p>
              <p
                class="text-subtitle2 q-mx-auto text-blue-9"
                :style="$q.platform.is.desktop ? 'width: 420px' : 'width: 300px'"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
                quisquam.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap flex-center">
            <div style="margin-bottom: 4rem;">
              <h5 class="text-weight-bold q-my-md">Testimonial</h5>
              <p class="text-subtitle2">
                Lorem ipsum dolor sit amet.
              </p>
              <q-avatar square rounded size="80px" style="margin-top: 2.5rem;">
                <img src="https://api.adorable.io/avatars/285/red.png" />
              </q-avatar>
              <h6 class="text-weight-bold q-my-sm">John Doe</h6>
              <p class="text-caption text-weight-medium text-primary">
                CEO, Dinger
              </p>
              <p
                class="text-subtitle2 q-mx-auto text-blue-9"
                :style="$q.platform.is.desktop ? 'width: 420px' : 'width: 300px'"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <!-- Testimonial Section -->

    <!-- Our Story Section -->
    <div class="row q-mt-md justify-center our-story">
      <div class="col-12 col-md-10">
        <div class="text-center">
          <h5 class="text-weight-bold q-my-md">Our Story</h5>
          <p class="text-subtitle2">
            The Ideology Behind This
          </p>
        </div>
        <div class="row justify-around text-center">
          <div class="col-11 col-md-4">
            <h6 class="text-weight-bold">
              Who are we?
            </h6>
            <p class="text-subtitle2 our-story-text text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium consequuntur deleniti et illo itaque iusto, non
              quidem. Deleniti, dicta, quas!
            </p>
            <p class="text-subtitle2 q-mt-md our-story-text text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur cum dolor exercitationem iure laudantium minima non
              officiis quaerat, totam veniam?
            </p>
          </div>
          <div class="col-11 col-md-4">
            <h6 class="text-weight-bold">
              What’s up with the name?
            </h6>
            <p class="text-subtitle2 our-story-text text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              aperiam aut dolorem, eum explicabo facilis fugiat, minus molestiae
              perspiciatis provident quae quam quia, velit voluptas voluptatem.
              A ab adipisci, animi commodi consequuntur culpa dignissimos
              ducimus ea eaque, earum enim eveniet facere fugiat harum illo
              minima modi molestiae officiis possimus provident quam quidem
              repellendus sed sunt suscipit unde ut voluptate voluptates.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Our Story Section -->

    <!-- Recent Post Section -->
    <div class="row justify-center" style="margin-top: 4rem;">
      <div class="col-11 col-md-10">
        <div class="text-center">
          <h5 class="text-weight-bold q-my-md">Our Recent Post</h5>
          <p class="text-subtitle2">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <q-carousel
          v-model="recentPostSlide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          control-color="primary"
          navigation
          class="rounded-borders bg-transparent shadow-0"
          height="530px"
          :autoplay="true"
          infinite
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div
              class="row fit justify-start items-center q-gutter-md q-col-gutter no-wrap"
            >
              <div class="col-12 col-md">
                <q-img
                  :ratio="4 / 3"
                  class="rounded-borders col-6 full-height"
                  src="mountains/mountain-1.jpg"
                />
                <router-link to="/" class="recent-post-title">
                  <h5 class="text-weight-bold q-my-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h5>
                </router-link>
                <span class="text-caption"
                >By
                  <span class="text-subtitle2 text-weight-bold"
                  >Kyaw Zin Htike</span
                  >
                  25 Sept 2020</span
                >
              </div>
              <div class="col-12 col-md">
                <q-img
                  :ratio="4 / 3"
                  class="rounded-borders col-6 full-height"
                  src="mountains/mountain-2.jpg"
                />
                <router-link to="/" class="recent-post-title">
                  <h5 class="text-weight-bold q-my-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h5>
                </router-link>
                <span class="text-caption"
                >By
                  <span class="text-subtitle2 text-weight-bold"
                  >Kyaw Zin Htike</span
                  >
                  25 Sept 2020</span
                >
              </div>
              <div class="col-12 col-md">
                <q-img
                  :ratio="4 / 3"
                  class="rounded-borders col-6 full-height"
                  src="mountains/mountain-3.jpg"
                />
                <router-link to="/" class="recent-post-title">
                  <h5 class="text-weight-bold q-my-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h5>
                </router-link>
                <span class="text-caption"
                >By
                  <span class="text-subtitle2 text-weight-bold"
                  >Kyaw Zin Htike</span
                  >
                  25 Sept 2020</span
                >
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div
              class="row fit justify-start items-center q-gutter-md q-col-gutter no-wrap"
            >
              <div class="col-12 col-md">
                <q-img
                  :ratio="4 / 3"
                  class="rounded-borders col-6 full-height"
                  src="mountains/mountain-4.jpg"
                />
                <router-link to="/" class="recent-post-title">
                  <h5 class="text-weight-bold q-my-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h5>
                </router-link>
                <span class="text-caption"
                >By
                  <span class="text-subtitle2 text-weight-bold"
                  >Kyaw Zin Htike</span
                  >
                  25 Sept 2020</span
                >
              </div>
              <div class="col-12 col-md">
                <q-img
                  :ratio="4 / 3"
                  class="rounded-borders col-6 full-height"
                  src="mountains/mountain-3.jpg"
                />
                <router-link to="/" class="recent-post-title">
                  <h5 class="text-weight-bold q-my-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h5>
                </router-link>
                <span class="text-caption"
                >By
                  <span class="text-subtitle2 text-weight-bold"
                  >Kyaw Zin Htike</span
                  >
                  25 Sept 2020</span
                >
              </div>
              <div class="col-12 col-md">
                <q-img
                  :ratio="4 / 3"
                  class="rounded-borders col-6 full-height"
                  src="mountains/mountain-1.jpg"
                />
                <router-link to="/" class="recent-post-title">
                  <h5 class="text-weight-bold q-my-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h5>
                </router-link>
                <span class="text-caption"
                >By
                  <span class="text-subtitle2 text-weight-bold"
                  >Kyaw Zin Htike</span
                  >
                  25 Sept 2020</span
                >
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div
              class="row fit justify-start items-center q-gutter-md q-col-gutter no-wrap"
            >
              <div class="col-12 col-md">
                <q-img
                  :ratio="4 / 3"
                  class="rounded-borders col-6 full-height"
                  src="mountains/mountain-2.jpg"
                />
                <router-link to="/" class="recent-post-title">
                  <h5 class="text-weight-bold q-my-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h5>
                </router-link>
                <span class="text-caption"
                >By
                  <span class="text-subtitle2 text-weight-bold"
                  >Kyaw Zin Htike</span
                  >
                  25 Sept 2020</span
                >
              </div>
              <div class="col-12 col-md">
                <q-img
                  :ratio="4 / 3"
                  class="rounded-borders col-6 full-height"
                  src="mountains/mountain-4.jpg"
                />
                <router-link to="/" class="recent-post-title">
                  <h5 class="text-weight-bold q-my-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h5>
                </router-link>
                <span class="text-caption"
                >By<span class="text-subtitle2 text-weight-bold"
                >Kyaw Zin Htike</span
                >25 Sept 2020</span
                >
              </div>
              <div class="col-12 col-md">
                <q-img
                  :ratio="4 / 3"
                  class="rounded-borders col-6 full-height"
                  src="mountains/mountain-3.jpg"
                />
                <router-link to="/" class="recent-post-title">
                  <h5 class="text-weight-bold q-my-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h5>
                </router-link>
                <span class="text-caption">
                  By
                  <span class="text-subtitle2 text-weight-bold">
                    Kyaw Zin Htike </span
                  >25 Sept 2020
                </span>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <!-- Recent Post Section -->

    <!-- New Letter Section -->
    <div class="row justify-center" :style="$q.platform.is.mobile ? 'margin-top:4rem;' : ''">
      <div class="col-11 col-md-10 new-letter-section">
        <div class="row justify-center full-height">
          <div class="col-11 col-md-4" :class="$q.platform.is.desktop ? 'flex items-center' : 'text-center'">
            <h6 class="text-secondary text-weight-bold" :style="$q.platform.is.desktop ? 'width: 80%' : ''">Get Update Protips every newsletter</h6>
          </div>
          <div class="col-11 col-md-4" :class="$q.platform.is.desktop ? 'flex items-center' : ''">
            <q-input v-model="email" class="q-my-auto" outlined color="secondary" label="Enter Your Email">
              <template #append>
                <q-separator vertical class="q-mx-md" color="secondary" size="2px"/>
                <q-btn flat round>
                  <q-icon name="send" color="secondary" size="32px" class="rotate-315 q-mb-sm"/>
                </q-btn>
              </template>
            </q-input>
          </div>
        </div>
        <q-separator class="q-my-md" size="2px"/>
      </div>
    </div>
    <!-- New Letter Section -->

    <!-- Footer Section -->
    <Footer/>
    <!-- Footer Section -->

  </q-page>
</template>

<script>
  import WaveBg from "../components/Svg/WaveBg";
  import TopNavBar from "../layouts/components/TopNavBar";
  import PeopleSittingWithLaptop from "../components/Svg/PeopleSittingWithLaptop";
  import Footer from "../layouts/components/Footer";
  export default {
    name: "Index",
    // eslint-disable-next-line vue/no-unused-components
    components: {Footer, PeopleSittingWithLaptop, TopNavBar, WaveBg },
    data: () => ({
      testimonialSlide: "2",
      recentPostSlide: "1",
      email: ""
    })
  };
</script>

<style scoped>
  .hero-section {
    min-height: 100vh;
  }
  .feature-card {
    border-radius: 0 2rem 0 2rem;
    transition: all 0.4s;
  }
  .feature-card:hover {
    box-shadow: 4px 4px 10px 5px #ebcd0a, -4px -4px 10px #ebcd0a;
  }
  .feature-card .feature-card-content {
    background: rgba(255, 255, 255, 0.7);
    color: #262626;
  }
  .feature-card .feature-card-content:hover {
    background: rgba(162, 176, 43, 0.9);
    color: #fff;
  }
  .feature-card .feature-card-btn {
    background: #262626 !important;
  }
  .feature-card .feature-card-content:hover .feature-card-btn {
    background: #ebcd0a !important;
  }
  .our-story {
    /*background: url("./../assets/OvalBg.svg") no-repeat center;*/
    /*background-size: 100%;*/
    /*height: 100vh;*/
  }

  .our-story .our-story-text {
    line-height: 1.8rem;
  }
  .recent-post-title,
  .my-link {
    text-decoration: none;
    color: #262626;
  }
  .recent-post-title:hover,
  .my-link:hover {
    color: #EBCD0A !important;
  }
  .new-letter-section{
    background: url("./../assets/new_letter_bg.svg") no-repeat;
    background-size: cover;
    min-height: 330px;
    border-radius: 1rem;
  }
  .pro-tip-text{
    line-height: 1.7rem;
  }
</style>
