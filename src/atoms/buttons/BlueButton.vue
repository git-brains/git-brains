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
  <button @click='onButtonClick' class='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-max h-max'>{{buttonText}}</button>
</template>

