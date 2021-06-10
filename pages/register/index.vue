<template>
  <div class="w-full h-screen flex flex-col items-center">
    <div class="w-full bg-page-pattern bg-no-repeat bg-cover bg-bottom">
      <div class="mx-auto max-w-sm text-center  w-full pt-8 pb-24">
        <img src="~/assets/images/Logo.svg" width="100" class="mx-auto mb-8"/>
        <h1 class="uppercase text-3xl text-dark-text font-bold tracking-widest">{{ appName }}</h1>
        <h3 class="text-3xl text-dark-text font-thin mt-8">Sign Up</h3>
      </div>
    </div>
    <div class="max-w-sm mx-auto flex flex-col flex-grow h-full w-full mt-4">
      <form>
        <fieldset>
          <div class="mt-4">
            <label class="text-gray-600" for="username">Enter email or username</label>
            <input type="text" name="username" class=" border rounded w-full py-2 pl-1 text-sm focus:outline-none" v-model="username" placeholder="Username">
          </div>
          <div class="mt-4">
            <label class="text-gray-600" for="password">Enter password</label>
            <input type="text" name="password" class=" border rounded w-full py-2 pl-1 text-sm focus:outline-none" v-model="password" placeholder="Password">
          </div>
          <div class="mt-4">
            <label class="text-gray-600" for="confirmPassword">Confirm password</label>
            <input type="text" name="confirmPassword" class=" border rounded w-full py-2 pl-1 text-sm focus:outline-none" v-model="confirmPassword" placeholder="Password">
          </div>
        </fieldset>
     </form>
      <div class="flex flex-row justify-center mt-8">
        <app-button type="white" border="true" textType="dark-text" @clicked="cancel" class="mr-8">Cancel</app-button>
        <app-button @clicked="register" type="secondary">Sign Up</app-button>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from '@/components/AppButton.vue'
export default {
  layout: 'login',
  head() {
    return {
      title: this.$store.state.general.appName + ' | Register'
    }
  },
  data () {
    return {
      username: undefined,
      password: undefined,
      confirmPassword: undefined,
      appName: '',
    }
  },
  components: {
    AppButton
  },
  methods: {
    cancel () {
      this.$router.push('/login')
    },
    // Function for when your user registers. Put registration logic here
    register () {
      this.$router.push('/login')
    }
  },
  mounted () {
    this.appName = this.$store.state.general.appName
  }
}
</script>