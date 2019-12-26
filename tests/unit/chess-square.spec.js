import Vuex from "vuex";
import { expect } from "chai";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import ChessSquare from "@/components/chessboard/ChessSquare.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.component("ChessSquare", ChessSquare);

describe("ChessSquare.vue", () => {
  let store;
  let component;
  const squareData = {
    id: "a1",
    className: "chess-square-light"
  };

  const state = {
    clickedSquares: []
  };

  const mutations = {
    addToClickedSquares: () => squareData
  };

  beforeEach(() => {
    // Set up Vuex for future tests
    store = new Vuex.Store({
      state,
      mutations
    });

    component = shallowMount(ChessSquare, {
      store,
      localVue,
      propsData: { squareData }
    });
  });

  it("changes class when clicked", () => {
    component.find(".chess-square-light").trigger("click");
    expect(squareData.className).to.equal("chess-square-light-clicked");
  });
});
