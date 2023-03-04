import { computed } from "vue";
import { useStore } from "vuex";

import { FILTERD_JOBS, UNIQUE_JOB_TYPES, UNIQUE_ORGANIZATIONS, FETCH_JOBS, UNIQUE_DEGREES, FETCH_DEGREES } from "@/store/constants";

export const useFilteredJobs = () => {
  const store = useStore()
  return computed(() => store.getters[FILTERD_JOBS])
}

export const useUniqueJobTypes = () => {
  const store = useStore()
  return computed(() => store.getters[UNIQUE_JOB_TYPES])
}

export const useUniqueOrganizations = () => {
  const store = useStore()
  return computed(() => store.getters[UNIQUE_ORGANIZATIONS])
}

export const useUniqueDegrees = () => {
  const store = useStore()
  return computed(() => store.getters[UNIQUE_DEGREES])
}

export const useFetchJobsDispatch = () => {
  const store = useStore();
  store.dispatch(FETCH_JOBS)
}

export const useFetchDegreesDispatch = () => {
  const store = useStore();
  store.dispatch(FETCH_DEGREES)
}
