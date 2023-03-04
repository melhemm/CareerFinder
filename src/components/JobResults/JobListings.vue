<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" data-test='job-listing' />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link 
            class="mx-3 text-sm font-semibold text-brand-blue-1" 
            v-if="previousPage" 
            :to="{name: 'JobResults', query: {page: previousPage} }"
            data-test='previous-page-link'
            >Previews</router-link>

          <router-link 
            class="mx-3 text-sm font-semibold text-brand-blue-1" 
            v-if="nextPage" 
            :to="{name: 'JobResults', query: {page: nextPage} }"
            data-test='next-page-link'
            >Next</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, computed } from 'vue';

import { useFilteredJobs, useFetchJobsDispatch, useFetchDegreesDispatch } from '@/store/composables';

import JobListing from '@/components/JobResults/JobListing.vue';
import useCurrentPage from "@/composables/useCurrentPage"
import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages'

export default {
  name: "JobListings",
  components: {
    JobListing
  },
  setup() {
    onMounted(useFetchJobsDispatch)
    onMounted(useFetchDegreesDispatch)

    const filteredJobs = useFilteredJobs();
    const currentPage = useCurrentPage();
    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10))

    const {previousPage, nextPage} = usePreviousAndNextPages(
      currentPage, 
      maxPage
    );
    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    })
    return { previousPage, nextPage, displayedJobs, currentPage }
  }
}
</script>
