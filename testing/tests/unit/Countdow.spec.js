import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Countdown from "@/components/Countdown.vue";

describe("Countdown", () => {
  it("renders even numbers", () => {
    const wrapper = shallowMount(Countdown, {
      propsData: {
        even: true
      }
    });

    expect(wrapper.text()).to.include("123");
  });
});
