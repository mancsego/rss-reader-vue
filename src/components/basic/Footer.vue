<template>
  <div class="h-60 py-5 flex justify-center items-center bg-neutral text-white">
    <div class="text-center">
      <p class="py-3">Author: Istvan Abraham</p>
      <p class="py-3">
        <a href="mailto: mancsego@gmail.com">mancsego@gmail.com</a> |
        <a href="tel:+49-1575-110-7267">+49 1575 110 7267</a>
      </p>
      <p class="py-3">&copy; {{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
