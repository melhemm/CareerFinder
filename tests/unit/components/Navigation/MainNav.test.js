import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createStore } from "vuex";
import MainNav from '@/components/Navigation/MainNav.vue'

describe("MainNav", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store
      },
      stubs: {
        "router-link": RouterLinkStub
      }
    }
  })
  
  it("displays company name", () => {
    const $store = {
      state: {
        isLoggedIn: false
      }
    };
    const wrapper = shallowMount(MainNav, createConfig($store))
    expect(wrapper.text()).toMatch("RUS Careers");
  })

  describe('when user is logged in', () => {
    it('displays user profile picture', async() => {
      const $store = {
        state: {
          isLoggedIn: true
        }
      };
      const wrapper = shallowMount(MainNav, createConfig($store))
      const profileImage = wrapper.find("[data-test='profile-image']")
      expect(profileImage.exists()).toBe(true)
    });
  
    it("displays sub navigation with additional information", async() => {
      const $store = {
        state: {
          isLoggedIn: true
        }
      };
      const wrapper = shallowMount(MainNav, createConfig($store))
      const subnav = wrapper.find("[data-test='subnav']")
      expect(subnav.exists()).toBe(true)
    })
  });

  describe('when user is logged out', () => {
    it('issues call to vuex to login user', async() => {
      const commit = jest.fn()
      const $store = {
        state: {
          isLoggedIn: false
        },
        commit,
      };
      const wrapper = shallowMount(MainNav, createConfig($store))
      const loginButton = wrapper.find("[data-test='login-button']")
      await loginButton.trigger("click")
      expect(commit).toHaveBeenCalledWith("LOGIN_USER")
    });
  })
})
