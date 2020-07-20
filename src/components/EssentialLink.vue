<template>
  <q-item clickable :active="currentId === item.id" @click="itemHandler">
    <q-item-section v-if="item.icon" avatar>
      <q-avatar color="primary" text-color="white" :icon="item.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.title }}</q-item-label>
      <q-item-label caption>
        {{ item.caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    item: {
      type: Object,
      default: null
    },
    currentId: {
      type: Number,
      default: undefined
    }
  },
  methods: {
    itemHandler() {
      this.$emit('itemHandler', this.item);
    }
  }
};
</script>
