<script setup lang="ts">
import GreenButton from '../../atoms/buttons/GreenButton.vue'
</script>

<script lang="ts">

export interface GBProviderConfig {
  name: string;
  url: string;
  displayName: string;
}

export interface GBProvidersWizardData {
  step: string | null;
  providers: GBProviderConfig[]
}

export default {
  data() {
    return {
      step: null
      /** We need to move this to some central store**/
      , providers: [{
        name: 'Github.com'
        , displayName: 'Github.com'
      }, {
        name: 'Github Enterprise'
        , displayName: 'Github Enterprise'
      }]
    } as GBProvidersWizardData
  }

  , computed: {
    loginButtonText() {
      return this.step ? 'Login with ' + this.step : 'Login'
    }
  }
  , methods: {
    reset () {
      this.step = null
    }
    , select (name: string) {
      this.step = name
    }
    , proceedWithProvider() {
      console.log(this.step)
    }
  }
}
</script>

<template>
  <div class='flex rounded-md bg-white border-white h-full w-full border-2 flex-1'>
    <div class='m-auto h-80 max-w-md shadow-2xl border-white border-2 container flex flex-col content-between p-8'> 
      <div class='flex h-full w-full flex flex-row justify-between'>
        <div 
          class='rounded-lg border-4 w-40 h-40 bg-gray-100 p-2'
          :class='{ 
            "border-teal-400": step == provider.name, 
            "hover:border-gray-200": step !== provider.name, 
            "border-white": step !== provider.name 
          }'
          v-for='(provider, index) in providers'
          :key='index'
          @click='() => select(provider.name)'
        >
          {{provider.displayName}}
        </div>
      </div>
      <div class='flex justify-between content-center flex-row-reverse'>
        <GreenButton :button-text='loginButtonText' @click='proceedWithProvider' />
      </div>
    </div>
  </div>
</template>
