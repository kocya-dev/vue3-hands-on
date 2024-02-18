<script setup>
defineProps({
  description: {
    type: String,
    default: "",
    required: false,
  },
  link: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<template>
  <p>{{ description }}</p>
  <a v-if="link" :href="link">リンク</a>
</template>
