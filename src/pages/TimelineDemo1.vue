<template>
  <q-page padding>
    <!-- content -->
    <div class='text-h6'>Inspection Schedule for December 13, 2019</div>

    <div>
      <GChart type="Timeline" :data="chartData3" :options="chartOptions3" :settings="chartSettings3" />
    </div>

    <div v-for="(event, idx) in inspectionData" :key="event.serNumber" class="inspectionData q-pa-sm q-mb-sm">
      <span class="colorBlock q-mt-sm" :class="'bg-' + colorScheme[idx]"></span>
      <div class="q-ml-md detailBlock">
        <div class="text-h6">{{event.site.name}}</div>
        <div class="text-subtitle1">{{event.site.address.street}}, {{event.site.address.city}}, {{event.site.address.state}} {{event.site.address.postal}}</div>
        <div class="text-subtitle2">
          ({{event.onsightType}}) {{event.onsightDesc}}
        </div>
      </div>
      <div class="float-right text-left q-mt-sm" style="width: 130px">
          <q-icon name="mdi-clock-start" color="amber-10"></q-icon> {{event.startTime}}<br>
          <q-icon name="mdi-clock-end" color="amber-10"></q-icon> {{event.endTime}}<br>
          <span class="text-amber-10">Promise:</span> {{event.promise}}
      </div>
    </div>

  </q-page>
</template>

<script>
import { GChart } from 'vue-google-charts'
// https://developers.google.com/chart/interactive/docs
// https://github.com/devstark-com/vue-google-charts

export default {
  name: 'TimelineDemo1',
  components: {
    GChart
  },
  data () {
    return {
      chartData3: [
        ['Type', 'Site', 'Start Time', 'End Time'],
        // ['Inspection Schedule', 'Company A', new Date(2019, 11, 13, 8, 45, 0), new Date(2019, 11, 13, 9, 30, 0)],
        // ['Inspection Schedule', 'Company B', new Date(2019, 11, 13, 10, 0, 0), new Date(2019, 11, 13, 10, 30, 0)],
        // ['Inspection Schedule', 'Company C', new Date(2019, 11, 13, 14, 30, 0), new Date(2019, 11, 13, 15, 15, 0)],
        // ['Inspection Schedule', 'Company D', new Date(2019, 11, 13, 16, 20, 0), new Date(2019, 11, 13, 16, 45, 0)],
      ],
      chartOptions3: {
        title: 'Daily Inspection Schedule',
        // timeline: { colorByRowLabel: true }
        timeline: { showRowLabels: false },
        colors: [
          '#FF5722',
          '#8D6463',
          '#689F38',
          '#F9A825',
          '#757575',
          '#AEEA00',
          '#607D8B',
          '#FF6F00',
          '#2196F3',
          '#E53835',
          '#68BB6A',
          '#EF6C00',
          '#3F5165',
          '#AB47BC',
          '#4DB8AC',
          '#F06292'
        ],
        height: 100
      },
      chartSettings3: {
        packages: ['timeline']
      },
      inspectionData: [
        {
          serNumber: 'SER00001',
          site: {
            name: 'Company A',
            address: {
              street: '1 Milky Way', city: 'Hartford', state: 'CT', postal: '00001'
            }
          },
          date: '2019-12-13', startTime: '8:45', endTime: '9:30',
          promise: '-',
          contact: {
            name: 'John Doe', phone: '(123) 456-7890', email: 'j.doe@companyA.com'
          },
          onsightType: 'OS0001', onsightDesc: 'OnSight Basic',
          travel: {
            distanceFrom: '26km',
            duration: '1h 22m'
          }
        },
        {
          serNumber: 'SER00002',
          site: {
            name: 'Company B',
            address: {
              street: '2 Main Street', city: 'Hartford', state: 'CT', postal: '00002'
            }
          },
          date: '2019-12-13', startTime: '10:00', endTime: '10:30',
          promise: 'AM',
          contact: {
            name: 'Mary Doe', phone: '(321) 456-7890', email: 'm.doe@companyB.com'
          },
          onsightType: 'OS0002', onsightDesc: 'OnSight Plus',
          travel: {
            distanceFrom: '5km',
            duration: '24m'
          }
        },
        {
          serNumber: 'SER00003',
          site: {
            name: 'Company C',
            address: {
              street: '3 Grand Ave', city: 'Hartford', state: 'CT', postal: '00003'
            }
          },
          date: '2019-12-13', startTime: '14:30', endTime: '15:15',
          promise: '15:00',
          contact: {
            name: 'Peter Pan', phone: '(321) 999-8888', email: 'p.pan@companyC.com'
          },
          onsightType: 'OS0006', onsightDesc: 'OnSight Advantage - Commercial v2',
          travel: {
            distanceFrom: '14km',
            duration: '47m'
          }
        },
        {
          serNumber: 'SER00004',
          site: {
            name: 'Company D',
            address: {
              street: '3 Small Road', city: 'Hartford', state: 'CT', postal: '00004'
            }
          },
          date: '2019-12-13', startTime: '16:20', endTime: '16:45',
          promise: 'PM',
          contact: {
            name: 'Peter Pan', phone: '(321) 999-8888', email: 'p.pan@companyC.com'
          },
          onsightType: 'OS0007', onsightDesc: 'OnSight Advantage - Wind v1',
          travel: {
            distanceFrom: '53km',
            duration: '1h 32m'
          }
        },
      ],
      colorScheme: [
        'deep-orange-6', // #FF5722
        'brown-5', // #8D6463
        'light-green-8', // #689F38
        'yellow-9', // #F9A825
        'grey-7', // #757575
        'lime-14', // #AEEA00
        'blue-grey-6', // #607D8B
        'amber-10', // #FF6F00
        'blue-6', // #2196F3
        'red-7', // #E53835
        'green-5', // #68BB6A
        'orange-9', // #EF6C00
        'indigo-6', // #3F5165
        'purple-5', // #AB47BC
        'teal-4', // #4DB8AC
        'pink-4' // #F06292
      ]

    }
  },
  mounted () {
    this.inspectionData.forEach(event => {
      this.chartData3.push([
        'Inspection Schedule',
        event.site.name,
        new Date(`${event.date} ${event.startTime}:00`),
        new Date(`${event.date} ${event.endTime}:00`)
      ])
    })
  }

}
</script>

<style lang="scss" scoped>
.colorBlock {
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: top;
}

.inspectionData {
  border: 1px solid #a0a0a0;
  border-radius: 3px;
}

.detailBlock {
  display: inline-block;
}
</style>