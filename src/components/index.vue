<template>
  <div class="index">
    <Menu></Menu>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Menu from './sub-c/menu'
export default {
  name: 'index',
  methods: {
    test () {
      this.$router.push({path:'test'})
    }
  },
  components:{
    Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
