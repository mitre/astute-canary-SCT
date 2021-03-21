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
      if (this.tailwind) {
        classes.push('bg-' + this.type + '-' + this.tailwindBackgroundOpacity)
      } else {
        classes.push('bg-' + this.type)
      }
      return classes.join(' ')
    }
  }
}
</script>