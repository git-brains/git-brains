<script setup lang="ts">
import GreenButton from '../../atoms/buttons/GreenButton.vue'
import RedButton from '../../atoms/buttons/RedButton.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      step: 0
    }
  }

  , methods: {
    // just testing out how the button toggle would feel. ++this.step bears no meaning. 
    nextStep() {
      ++this.step
    }
    , prevStep () {
      if (this.step) {
        --this.step
      }
    }
  }
}
</script>

<template>
  <div class='flex rounded-md bg-white border-white h-full w-full border-2 flex-1'>
    <div class='m-auto h-80 w-9/12 shadow-2xl border-white border-2 container flex flex-col content-between py-4 px-4'> 
      <div class='flex h-full w-full flex flex-row justify-evenly'>
        <div class='round-md border-2 border-gray-200 w-40 h-40'></div>
        <div class='round-md border-2 border-gray-200 w-40 h-40'></div>
      </div>
      <div class='flex justify-between content-center flex-row-reverse'>
        <GreenButton button-text='Proceed' @click='nextStep' />
        <RedButton button-text='Back to Choices' :hidden='!step' @click='prevStep' />
      </div>
    </div>
  </div>
</template>
