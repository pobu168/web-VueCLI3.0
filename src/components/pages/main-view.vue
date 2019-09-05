<template>
  <div class="page">
    <Title title="监控视图"></Title>
    <Search/>
    <Charts :charts='charts'/>
  </div>
</template>

<script>
import Title from '@/components/components/Title'
import Search from '@/components/components/Search'
import Charts from '@/components/components/Charts'
export default {
  name: 'main-view',
  data() {
    return {
      charts: {
        chartsConfig: [
          // {
          //   tabTape: {label: 'CPU/内存/负载', name: 'cpu_'},
          //   btns:[{label: '按钮A', value:'btn1'},{label: '按钮B', value:'btn2'},{label: '按钮C', value:'btn3'}]
          // },
          // {
          //   tabTape: {label: '磁盘', name: 'disk'},
          //   btns:[]
          // },
          // {
          //   tabTape: {label: '网络', name: 'network'},
          //   btns:[]
          // },
          // {
          //   tabTape: {label: '其他', name: 'others'},
          //   btns:[]
          // }    
        ]
      }
    }
  },
  mounted() {
    // this.$children[0].
  },
  methods: {
    manageCharts (chartsConfig) {
      this.charts.chartsConfig = []
      chartsConfig.forEach(item => {
        let chart = {
          tabTape: {
            label: item.title,
            name: item.title + '_',
          },
          btns: item.tags.option,
          charts: item.charts
        }
        this.charts.chartsConfig.push(chart)
      })
    }
  },
  components: {
    Title,
    Search,
    Charts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
