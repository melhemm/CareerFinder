import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => { 
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Vue",
    ...jobProps
  })
  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps
      }
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub
      }
    }
  })

  it('renders job title', () => {
    const jobProps = createJobProps({title: "Vue Developer"})
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue Developer")
  });

  it('renders job organization', () => {
    const jobProps = createJobProps({organization: "Vue"})
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue")
  });

  it('renders job locations', () => {
    const jobProps = createJobProps({locations: ["NY", "Orlando"]})
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("NY")
    expect(wrapper.text()).toMatch("Orlando")
  });

  it('renders job Qualifications', () => {
    const jobProps = createJobProps({minimumQualifications: ["PHD", "Master"]})
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("PHD")
    expect(wrapper.text()).toMatch("Master")
  });

  it("Linls to single job's page", () => {
    const jobProps = createJobProps({
      id: 15
    })
    const wrapper = mount(JobListing, createConfig(jobProps))
    const jobPageLink = wrapper.findComponent(RouterLinkStub)
    const toProp =  jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15")
  })
})
