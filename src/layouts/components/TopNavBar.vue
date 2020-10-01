<template>
  <div>
    <q-toolbar v-if="$q.platform.is.desktop" class="q-py-lg">
      <q-toolbar-title>
        <img
          class="animate__animated animate__bounceIn animate__delay-1s"
          src="~/assets/mountaineers_logo.svg"
          height="40px"
        />
      </q-toolbar-title>
      <q-btn
        :to="{ name: 'landing' }"
        :flat="!checkCurrentRoute('landing')"
        :outline="checkCurrentRoute('landing')"
        label="Home"
        color="white"
        class="q-mx-xs"
      />
      <q-btn
        :to="{ name: 'about' }"
        :flat="!checkCurrentRoute('about')"
        :outline="checkCurrentRoute('about')"
        label="About"
        color="white"
        class="q-mx-xs"
      />
      <q-btn
        :to="{ name: 'event' }"
        :flat="!checkCurrentRoute('event')"
        :outline="checkCurrentRoute('event')"
        label="Events"
        color="white"
        class="q-mx-xs"
      />
      <q-btn
        :to="{ name: 'contact' }"
        :flat="!checkCurrentRoute('contact')"
        :outline="checkCurrentRoute('contact')"
        label="Contact"
        color="white"
        class="q-ml-sm q-mr-xl"
      />
      <q-btn
        :to="{ name: 'login' }"
        outline
        color="white"
        class="q-mr-md"
        label="Sign in"
      />
      <q-btn :to="{ name: 'register' }" color="secondary" label="Sign Up" />
    </q-toolbar>
    <!-- Top Nav Bar -->
    <q-toolbar v-else class="q-py-lg">
      <q-toolbar-title>
        <img
          class="animate__animated animate__bounceIn animate__delay-1s"
          src="~/assets/mountaineers_logo.svg"
          height="20px"
        />
      </q-toolbar-title>
      <q-btn
        flat
        icon="menu"
        color="white"
        @click="mobileNav = true"
      />
    </q-toolbar>

    <q-drawer v-model="mobileNav" side="right" behavior="mobile" bordered>
      <!-- drawer content -->
      <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in menuList">
          <q-item :to="{name:menuItem.to}" :key="index" clickable active-class="text-primary" v-ripple>
            <q-item-section class="text-center">
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>

      </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
const menuList = [
  {
    to: "landing",
    label: "Home",
    separator: false
  },
  {
    to: "about",
    label: "About",
    separator: false
  },
  {
    to: "event",
    label: "Events",
    separator: false
  },
  {
    to: "contact",
    label: "Contact",
    separator: true
  },
  {
    to: "login",
    label: "Login",
    separator: false
  },
  {
    to: "register",
    label: "Sign Up",
    separator: false
  },
];

export default {
  name: "TopNavBar",
  data: () => ({
    mobileNav: false,
    menuList
  }),
  methods:{
    checkCurrentRoute(name){
      return this.$router.currentRoute.name === name
    }
  }
};
</script>

<style scoped></style>
