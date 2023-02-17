<script lang="ts">
export default {
  props: {
    buttonText: String
  }
  , created() {
    console.log('Button created')
  }
  , methods: {
    onButtonClick() {
      console.log('button clicked')
    }
  }
}
</script>

<template>
  <button @click='onButtonClick' class='bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-full w-max h-max'>{{buttonText}}</button>
</template>

