<template>
  <div class="mt-5">
    <input v-model.lazy.trim="skillsSearchTerm" type="search"
      class="p-3 
      h-12 
      border 
      border-solid
      border-brand-gray-1 
      shadow-gray rounded 
      w-full 
      text-base"
      placeholder="Computer programming"
     >
  </div>
</template>

<script>
import { UPDATE_SKILLS_SEARCH_TERM } from '@/store/constants';
import { computed } from 'vue';
import { useStore } from 'vuex';

  export default {
    name: "JobFilterSidebarSkills",
    setup() {
      const store = useStore();
      const skillsSearchTerm = computed({
        get() {
          return store.state.skillsSearchTerm;
        },
        set(value) {
          store.commit(UPDATE_SKILLS_SEARCH_TERM, value)
        }
      })
      return { skillsSearchTerm }
    }
  }
</script>