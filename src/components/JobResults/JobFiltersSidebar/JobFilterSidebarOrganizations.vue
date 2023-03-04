<template>
  <JobFiltersSidebarCheckboxGroup
    header="Oraginzations" 
    :uniqueValues="uniqueOrganizations" 
    :mutation="ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script>
import { useUniqueOrganizations } from '@/store/composables';
import { ADD_SELECTED_ORGANIZATIONS } from '@/store/constants';
import JobFiltersSidebarCheckboxGroup from './JobFiltersSidebarCheckboxGroup.vue';

export default {
  name: "JobFilterSidebarOrganizations",
  components: {
    JobFiltersSidebarCheckboxGroup
  },
  setup() {
    const uniqueOrganizations = useUniqueOrganizations();
    return { 
      uniqueOrganizations, 
      ADD_SELECTED_ORGANIZATIONS,
    }
  }
}

</script>
