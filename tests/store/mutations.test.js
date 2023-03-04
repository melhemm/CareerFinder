import mutations from "@/store/mutations";

describe('mutations', () => { 
  describe('LOGIN_USER', () => { 
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true })
    });
  });

  describe('RECIVE_JOBS', () => {
    it('receives jobs from api response', () => {
      const state = { jobs: [] }
      mutations.RECIVE_JOBS(state, ["Job 1", "Job 2"])
      expect(state).toEqual({jobs: ["Job 1", "Job 2"]})
    });
  });

  describe('ADD_SELECTED_ORGANIZATIONS', () => {
    it('updateds organizations that user select', () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org1", "Org2"]);
      expect(state).toEqual({ selectedOrganizations: ["Org1", "Org2"] })
    });
  });

  describe('ADD_SELECTED_JOB_TYPES', () => {
    it('updateds organizations that user select', () => {
      const state = { selectedJobTypes: [] };
      mutations.ADD_SELECTED_JOB_TYPES(state, ["Full-time", "Part-time"]);
      expect(state).toEqual({ selectedJobTypes: ["Full-time", "Part-time"] })
    });
  });
});
