<template>
  <div id="app">
    <div class="nav-bar">
      <img
        src="https://assets.website-files.com/5a63cec143f71000016b5b7f/5a63cec143f71000016b5b99_Logo2.png"
      />
      <h1 class="project-title">
        Front End Project
      </h1>
    </div>
    <div class="app-container">
      <div class="chessboard-container">
        <Chessboard />
      </div>
      <div class="sidebar-container">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Chessboard from "./components/chessboard/Chessboard.vue";
import Sidebar from "./components/Sidebar";

export default {
  name: "app",
  components: {
    Chessboard,
    Sidebar
  }
};
</script>

<style lang="scss">
html {
  background: #262521;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;

  .nav-bar {
    display: flex;
    flex-direction: row;
    background: #262521;

    img {
      width: 150px;
      height: 50px;
      margin: 10px 20px 20px 20px;
    }

    h1 {
      margin-left: 20px;
    }
  }

  .app-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-height: 100vh;

    .chessboard-container {
      flex: 50%;
      height: 100%;
      width: 100%;
      max-width: 800px;
      margin: 0 20px 0 10px;
      background: #312e2b;
      padding: 20px;
      border-radius: 2px;
    }

    .sidebar-container {
      flex: 50%;
      background: #312e2b;
      padding: 0 5px;
      border-radius: 2px;
    }
  }
}
// Mobile responsiveness
@media only screen and (max-width: 768px) {
  #app {
    .nav-bar {
      .project-title {
        // Looks weird on mobile. Better to hide it
        display: none;
      }
    }
    .app-container {
      flex-direction: column;

      .chessboard-container {
        flex: 100%;
        width: 90%;
      }

      .sidebar-container {
        flex: 100%;
        margin: 10px 0 10px 10px;
      }
    }
  }
}
</style>
