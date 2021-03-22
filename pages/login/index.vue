<template>
  <div class="bg-primary w-full min-h-screen flex flex-col items-center pb-24">
    <div class="my-auto max-w-sm">
      <img src="~/assets/images/Logo.svg" width="200" class="mx-auto opacity-50 mb-8"/>
      <h1 class="uppercase text-4xl text-light-text font-medium tracking-widest">{{ appName }}</h1>
      <h2 class="text-tertiary font-thin">Welcome back! Please login to your account</h2>
      <input type="text" class="bg-transparent border-b w-full mt-8 pb-4 text-light-text text-sm focus:outline-none" v-model="username" placeholder="Username">
      <input type="password" class="bg-transparent border-b w-full mt-8 pb-4 text-light-text text-sm focus:outline-none" v-model="password" placeholder="Password">
      <div class="flex flex-row justify-between mt-4">
        <div class="flex flex-row items-center">
          <input type="checkbox" v-model="rememberMe" name="remember"> <label for="remember" class="text-light-text ml-2 text-sm">Remember me</label>
        </div>
        <a href="#" class="text-light-text underline font-thin text-sm">Forgot Password</a>
      </div>
      <div class="flex flex-row w-full justify-center mt-8">
        <app-button type="accent" @clicked="login" class="w-full">Login</app-button>
      </div>
      <div class="flex flex-row w-full justify-center items-center mt-8">
        <span class="text-sm text-light-text">Don't have an account?</span>
        <app-button textType="accent" @clicked="register">Sign Up</app-button>
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
