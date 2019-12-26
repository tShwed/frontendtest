<template>
  <div
    class="chess-square"
    :class="this.squareData.className"
    v-on:click="this.handleSquareClick"
  ></div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ChessSquare",
  // Data passed in from the Chessboard. It contains the coordinate of the square that's been clicked, and the color
  props: ["squareData"],
  data() {
    return {
      // Save the color class on the component for when we switch back and forth from the clicked state
      colorClass: this.squareData.className
    };
  },
  methods: {
    ...mapMutations(["addToClickedSquares"]),
    handleSquareClick: function() {
      // Switch back and forth between our checked and unchecked state
      if (this.squareData.className === this.colorClass) {
        this.squareData.className = this.squareData.className + "-clicked"; // Set highlighed color
      } else {
        this.squareData.className = this.colorClass; // Return the color to it's original state
      }
      const squareData = Object.assign({}, this.squareData); // Make a copy of our data to give to Vuex
      this.$store.commit("addToClickedSquares", squareData); // Send data to Vuex
    }
  }
};
</script>

<style lang="scss" scoped>
.chess-square {
  width: 100%;
  padding-bottom: 100%;

  &-dark {
    background: #779556;
    &-clicked {
      background: #e6912c;
    }
  }

  &-light {
    background: #ebecd0;
    &-clicked {
      background: #ffc175;
    }
  }

  &:hover {
    background: #ffd394;
  }
}
</style>
