import state from "@/store/state";

describe('State', () => {
  it("Keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false)
  })

  it('store job listings', () => {
    const startingState = state()
    expect(startingState.jobs).toEqual([])
  });
  
  it('stores organizations that the user filter jobs by', () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([])
  });

  it('stores job types that the user would like to filter', () => {
    const startingState = state() 
    expect(startingState.selectedJobTypes).toEqual([]);
  });
  
});
