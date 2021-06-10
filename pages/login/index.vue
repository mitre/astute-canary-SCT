<template>
  <div class="w-full min-h-screen flex flex-col items-center pb-24">
    <div class="w-full bg-page-pattern bg-no-repeat bg-cover bg-bottom">
      <div class="mx-auto max-w-sm text-center  w-full pt-8 pb-24">
        <img src="~/assets/images/Logo.svg" width="100" class="mx-auto mb-8"/>
        <h1 class="uppercase text-3xl text-primary font-medium tracking-widest">{{ appName }}</h1>
      </div>
    </div>
    <div class="max-w-sm mx-auto flex flex-col flex-grow h-full w-full mt-4">
      <h2 class="text-dark-text font-thin text-center">Welcome back! Please login to your account</h2>
      <input type="text" class="bg-transparent border-b w-full mt-8 pb-4 text-dark-text text-sm focus:outline-none" v-model="username" placeholder="Username">
      <input type="password" class="bg-transparent border-b w-full mt-8 pb-4 text-dark-text text-sm focus:outline-none" v-model="password" placeholder="Password">
      <div class="flex flex-row justify-between mt-4">
        <div class="flex flex-row items-center">
          <input type="checkbox" v-model="rememberMe" name="remember"> <label for="remember" class="text-dark-text ml-2 text-sm">Remember me</label>
        </div>
        <a href="#" class="text-dark-text underline font-thin text-sm">Forgot Password</a>
      </div>
      <div class="flex flex-row w-full justify-center mt-8">
        <app-button type="secondary" @clicked="login" class="w-full">Login</app-button>
      </div>
      <div class="flex flex-row w-full justify-center items-center mt-8">
        <span class="text-sm text-dark-text">Don't have an account?</span>
        <app-button class="ml-2" textType="dark-text" type="" border="true" borderType="secondary" @clicked="register">Sign Up</app-button>
      </div>
      <div class="mt-8">
        <app-powered-by-statement></app-powered-by-statement>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from '@/components/AppButton.vue'
import AppPoweredByStatement from '../../components/AppPoweredByStatement.vue'
export default {
  head() {
    return {
      title: this.$store.state.general.appName + ' | Home'
    }
  },
  layout: 'login',
  data() {
    return {
      username: undefined,
      password: undefined,
      rememberMe: false,
      appName: '',
    }
  },
  components: {
    AppButton,
    AppPoweredByStatement
  },
  methods: {
    // put your login logic here
    login () {
      // for demo purposes this will go straight to the main home screen without any login/authorization logic
      this.$router.push('/')
    },
    register () {
      this.$router.push('/register')
    }
  },
  mounted () {
    this.appName = this.$store.state.general.appName
  }
}
</script>
