<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-6xl mb-14" data-test='action-phrase'> 
      <span :class="actionClasses">{{action}}</span> 
      <br> 
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Rus Job</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementList'
export default {
  name: 'Headline',
  data() {
    return {
      action: "Build",
      interval: null
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true
      }
    }
  },
  created() {
    this.ChangeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    ChangeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000)
    }
  },
}
</script>

<style scoped>
  .build {
    color: #1a73eb;
  }

  .create {
    color: #14a853;
  }

  .design {
    color: #f9ab00;
  }

  .code {
   color: #d93025;
  }
</style>
