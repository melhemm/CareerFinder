<template>
  <JobFiltersSidebarCheckboxGroup
    header="Job Types" 
    :uniqueValues="uniqueJobTypes" 
    :mutation="ADD_SELECTED_JOB_TYPES"
  />
</template>

<script>
import JobFiltersSidebarCheckboxGroup from './JobFiltersSidebarCheckboxGroup.vue';
import { useUniqueJobTypes } from '@/store/composables';
import { ADD_SELECTED_JOB_TYPES } from '@/store/constants';
export default {
  name: "JobFilterSidebarJobTypes",
  components: {
    JobFiltersSidebarCheckboxGroup
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    return { uniqueJobTypes, ADD_SELECTED_JOB_TYPES }
  }
}

</script>