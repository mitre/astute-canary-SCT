<template>
<div class="w-full bg-primary min-h-screen">
  <div class="max-w-sm mx-auto pt-12 pb-24">
    <app-powered-by-statement/>
    <div class="flex flex-row items-center w-full">
      <div class="mx-auto flex flex-row my-12">
        <div class="w-auto text-light-text flex-col">
          <div class="text-2xl font-bold">{{ profile.firstname }} {{ profile.lastname }}</div>
          <div class="text-xl mt-4"> {{ profile.location.city }}, {{ profile.location.state }}</div>
        </div>
        <div class="ml-12 w-auto">
          <app-button type="accent" @clicked="editProfile">Edit</app-button>
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-light-background py-4 rounded-2xl mt-4 md:mt-12 mx-auto text-primary">
      <div class="mx-auto">
        <settings-menu-option icon="sign-out-alt" @clicked="logout">
          <span class="ml-4">Logout</span>
        </settings-menu-option>
        <settings-menu-option icon="bell">
          <span class="ml-4">Notifications</span>
        </settings-menu-option>
        <settings-menu-option icon="cog">
          <span class="ml-4">General</span>
        </settings-menu-option>
        <settings-menu-option icon="sign-out-alt" @clicked="editProfile">
          <span class="ml-4">Account</span>
        </settings-menu-option>
        <settings-menu-option icon="lock">
          <span class="ml-4">Privacy</span>
        </settings-menu-option>
        <settings-menu-option icon="question-circle">
          <span class="ml-4">Help</span>
        </settings-menu-option>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import AppButton from '@/components/AppButton.vue'
import SettingsMenuOption from '@/components/AppSettingsMenuOption.vue'
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Profile'
    }
  },
  components: {
    AppButton,
    SettingsMenuOption
  },
  data () {
    return {
      profile: undefined
    }
  },
  methods: {
    editProfile () {
      console.log ('editing')
    },
    logout () {
      console.log('logout')
      this.$router.push('/login')
    }
  },
  created () {
    this.profile = this.$store.state.profile.profile
  },
  mounted () {
    this.$store.commit('general/SET_PAGE_TITLE', 'Profile/Settings')
  }
}
</script>
<style scoped>
  
</style>

