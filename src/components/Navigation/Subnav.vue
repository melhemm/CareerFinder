<template>
  <div v-if="onJobResultsPage" data-test='job-count' class="border-b border-solid border-x-brand-gray-1 w-full h-16 bg-white">
    <div class="flex items-center h-full px-8">
      <div >
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">
            {{FILTERD_JOBS.length}}
          </span>
          Jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import useConfirmRoute from "@/composables/useConfirmRoute"

export default {
  name: "Subnav",
  setup() {
    const store = useStore()
    const FILTERD_JOBS = computed(() => store.getters.FILTERD_JOBS)

    const onJobResultsPage = useConfirmRoute("JobResults")

    return { onJobResultsPage, FILTERD_JOBS }
  }
}
</script>
