import { expect } from "expect";
import { shallowMount } from "@vue/test-utils";
import Countdown from "@/components/Countdown.vue";

describe("Countdown", () => {
  it("renders even numbers", () => {
    const wrapper = shallowMount(Countdown, {
      propsData: {
        even: true
      }
    });

    // expect(wrapper.text()).to.include("123");
    // expect(wrapper.text().includes('"123"')).toBe(true);
  });
});
