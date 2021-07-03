<template>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="px-2 mx-2 navbar-start">
      <span class="text-lg font-bold">RSS Reader</span>
    </div>
    <div class="navbar-center hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <a class="btn btn-ghost btn-sm rounded-btn" href="/">
          RSS reader
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/">
          Portfolio
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/">
          About
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/">
          Contact
        </a>
      </div>
    </div>
    <div class="navbar-end">
      <div class="avatar">
        <div class="rounded-full w-10 h-10">
          <img
              src="http://daisyui.com/tailwind-css-component-profile-1@40w.png"
              alt="jeno"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
