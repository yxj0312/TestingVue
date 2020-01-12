import { expect } from "expect";
import { shallowMount } from "@vue/test-utils";
import Countdown from "@/components/Countdown.vue";
import moment from 'moment';

describe("Countdown", () => {
  let wrapper;

  beforeEach(() => {
    // wrapper = mount(Countdown)
    wrapper = shallowMount(Countdown, {
      propsData: {
        until: moment().add(10, "seconds")
      }
    });
    console.log(moment().add(10, "seconds"))
  });

  it("renders a countdown timer", () => {
    wrapper = shallowMount(Countdown);
    // wrapper.setProps({ until: moment().add(10, 'seconds') })
    //  <countdown until="December 5 2017"
    // console.log('!23');
    see("10 secondes");
  });

  // Helper Functions

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;

    expect(wrap.html()).toContain(text);
  };

  // it("renders even numbers", () => {
  //   const wrapper = shallowMount(Countdown, {
  //     propsData: {
  //       even: true
  //     }
  //   });

  //   // expect(wrapper.text()).to.include("123");
  //   // expect(wrapper.text().includes('"123"')).toBe(true);
  // });
});