<template>
  <div class="single-chart">
    <div :id="elId" class="echart"></div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
  name: '',
  data() {
    return {
      elId: null
    }
  },
  props: {
    chartItemx: Object
  },
  created (){
    this.elId =  `id_${this.guid()}`;
    console.log(this.chartItemx)
  },
  mounted() {
    this.getchartdata()
  },
  methods: {
    draw (config) {
      // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(this.elId));
    // 绘制图表
    myChart.setOption({
        title: {
          text: config.title,
          left:'10%',
          top: '10px'
        },
        calculable: false,
        color: ['#7EB26D', '#EAB839', '#6ED0E0', '#EF843C', '#E24D42', '#1F78C1', '#BA43A9', '#705DA0', '#508642', '#CCA300', '#447EBC', '#C15C17'],
        dataZoom: [{
          type: 'inside',
          // throttle: 1000
          // start: 60,
          // end: 100
        }],
        grid: {
          left: '3%',
          right: '5%',
          bottom: '8%' ,
          containLabel: true
        },
        xAxis: {
          type: 'time',
          axisLabel: {
          formatter: function (value) {
            return echarts.format.formatTime('MM-dd\nhh:mm:ss', value)
          }
          },
          boundaryGap : false,
          splitLine: {
            show: true
          }
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: (value) => {
                let unit = ''
                if (value > 1024*1024*1024*1024) {
                  value = value / (1024*1024*1024*1024)  
                  unit = 'T'
                } else if (value > 1024*1024*1024) {
                  value = value / (1024*1024*1024)  
                  unit = 'G'
                } else if (value > 1024*1024) {
                  value = value / (1024*1024)  
                  unit = 'M'
                } else if (value > 1024) {
                  value = value / 1024  
                  unit = 'K'
                } else {
                  return value + ' ' + config.yaxis.unit
                }
                let newValue = Number.isInteger(value) ? value : value.toFixed(3)
                return newValue + ' ' + unit + config.yaxis.unit
              }
            },
            show: true
          }
        ],
        series: config.series
      });
    },
    guid() {
      return 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
      })
    },
    getchartdata () {
      let params = {
        id: this.chartItemx.id,
        endpoint: [this.chartItemx.endpoint[0]],
        metric: [this.chartItemx.metric[0]],
        time: '-1800'
      }
      this.$httpRequestEntrance.httpRequestEntrance('POST','v1/dashboard/chart', params, responseData => {
        responseData.series[0].symbol = 'none'
        let config = {
          title: responseData.title,
          series: responseData.series[0],
          yaxis: responseData.yaxis,
        }
        this.draw(config)
      })
    }
  },
  components: {},
}
</script>

<style scoped lang="less">
  .single-chart {
    display: inline-block;
    padding: 5px;
    .echart {
       height: 300px;
       width: 580px;
       background: @gray-f;
    }
  }
</style>
