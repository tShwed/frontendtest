<template>
  <div class="chessboard">
    <!-- A small message to give to the user if their device is slow-->
    <h2 v-if="this.chessSquares.h.length < 7">
      Your chessboard is loading. Please wait
    </h2>

    <div
      class="chessboard-column"
      v-for="(array, key) in chessSquares"
      :key="key"
    >
      <div class="chessboard-column-letter">
        {{ key.toUpperCase() }}
      </div>
      <div
        class="chess-square-wrapper"
        v-for="(square, index) in array"
        :key="square.id"
      >
        <div v-if="key == 'a'" class="chessboard-row-num">
          {{ index + 1 }}
        </div>
        <ChessSquare :square-data="square" />
      </div>
    </div>
  </div>
</template>

<script>
import ChessSquare from "./ChessSquare";
export default {
  name: "Chessboard",
  components: {
    ChessSquare
  },
  data: function() {
    return {
      // Storing our squares in an object with each key represeting each column
      // Allows for quick and efficient lookup if we ever need to change data on our squares
      chessSquares: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: []
      }
    };
  },

  methods: {
    // Simple method to help with our init logic below. Calculating dark/light squares
    // based off of odd and even indexes in our loop
    isEven(number) {
      return number % 2 == 0;
    }
  },
  mounted() {
    // Generate data for the chessboard. Loop through our chessSquares object. Each key represents
    // a column, which we'll push the coordinate (A1, B3 etc.) as the ID and color class name
    Object.keys(this.chessSquares).forEach((row, index) => {
      // Even columns start with a dark square, odd starts with a light square
      let isEven = this.isEven(index);
      for (let i = 0; i < 8; i++) {
        const squareData = { id: `${row}${i + 1}` };
        // Give the class name to each square
        if (isEven) {
          squareData.className = this.isEven(i)
            ? "chess-square-dark"
            : "chess-square-light";
        } else {
          squareData.className = this.isEven(i)
            ? "chess-square-light"
            : "chess-square-dark";
        }
        this.chessSquares[row].push(squareData);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.chessboard {
  display: flex;
  width: 100%;

  .chessboard-column {
    flex-wrap: wrap;
    width: 12.5%;
    height: 100%;

    &-letter {
      text-align: center;
      font-weight: bold;
    }

    .chessboard-row-num {
      float: left;
      position: absolute;
      margin-left: -15px;
      margin-top: 40px;
      font-weight: bold;
    }
  }
}

@media only screen and (max-width: 768px) {
  .chessboard {
    .chessboard-column {
      .chessboard-row-num {
        margin-top: 0;
      }
    }
  }
}
</style>
