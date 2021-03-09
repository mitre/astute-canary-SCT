<template>
  <div class="bg-gradient-to-b to-secondary from-primary w-full h-screen flex flex-col items-center">
    <div class="my-auto">
      <h1 class="uppercase text-4xl text-light-text font-bold tracking-widest">Astute Canary</h1>
      <h2 class="text-tertiary font-thin">Welcome back! Please login to your account</h2>
      <input type="text" class="bg-transparent border-b w-full mt-8 pb-4 text-light-text text-sm focus:outline-none" v-model="username" placeholder="Username">
      <input type="password" class="bg-transparent border-b w-full mt-8 pb-4 text-light-text text-sm focus:outline-none" v-model="password" placeholder="Password">
      <div class="flex flex-row justify-between mt-4">
        <div class="flex flex-row items-center">
          <input type="checkbox" v-model="rememberMe" name="remember"> <label for="remember" class="text-light-text ml-2 text-sm">Remember me</label>
        </div>
        <a href="#" class="text-light-text underline font-thin text-sm">Forgot Password</a>
      </div>
      <div class="flex flex-row justify-center mt-8">
        <Button type="light" @clicked="login" class="mr-8">Login</Button>
        <Button @clicked="register">Sign Up</Button>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/AppButton.vue'
export default {
  head: {
    title: 'Astute Canary | Login'
  },
  layout: 'login',
  data() {
    return {
      username: undefined,
      password: undefined,
      rememberMe: false
    }
  },
  component: {
    Button
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
  }
}
</script>
