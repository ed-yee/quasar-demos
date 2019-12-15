<template>
  <!-- <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page> -->
  <q-page padding>
    <div class="flex flex-center">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    </div>

    <div class="q-gutter-sm q-mt-md">
      <q-btn icon="mdi-chart-pie" label="Pie Chart Demo" size="lg" color="deep-orange" to="/PieChartDemo"></q-btn>
      <q-btn icon="mdi-timeline-text-outline" label="Timeline Demo 1" size="lg" color="deep-orange" to="/TimelineDemo1"></q-btn>
      <q-btn icon="mdi-timeline-text-outline" label="Timeline Demo 2" size="lg" color="deep-orange" to="/TimelineDemo2"></q-btn>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>