<template>
  <div class=" ">
   <ul>
      <li>
        <Input v-model="value" placeholder="请输入主机名或IP地址，可模糊匹配" style="width: 300px" />
      </li>
      <li>
        <Button type="primary" icon="ios-search">搜索</Button>
      </li>
      <li>
          <Select v-model="model1" style="width:80px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
      </li>
      <li>
        <DatePicker type="daterange" placement="bottom-end" placeholder="请选择日期" style="width: 200px"></DatePicker>
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
      value: '',
      model1: '',
      cityList: [
        {
            value: 0.5,
            label: '30分钟'
        },
        {
            value: 1,
            label: '1小时'
        },
        {
            value: 2,
            label: '2小时'
        },
        {
            value: 3,
            label: '3小时'
        },
        {
            value: 4,
            label: '4小时'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  li {
    display: inline-block;
  }
  ul>li:not(:first-child) {
    padding-left: 10px;
  }
</style>
