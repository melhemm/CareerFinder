import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  UNIQUE_DEGREES,
  FILTERD_JOBS,
  INCLUDE_JOB_BY_ORGANIZATION,
  INCLUDE_JOB__BY_JOB_TYPES,
  INCLUDE_JOB_BY_DEGREE,
  INCLUDE_JOB_BY_SKILL
} from '@/store/constants.js'

const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const unique_organizations = new Set();
    state.jobs.forEach((job) => unique_organizations.add(job.organization))
    return unique_organizations;
  },
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType))
    return uniqueJobTypes;
  },
  [UNIQUE_DEGREES](state) {
    const unique_degrees = new Set();
    state.jobs.forEach((job) => unique_degrees.add(job.degree))
    return unique_degrees;
  },
  [INCLUDE_JOB_BY_ORGANIZATION]: (state) => (job) => {
    if(state.selectedOrganizations.length === 0) return true
    return state.selectedOrganizations.includes(job.organization)
  },

  [INCLUDE_JOB__BY_JOB_TYPES]: (state) => (job) => {
    if(state.selectedJobTypes.length === 0) return true
    return state.selectedJobTypes.includes(job.jobType)
  },

  [INCLUDE_JOB_BY_DEGREE]: (state) => (job) => {
    if(state.selectedDegrees.length === 0) return true
    return state.selectedDegrees.includes(job.degree)
  },

  [INCLUDE_JOB_BY_SKILL]: (state) => (job) => {
   return job.title.toLowerCase()
   .includes(state.skillsSearchTerm.toLowerCase())
  },

  [FILTERD_JOBS](state, getters) {
    return state.jobs
    .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
    .filter((job) => getters.INCLUDE_JOB__BY_JOB_TYPES(job))
    .filter((job) => getters.INCLUDE_JOB_BY_DEGREE(job))
    .filter((job) => getters.INCLUDE_JOB_BY_SKILL(job))
  }
}

export default getters;
