<template>
  <div id="app" class="bg-gray-100">
    <Header/>
    <div class="content mb-4">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { STORE } from './services/store/Constants'
import Header from './components/basic/Header'
import Footer from './components/basic/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  beforeCreate () {
    this.$store.dispatch(STORE.POSTS.FETCH)
  }
}
</script>
<style scoped lang="css">
.content {
  min-height: 500px;
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
