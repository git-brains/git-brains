<script lang="ts">
export default {
  props: {
    buttonText: String
    , disabled: Boolean
  }
  , created() {
    console.log('Button created', this.disabled)
  }
}
</script>

<template>
  <button class='bg-teal-700 text-white font-bold py-2 px-4 rounded-full w-max h-max'
    :disabled='!!disabled'
    :class='{
      "hover:bg-teal-800": !disabled
    }'
  >{{buttonText}}</button>
</template>

