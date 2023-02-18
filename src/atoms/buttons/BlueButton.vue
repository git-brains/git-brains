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
  <button class='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-max h-max'>{{buttonText}}</button>
</template>

