<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
</script>

<div class="container">
  <Header />
  <main class="main">
    <Router {routes} />
  </main>
  <Footer />
</div>

<style lang="scss">
  @import "./commons.scss";

  .container {
    background-image: url("../img/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: right 5% bottom 20%;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
