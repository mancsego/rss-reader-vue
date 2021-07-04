<template>
  <span class="inline-block text-white bg-gray-400 p-1 m-px text-sm">
    {{ tag }}
  </span>

</template>

<script>
export default {
  name: 'Tag',
  props: {
    tag: String
  }
}
</script>

<style lang="scss" scoped>

</style>
