<template>
  <form class="
    flex items-center 
    w-full h-12 mt-14 
    border border-solid 
    border-brand-gray-3
    rounded-3xl"
    @submit.prevent="searchForJobs" 
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full">
        <label class="absolute left-0 -top-10">Role</label>
        <TextInput 
          placeholder="Software engineer" 
          v-model="role"
          data-test='role-input'
        />
      </div>
      <span 
        class="flex items-center h-full 
        px-3 border-l border-r 
        border-brand-gray-3 bg-brand-gray-2">in
      </span>

      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <TextInput 
          placeholder="Moscow" 
          v-model="location" 
          data-test='location-input'
        />
      </div>
    </div>
    <ActionButton data-test='form-submit-button' text="Search"/>
  </form>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import TextInput from '@/components/Shared/TextInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "JobSearchFrom",
  components: {
    ActionButton,
    TextInput
  },
  setup() {
    const router = useRouter("");
    const role = ref("")
    const location = ref("");

    const searchForJobs = () => {
      router.push({
        name: "JobResults",
        query: {role: role.value, location: location.value}
      })
    }

    return { role, location, searchForJobs }  
  }
}
</script>
