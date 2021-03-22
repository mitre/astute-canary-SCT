<template>
  <button class="py-2 rounded px-4 hover:shadow-xl focus:shadow-xl" :class="btnClass" @click="$emit('clicked')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    round: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary'
    },
    textType: {
      type: String,
      default: 'light-text'
    },
    border: {
      type: Boolean,
      default: false,
    },
    borderType: {
      type: String,
      default: ''
    },
    borderThickness: {
      type: Number
    },
    tailwind: {
      type: Boolean,
      default: false,
    },
    tailwindBackgroundOpacity: {
      type: Number,
      default: 900
    }
  },
  computed: {
    btnClass () {
      const classes = []
      if (this.round) {
        classes.push('rounded-full')
      }
      if (this.uppercase) {
        classes.push('uppercase')
      }
      if (this.bold) {
        classes.push('font-bold')
      }
      if (this.border) {
        if(!this.borderThickness) {
          classes.push('border')
        }
        else {
          classes.push('border-' + this.borderThickness)
        } 
        if (this.borderType) {
          classes.push('border-' + this.borderType)
        } 
        
      }
      classes.push('text-' + this.textType)
      if (this.type === 'primary') {
        classes.push('bg-primary')
      }
      if (this.type === 'secondary') {
        classes.push('bg-secondary')
      }
      if (this.type === 'tertiary') {
        classes.push('bg-tertiary')
      }
      if (this.type === 'accent') {
        classes.push('bg-accent')
      }
      if (this.type === 'success') {
        classes.push('bg-success')
      }
      if (this.type === 'warning') {
        classes.push('bg-warning')
      }
      if (this.type === 'danger') {
        classes.push('bg-danger')
      }
      if (this.textType === 'primary') {
        classes.push('text-primary')
      }
      if (this.textType === 'secondary') {
        classes.push('text-secondary')
      }
      if (this.textType === 'tertiary') {
        classes.push('text-tertiary')
      }
      if (this.textType === 'accent') {
        classes.push('text-accent')
      }
      if (this.textType === 'success') {
        classes.push('text-success')
      }
      if (this.textType === 'warning') {
        classes.push('text-warning')
      }
      if (this.textType === 'danger') {
        classes.push('text-danger')
      }
      return classes.join(' ')
    }
  }
}
</script>