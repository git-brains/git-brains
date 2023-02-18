<script setup lang="ts">
import GBProvidersWizard from '../organisms/configuration/GBProvidersWizard.vue'
</script>

<script lang="ts">
export default {}
</script>

<template>
<div class='gb-user-setup container flex m-auto'>
  <GBProvidersWizard @token-received-from-provider='evt => $store.commit("activate", { name: evt.name, token: evt.token})'/>
</div>
</template>
