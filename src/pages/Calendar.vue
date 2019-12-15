<template>
  <q-page padding>
    <!-- content -->
    <q-calendar view="month"
      :now="selectedDate"
      v-model="selectedDate"
    ></q-calendar>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
