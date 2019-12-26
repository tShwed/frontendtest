import Vuex from "vuex";
import { expect } from "chai";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Sidebar from "@/components/Sidebar";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.component("Sidebar", Sidebar);

describe("Sidebar.vue", () => {
  let store;
  let component;
  const state = {
    clickedSquares: [
      {
        id: "a1",
        className: "chess-square-light-checked"
      }
    ]
  };
  beforeEach(() => {
    store = new Vuex.Store({
      state
    });

    component = shallowMount(Sidebar, {
      store,
      localVue
    });
  });
  it("shows square id from store (with no 'x)'", () => {
    expect(component.find(".user-selection").text()).to.include("1) A1");
  });

  it("shows 'x' beside clicked square", () => {
    state.clickedSquares[0].className = "chess-square-light";
    expect(component.find(".user-selection").text()).to.include("1) A1  ❌");
  });
});
