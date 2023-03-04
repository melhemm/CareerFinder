const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    job: {},
    degrees: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: [],
    skillsSearchTerm: ""
  }
}

export default state;
