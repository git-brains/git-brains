<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Greet from './components/Greet-component.vue'
import GBUserSetupPage from '@pages/GBUserSetupPage.vue'
import { debug } from 'console'
import getProviders from './api/getProviders'
</script>

<script lang="ts">
export default {
  components: {
    GBUserSetupPage
  } 
  , computed: {
    isLoggedIn() {
      return !!this.$store.getters.activeToken
    }
  }
  , mounted() {
    getProviders().then(
      p => this.$store.commit('initProviders', {providers: p})
    )
  },
}
</script>

<template>
  <div class='container mx-auto flex flex-col h-screen w-screen'>
    <Transition>
      <GBUserSetupPage v-if='!isLoggedIn'/>
    </Transition>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>
