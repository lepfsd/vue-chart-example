<template>
  <div>
     <navbar></navbar>
     <router-view></router-view>
     
      
  </div>
</template>

<script>

import navbar from './components/Navbar'



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