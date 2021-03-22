<template>
  <div class="grid grid-cols-6 gap-x-16 w-11/12 mx-auto">
    <div class="col-start-1 col-end-1">
      <div class="rounded-full h-16 w-16 flex items-center justify-center border-4 text-3xl font-bold" :class="metricClass">
        {{ metric }}
      </div>
    </div>
    <div class="col-start-2 col-end-7">
      <slot  />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    metric: {
      type: Number,
      default: 'N/A'
    },
    type: {
      type: String,
      default: 'success'
    }
  },
   computed: {
    metricClass () {
      const classes = []
      if (this.type === 'warning') {
        classes.push('border-warning')
      }
      if (this.type === 'success') {
        classes.push('border-success')
      }
      if (this.type === 'danger') {
        classes.push('border-danger')
      }
      return classes.join(' ')
    }
  }
}
</script>