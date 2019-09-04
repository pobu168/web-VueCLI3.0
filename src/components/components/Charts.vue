<template>
  <div class="charts">
    <Tabs :value="charts.chartsConfig[0].tabTape.name" @on-click="test"> 
      <template v-for="(chartItem, chartIndex) in charts.chartsConfig">
        <TabPane :label="chartItem.tabTape.label" :name="chartItem.tabTape.name" :key="chartIndex">
          {{chartItem.tabTape.label}}
        </TabPane>
      </template>  
    </Tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {
    charts: Object
  },
  methods: {
    test () {
      // if (name === 'cpu_') {
      //   this.$router.push('test') 
      // } 
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
  .charts {
    padding-top: 20px;
  }
</style>
