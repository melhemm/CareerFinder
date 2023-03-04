import { mount } from "@vue/test-utils";

import Accordion from '@/components/Shared/Accordion.vue';

describe('Accordion', () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true
      }
    },
    props: {
      header: "Test Header"
    },
    slots: {
      default: "<h3>My yest child</h3>"
    },
    ...config
  })

  it('renders child', async() => {
    const slots = {
      default: "<h3>My yest child</h3>"
    };
    const config = { slots }
    const wrapper = mount(Accordion, createConfig(config))
    expect(wrapper.text()).not.toMatch("My yest child");
    const clickArea = wrapper.find("[data-test='click-area']")
    await clickArea.trigger("click");

    expect(wrapper.text()).toMatch("My yest child");
  });

  describe('When we do not provide custom child content', () => {
    it('renders default content', async() => {
      const slots = {};
      const config = { slots }
      const wrapper = mount(Accordion, createConfig(config))
      const clickArea = wrapper.find("[data-test='click-area']")
      await clickArea.trigger("click");

      expect(wrapper.text()).toMatch("Some thing went wrong");
    });
  });
});
