<script lang="ts">
export default {
  props: {
    buttonText: String
  }
  , created() {
    console.log('Button created')
  }
}
</script>

<template>
  <button class='bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-full w-max h-max'>{{buttonText}}</button>
</template>

