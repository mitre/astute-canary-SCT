<template>
<div class="w-full h-full flex flex-col bg-page-pattern bg-no-repeat bg-cover bg-center  min-h-screen">
  <div class="max-w-md mx-auto flex flex-col flex-grow h-full w-full pt-8">
    <app-powered-by-statement/>
    <div class="flex flex-row items-center w-full">
      <div class="mx-auto flex flex-row mt-12">
        <div class="w-auto text-light-text flex-col">
          <div class="text-2xl font-bold">{{ profile.firstname }} {{ profile.lastname }}</div>
          <div class="text-xl mt-4"> {{ profile.location.city }}, {{ profile.location.state }}</div>
        </div>
        <div class="ml-12 w-auto">
          <app-button type="tertiary" @clicked="editProfile">Edit</app-button>
        </div>
      </div>
    </div>
    <div class="flex-grow flex flex-col w-full bg-light-background py-8 px-16 text-lg text-center rounded-t-4xl mt-16 text-primary pb-24">
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

