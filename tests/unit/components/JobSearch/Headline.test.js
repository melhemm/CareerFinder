import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Headline from "@/components/JobSearch/Headline.vue";

describe('Headline', () => { 
  beforeEach(() => {
    jest.useFakeTimers();
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('Jest playground', () => { 
    it('displays action verb', () => {
      
      const wrapper = mount(Headline)
      const actionPhrase = wrapper.find("[data-test='action-phrase']");
      expect(actionPhrase.text()).toBe("Build for everyone")

    });

    // it('change action verb at a consistent interval', async() => {
    //   mount(Headline);
    //   expect(setInterval).toHaveBeenCalled();
    // });

    it('swaps action verb after first interval', async() => {
      jest.useFakeTimers(Headline);
      const wrapper = mount(Headline);
      jest.runOnlyPendingTimers();
      await nextTick()
      const actionPhrase = wrapper.find("[data-test='action-phrase']");
      expect(actionPhrase.text()).toBe('Create for everyone');
    });

    // it('Remove interval when component disappears', () => {
    //   const wrapper = mount(Headline);
    //   wrapper.unmount();
    //   expect(clearInterval).toHaveBeenCalled()
    // })
  });
})
