<template>
  <q-page padding>
    <!-- content -->
    <GChart type="PieChart" :data="chartData" :options="chartOptions"  />
    <GChart type="PieChart" :data="chartData2" :options="chartOptions2" />
  </q-page>
</template>

<script>
import { GChart } from 'vue-google-charts'
// https://developers.google.com/chart/interactive/docs
// https://github.com/devstark-com/vue-google-charts

export default {
  name: 'PieChartDemo',
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['SO Status', 'Count'],
        ['New', 8],
        ['In progress', 3],
        ['Pending', 0],
        ['Submitted', 10],
        ['Error', 1],
        ['Submititng', 0],
        ['Obsolete', 10]
      ],
      chartOptions: {
        title: 'Service Orders By Status',
        pieHole: 0.2,
        // legend: 'none',
        // chartArea: {
        //   width: 400,
        //   height: 400
        // },
        // backgroundColor: '#214B24',
        // is3D: true
        height: 300,
        width: 800,
        pieSliceText: 'value'
      },
      chartData2: [
        ['SO Type', 'Count'],
        ['Regular Inspection', 15],
        ['Trunkwork', 5]
      ],
      chartOptions2: {
        title: 'Service Orders By Type',
        pieHole: 0.2,
        height: 300,
        width: 800,
        pieSliceText: 'value'
      },

    }
  }
}
</script>
