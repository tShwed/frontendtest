<template>
  <div class="sidebar">
    <h2>User Actions</h2>
    <p v-if="this.$store.state.clickedSquares.length === 0">
      No squares have been selected...
    </p>
    <ul>
      <li
        v-for="(square, index) in this.$store.state.clickedSquares"
        :key="index"
      >
        <div class="user-selection">
          {{ index + 1 }})
          {{ square.id.toUpperCase() }}
          <div class="user-selection-unchecked">
            {{ square.className.includes("clicked") ? "" : "❌" }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
.sidebar {
  margin: 10px;
  max-height: 800px;
  overflow: auto;
  ul {
    list-style-type: none;
  }
  .user-selection {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    margin-top: 5px;

    &-unchecked {
      font-size: 11px;
      margin-left: 5px;
    }
  }
}
</style>
