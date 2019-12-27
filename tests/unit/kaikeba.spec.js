import Vue from "vue";
import Kaikeba from "@/components/Kaikeba.vue";
import {mount} from '@vue/test-utils'

describe("测试开课吧组件", () => {
  it("初始化的message", () => {
    let data = Kaikeba.data();
    expect(data.message).toBe("vue-text");
  });
  it("生命周期", () => {
    let vm = new Vue( Kaikeba).$mount();
    expect(vm.message).toBe("create-text");
  });
  it("点击", () => {
    let wrapper = mount(Kaikeba)
    wrapper.find('button').trigger('click')
    //let vm = new Vue( Kaikeba).$mount();
    expect(wrapper.vm.message).toBe("click-text");
  });
});
