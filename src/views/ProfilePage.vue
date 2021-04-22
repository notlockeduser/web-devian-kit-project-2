<template>
  <div id="app">
    <Header/>
    <Side-bar/>
    <Profile/>
    <!-- <Users/> -->
  </div>
</template>

<script>
import Header from './../components/Header.vue'
import SideBar from './../components/SideBar.vue'
import Profile from './../components/Profile.vue'
// import Users from './components/Users.vue'


export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    Profile,
    // Users
  }
}
</script>

<style lang="scss">

</style>
