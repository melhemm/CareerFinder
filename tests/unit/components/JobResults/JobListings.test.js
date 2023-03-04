import { shallowMount, flushPromises, RouterLinkStub } from '@vue/test-utils'

import { useFilteredJobs, useFetchJobsDispatch } from '@/store/composables';
jest.mock("@/store/composables")

import useCurrentPage from '@/composables/useCurrentPage';
jest.mock("@/composables/useCurrentPage")

import usePreviousAndNextPage from '@/composables/usePreviousAndNextPages';
jest.mock("@/composables/usePreviousAndNextPages")

import JobListings from '@/components/JobResults/JobListings.vue'

describe('JobListings', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        'router-link': RouterLinkStub
      }
    }
  });

  describe('when component mounts', () => {
    it('make call to fetch jobs from API', () => {
      useFilteredJobs.mockReturnValue({ value: [] })
      useCurrentPage.mockReturnValue({ value: 2 })
      usePreviousAndNextPage.mockReturnValue({ previousPage:  1, nextPage: 3})
      shallowMount(JobListings, createConfig());
      expect(useFetchJobsDispatch).toHaveBeenCalled()
    });
    
  });

  fit("creates a job listing for 10 jobs", async() => {
    useFilteredJobs.mockReturnValue({ value: Array(15).fill({}) })
    useCurrentPage.mockReturnValue({ value: 1 })
    usePreviousAndNextPage.mockReturnValue({ previousPage: undefined, nextPage: 2})
    const wrapper = shallowMount(JobListings, createConfig())
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10)
  });

  describe('When params exclude page number', () => { 
    it('displays page number 1', () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams)
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store))
      expect(wrapper.text()).toMatch("Page 1")
    });
  })

  describe('When query params include page number', () => { 
    it('displays page number', () => {
      const queryParams = { page: "3" };
      const $route = createRoute(queryParams)     
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store))
      expect(wrapper.text()).toMatch("Page 3")
    });
  });

  describe('when user is on first page of job results', () => { 
    it('does not show link to previous page', () => {
      const queryParams = { page: "1" }
      const $route = createRoute(queryParams)
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store))
      const previousPage = wrapper.find("[data-test='previous-page-link']")
      expect(previousPage.exists()).toBe(false)
    });

    it('shows link to next page', () => {
      const queryParams = { page: "1" }
      const $route = createRoute(queryParams)
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store))
      const nextPage = wrapper.find("[data-test='next-page-link']")
      expect(nextPage.exists()).toBe(false)
    });

    describe('when user is on last page', () => {
      it('does not show link to next page', () => {
        const queryParams = {page: "2"}
        const $route = createRoute(queryParams)
        const $store = createStore({
          state: {
            jobs: Array(15).fill({})
          }
        })
        const wrapper = shallowMount(JobListings, createConfig($route, $store))
        const nextPage = wrapper.find("[data-test='next-page-link']")
        expect(nextPage.exists()).toBe(false)
      });
      
      it('shows link to previous page', () => {
        const queryParams = {page: "2"}
        const $route = createRoute(queryParams)
        const $store = createStore({
          state: {
            jobs: Array(15).fill({})
          }
        })
        const wrapper = shallowMount(JobListings, createConfig($route, $store))
        const nextPage = wrapper.find("[data-test='previous-page-link']")
        expect(nextPage.exists()).toBe(true)
      });
    });
  })
})
