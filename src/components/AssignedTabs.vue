<template>
  <q-tabs align="left">
    <q-route-tab v-for="tab in tabs" :key="tab.id" :to="tab.link" :label="tab.title" />
  </q-tabs>
</template>

<script>
export default {
  name: 'AssignedTabs',
  props:['tabs'],
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped></style>
