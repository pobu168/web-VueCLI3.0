<template>
  <div class="charts">
    <Tabs :value="activeTab" @on-click="changeTab"> 
      <template v-for="(chartItem, chartIndex) in charts.chartsConfig">
        <TabPane :label="chartItem.tabTape.label" :name="chartItem.tabTape.name" :key="chartIndex">
          <template v-if="btns.length">
            <div class="btn-content">
              <template v-for="(btnItem,btnIndex) in btns">
                <div class="btn-block" :key='btnIndex'>
                  <span>{{btnItem.option_text}}</span>
                </div>
              </template>
            </div>
          </template>
          <template v-for="(chartItemx,chartIndex) in activeCharts">
              <SingleChart :chartItemx="chartItemx" :key="chartIndex"> </SingleChart>
          </template>
        </TabPane>
      </template>  
    </Tabs>
  </div>
</template>

<script>
import SingleChart from '@/components/components/Single-chart'
import { setTimeout } from 'timers';
export default {
  name: '',
  data() {
    return {
      activeTab:  '',
      activeCharts: {},
      btns: []
    }
  },
  props: {
    charts: Object
  },
  mounted () {
    if (this.charts.chartsConfig.length !== 0) {
      this.activeCharts = this.charts.chartsConfig[0].charts
    }
  },
  methods: {
    changeTab (name) {
      this.activeTab = name
      this.activeCharts = []
      this.btns = []
      this.charts.chartsConfig.forEach((item, index) => {
        if (item.tabTape.name === name) {
          this.btns = item.btns
          this.$nextTick(() => {
            this.activeCharts = item.charts
          })
        }
      })
    }
  },
  components: {
    SingleChart
  }
}
</script>

<style scoped lang="less">
  .charts {
    padding-top: 20px;
  }

  .btn-block {
    margin-left: -1px;
    margin-bottom: 2px;
    line-height: 30px;
    min-width: 50px;
    padding: 0 4px;
    text-align: center;
    display: inline-block;
    background: white;
    border: 1px solid @blue-2;
    color: @blue-2;
    cursor: pointer;
  }

  .btn-content {
  padding: 2px;
  }
</style>
