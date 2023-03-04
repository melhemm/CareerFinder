<template>
  <div class="
    flex flex-col p-4 
    bg-white border-r 
    border-solid 
    border-gray-1 w-96"
    >
    <section class="pb-5">
      <JobFiltersSidebarPrompt />

      <Accordion header="Degrees">
        <JobFilterSidebarDegrees />
      </Accordion>

      <Accordion header="Skills and Qualifications">
        <JobFilterSidebarSkills />
      </Accordion>

      <Accordion header="Job Types">
        <JobFilterSidebarJobTypes />
      </Accordion>

      <Accordion header="Oraginzations">
        <JobFilterSidebarOrganizations />
      </Accordion>
    </section>
  </div>
</template>

<script>

import JobFilterSidebarDegrees from '@/components/JobResults/JobFiltersSidebar/JobFilterSidebarDegrees.vue';
import JobFilterSidebarJobTypes from '@/components/JobResults/JobFiltersSidebar/JobFilterSidebarJobTypes.vue';
import JobFilterSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFilterSidebarOrganizations.vue';
import JobFilterSidebarSkills from '@/components/JobResults/JobFiltersSidebar/JobFilterSidebarSkills.vue';
import JobFiltersSidebarPrompt from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue';

import Accordion from '@/components/Shared/Accordion.vue';

import { UPDATE_SKILLS_SEARCH_TERM } from '@/store/constants';

import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useStore } from 'vuex';


export default {
  name: "JobFilterSidebar",
  components: {
    JobFilterSidebarDegrees,
    JobFilterSidebarJobTypes,
    JobFilterSidebarOrganizations,
    JobFilterSidebarSkills,
    JobFiltersSidebarPrompt,
    Accordion
  },

  setup() {
    
    const parseSkillsSearchTerm = () => {
      const route = useRoute();
      const role = route.query.role || ""
      const store = useStore()
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role)
    }
    onMounted(parseSkillsSearchTerm)
  }
}
</script>
