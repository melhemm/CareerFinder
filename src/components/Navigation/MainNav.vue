<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
   <div class="w-full h-16 bg-white">
    <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1">
      <router-link :to="{name: 'Home'}" class="flex items-center h-full text-xl font-bold">Job Finder</router-link>
      <nav class="h-full ml-12">
        <ul class="flex h-full p-0 m-0 list-none font-semibold">
          <li class="h-full first:ml-0">
            <router-link to="/teams" class="flex items-center h-full py-2.5">Teams</router-link>
          </li>
          <li class="h-full ml-9">
            <router-link to="/" class="flex items-center h-full py-2.5">Locations</router-link>
          </li>
          <li class="h-full ml-9">
            <router-link to="/" class="flex items-center h-full py-2.5">How we hire</router-link>
          </li>
          <li class="h-full ml-9">
            <router-link :to="{name: 'JobResults'}" class="flex items-center h-full py-2.5">Jobs</router-link>
          </li>
        </ul>
      </nav>
      <div class="flex items-center h-full ml-auto">
        <ProfileImage v-if="isLoggedIn" data-test="profile-image"/>
        <ActionButton v-else text="Sign in" data-test="login-button" @click="LOGIN_USER()"/>
      </div>
    </div>
    <Subnav v-if="isLoggedIn" data-test='subnav' />
   </div>
  </header>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import Subnav from '@/components/Navigation/Subnav.vue';
import { LOGIN_USER } from '@/store/constants.js';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    ActionButton,
    ProfileImage,
    Subnav
  },
  name: 'MainNav',
  computed: {
    ...mapState(["isLoggedIn"]),
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn
      };
    },
  },
  methods: {
    ...mapMutations([LOGIN_USER])
  },
}
</script>
