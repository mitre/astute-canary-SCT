<template>
<div class="w-auto flex flex-col justify-center">
  <div class="mt-24 mx-auto">
    <v-calendar color="purple" :attributes="attributes" @dayclick='dayClicked'></v-calendar>
  </div>
  <div class="mt-8 mx-auto">
    <div
      v-if='selectedDay'
      class="mt-8 text-gray-700 leading-loose">
      <h3 class="text-dark-text font-bold">{{ selectedDay.date.toDateString() }} Notes:</h3>
      <ul>
        <li
          v-for='attr in selectedDay.attributes'
          :key='attr.key'>
          <span class="h-3 w-3 inline-block rounded-full" :class="'bg-' + attr.customData.color + '-600'"></span>
          {{ attr.customData.description }}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  head: {
    title: 'Astute Canary | Calendar'
  },
  data () {
    const todos = [
      {
        description: 'Symptoms Reported: 101 degree F. fever, Fatigue, Chills',
        isComplete: false,
        dates: { weekdays: 6 }, // Every Friday
        color: 'purple',
      },
      {
        description: 'Testing Reported.',
        isComplete: false,
        dates: { weekdays: 6 }, // Every Friday
        color: 'orange',
      },
      {
        description: 'Vaccination Experience: Moderna Vaccine, Dose 2 received',
        isComplete: false,
        dates: { weekdays: 4 }, // Every Weds
        color: 'blue',
      }
    ]
    return {
      selectedDay: null,
      todos
    }
  },
  computed: {
    attributes() {
       return [
        // Attributes for todos
        ...this.todos.map(todo => ({
          dates: todo.dates,
          dot: {
            color: todo.color,
            class: todo.isComplete ? 'opacity-75' : '',
          },
          popover: {
            label: todo.description,
          },
          customData: todo,
        })),
      ]
    }
  },
  methods: {
    dayClicked(day) {
      this.selectedDay = day;
    }
  },
  mounted () {
    this.$store.commit('pageTitle/SET_PAGE_TITLE', 'Calendar')
  }
}
</script>
