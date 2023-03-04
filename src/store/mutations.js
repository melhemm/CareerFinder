import {
  LOGIN_USER,
  RECIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  RECEVIE_DEGREES,
  ADD_SELECTED_DEGREE,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  UPDATE_SKILLS_SEARCH_TERM
} from '@/store/constants.js'

const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true
  },
  
  [RECIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  
  [RECEVIE_DEGREES](state, degrees) {
    state.degrees = degrees;
  },

  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganizations = organizations
  },
  [ADD_SELECTED_JOB_TYPES](state, jobTypes) {
    state.selectedJobTypes = jobTypes
  },
  [ADD_SELECTED_DEGREE](state, degrees) {
    state.selectedDegrees = degrees;
  },

  [CLEAR_USER_JOB_FILTER_SELECTIONS](state) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearchTerm = ""
  },

  [UPDATE_SKILLS_SEARCH_TERM](state, skillsSearchTerm) {
    state.skillsSearchTerm = skillsSearchTerm;
  }
};

export default mutations
