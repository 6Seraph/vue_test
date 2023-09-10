<script setup lang="ts">
import AppPanelVue from './AppPanel.vue';
import UserDetail from './UserDetail.vue';
</script>

<template>
  <main>
    <AppPanelVue />
    <UserDetail />
  </main>
</template>

<style scoped lang="scss">
main {
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}
</style>