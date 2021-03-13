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
  .header {
    background: #3339;
    box-shadow: 0 0 10px #333;
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
      width: 350px;
      max-width: 100%;
    }
  }
</style>
