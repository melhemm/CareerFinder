import getters from "@/store/getters";

describe('getters', () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it('Finds unique organaztions from list of jobs ', () => {
      const state = {
        jobs: [
          { organization: "Yahoo"},
          { organization: "Yandex"},
          { organization: "Yandex"}
        ]
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state)
      expect(result).toEqual(new Set(["Yahoo", "Yandex"]))
    });
  })

  describe("UNIQUE_JOB_TYPES", () => {
    it('Finds unique job types from list of jobs ', () => {
      const state = {
        jobs: [
          { jobType: "Full-time"},
          { jobType: "Part-time"},
          { jobType: "Full-time"}
        ]
      };
      const result = getters.UNIQUE_JOB_TYPES(state)
      expect(result).toEqual(new Set(["Part-time", "Full-time"]))
    });
  });
});
