<template>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="px-2 mx-2 navbar-start">
      <div class="avatar tooltip tooltip-success tooltip-bottom" data-tip="LinkedIn">
        <div class="rounded-full w-10 h-10">
          <a href="https://www.linkedin.com/in/istvan-abraham/"><img src="../../assets/me.png" alt="me"/></a>
        </div>
      </div>
    </div>
    <div class="navbar-center hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <p class="cursor-default btn btn-ghost btn-sm rounded-btn">RSS reader</p>
      </div>
    </div>
    <div class="navbar-end"></div>
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
