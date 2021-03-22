<script>
  import Menu from "./menu.svelte";
</script>

<header class="header">
  <div class="logo">
    <a href="#/">
      <img src="img/logo.png" alt="Logo de L'Accord Sensible" />
    </a>
  </div>
  <Menu />
</header>

<style lang="scss">
  @import "../variables.scss";

  .header {
    @include transparent-background-effect;
    width: 100%;
    padding: 15px;
    margin-bottom: 2em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }
  .logo {
    text-align: center;
    img {
      width: 300px;
      max-width: 100%;
    }
  }
</style>
