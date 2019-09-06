<template>
  <div class=" ">
   <ul class="search-ul">
      <li class="search-li">
        <Poptip placement="bottom" width="300">
          <input v-model.trim="ip_name"
          placeholder="请输入主机名或IP地址，可模糊匹配"
          @input="userInput"
          type="text"
          class="search-input" />
          
          <div class="api" slot="content" v-if="showSearchTips">
            <ul>
              <template v-for="(resItem, resIndex) in searchResult">
                <li style="line-height: 20px;font-weight: 500;cursor:pointer" @click="choiceRes(resItem)" :key="resIndex">
                  <span>{{resItem.option_text}}</span>
                </li>
              </template>  
                
            </ul> 
          </div>
        </Poptip>

        <!-- <Input v-model="ip" placeholder="请输入主机名或IP地址，可模糊匹配" style="width: 300px" /> -->
        <!-- <input v-model.trim="ip"
          @input="debounceQueryList"
          placeholder="请输入主机名或IP地址，可模糊匹配"
          type="text"
          class="search-input" />
          {{ip}} -->
      </li>
                <!--
          @focus="showSearchTips = true"
          @keyup.enter="enterClick"
          @keyup.up="upClick"
          @keyup.down="downClick" -->
      <li class="search-li">
        <Button type="primary" @click="getChartsCOnfig" icon="ios-search">搜索</Button>
      </li>
      <li class="search-li">
          <Select v-model="model1" style="width:80px" @on-change="getChartsCOnfig">
            <Option v-for="item in dataPick" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
      </li>
      <li class="search-li">
        <DatePicker type="daterange" placement="bottom-end" @on-change="datePick" placeholder="请选择日期" style="width: 200px"></DatePicker>
      </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      ip_name: '',
      ip_value: '',
      showSearchTips: false, // 控制搜索结果是否显示
      searchResult: [],
      model1: -1800,
      dataPick: [
        {
            value: -1800,
            label: '30分钟'
        },
        {
            value: -3600,
            label: '1小时'
        },
        {
            value: -10800,
            label: '3小时'
        }
      ],
      dateRange: ['',''],
      params: {
        // time: this.model1,
        // group: 1,
        // endpoint: '192.168.0.16',
        // start: Date.parse(this.dateRange[0]),
        // end: Date.parse(this.dateRange[1])
      }
    }
  },
  mounted (){
    this.getChartsCOnfig()
  },
  
  methods: {
    datePick (data) {
      this.dateRange = data
      this.getChartsCOnfig()
    },
    getChartsCOnfig () {
      let params = {
        group: 1,
        time: this.model1,
        // endpoint: '192.168.0.16',
        endpoint: this.ip_value,
        start: this.dateRange[0] ===''? '':Date.parse(this.dateRange[0])/1000,
        end: this.dateRange[1] ===''? '':Date.parse(this.dateRange[1])/1000
      }
      this.$httpRequestEntrance.httpRequestEntrance('GET','v1/dashboard/panels', params, responseData => {
        this.$parent.manageCharts(responseData, params)
      },{isNeedloading: false})
    },

    userInput () {
      this.showSearchTips = false
      this.request()
    },
    choiceRes (resItem) {
      this.ip_name = resItem.option_text
      this.ip_value = resItem.option_value
      this.getChartsCOnfig()
      this.showSearchTips = false
    },
    request () {
      if (!this.ip_name) {
        return
      }
      let params = {
        search: this.ip_name
      }
      this.$httpRequestEntrance.httpRequestEntrance('GET','v1/dashboard/search', params, responseData => {
        this.searchResult = responseData
      })
      this.showSearchTips = true
    } 

  }
}
</script>

<style scoped lang="less">
  .search-li {
    display: inline-block;
  }
  .search-ul>li:not(:first-child) {
    padding-left: 10px;
  }

  .search-input {
    display: inline-block;
    width: 300px;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text

  }
  .search-input:focus {
    outline: 0;
    border-color: #57a3f3;
    // box-shadow: 0 0 0 2px rgba(45,140,240,.2);
  }
</style>
