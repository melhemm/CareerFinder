<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
    <div class="flex items-center text-sm">
      <ActionButton text="Clear filters" type="secondary" @click="clearJobFilterSelections" />
    </div>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue';
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from '@/store/constants';

import { useStore } from 'vuex';

export default {
  name: "JobFiltersSidebarPrompt",
  components: {
    ActionButton
  },
  setup() {
    const store = useStore()
    const clearJobFilterSelections = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS)
    } 
    return { 
      clearJobFilterSelections,
    }
  }
}
</script>