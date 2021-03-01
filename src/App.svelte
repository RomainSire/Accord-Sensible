<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Header from "./components/header.svelte";
</script>

<main>
  <Header />
  <Router {routes} />
</main>

<style lang="scss">
  main {
    background-image: url("../img/murLille.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: right 5% bottom 20%;
    width: 100vw;
    min-height: 100vh;
  }
</style>
