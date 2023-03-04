import { mount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex")
const useStoreMock = useStore;

import { useRouter } from "vue-router";
const useRouterMock = useRouter
jest.mock("vue-router")


import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue';

describe('JobFiltersSidebarCheckboxGroup', () => {
  const createConfig = (props) => ({
    props: {
      uniqueValues: new Set(["ValueA", "ValueB"]),
      mutation: "Some Mutation",
      ...props
    }
  });

  it('renders unique list of job types for filtering jobs', async() => {
    useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });
    const props = {
      uniqueValues: new Set(["ValueA", "ValueB"])
    }
    const wrapper = mount(JobFiltersSidebarCheckboxGroup, createConfig(props));
    const inputLabels = wrapper.findAll("[data-test='value']")
    const inputValues = inputLabels.map((node) => node.text());
    expect(inputValues).toEqual(["ValueA", "ValueB"])
  });
});
