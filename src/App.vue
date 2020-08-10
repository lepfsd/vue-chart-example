<template>
  <div>
     <navbar></navbar>
     <router-view></router-view>
      
  </div>
</template>

<script>

import navbar from './components/Navbar'
//import footer from './components/Footer'


export default {
  components: {
    navbar
  },
  data() {
    return {
      message: "Vue"
    };
  }
};
</script>

<style>

.center {
  text-align: center;
}
</style>