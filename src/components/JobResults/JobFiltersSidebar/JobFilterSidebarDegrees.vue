<template>
  <JobFiltersSidebarCheckboxGroup
    :uniqueValues="uniqueDegrees" 
    :mutation="ADD_SELECTED_DEGREE"
  />
</template>

<script>
import {ADD_SELECTED_DEGREE } from '@/store/constants';
import { useUniqueDegrees } from '@/store/composables';
import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue';

export default {
  name: "JobFilterSidebarDegrees",
  components: {
    JobFiltersSidebarCheckboxGroup
  },
  setup() {
    const uniqueDegrees = useUniqueDegrees();
    return { uniqueDegrees, ADD_SELECTED_DEGREE }
  }
}
</script>
