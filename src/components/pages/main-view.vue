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
          {
            tabTape: {label: 'CPU/内存/负载', name: 'cpu_'},
          },
          {
            tabTape: {label: '磁盘', name: 'disk'},
          },
          {
            tabTape: {label: '网络', name: 'network'},
          },
          {
            tabTape: {label: '其他', name: 'others'},
          }    
        ]
      }
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
