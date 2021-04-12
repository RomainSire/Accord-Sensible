<script>
  import { slide } from "svelte/transition";
</script>

<div
  class="wrapper"
  in:slide={{ delay: 500, duration: 500 }}
  out:slide={{ duration: 500 }}
>
  <div class="hero" />
  <div class="description">
    <h1>404</h1>
    <p>La page demandée n'existe pas&nbsp!</p>
    <p>Vous pouvez utiliser le menu pour consulter une autre page...</p>
  </div>
</div>

<style lang="scss">
  @import "../commons.scss";

  @include main-layout;

  .hero {
    background-image: url("../../img/404.jpg");
  }
</style>
