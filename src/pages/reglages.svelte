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
    <h1>Réglages</h1>
    <p>
      Les <strong>réglages sont essentiels</strong> pour que votre piano fonctionne
      correctement, bien que nombre sont ceux qui ignorent qu'un piano se règle bel
      et bien&nbsp!
    </p>
    <p>
      Il y a essentiellement <strong>13 réglages</strong> qui doivent être faits
      et ce d'autant plus que votre piano a de la valeur et qu'il est beaucoup joué.
    </p>
    <p>Par réglages on entend&nbsp:</p>
    <ol>
      <li>Mise sous le nez</li>
      <li>Echappement</li>
      <li>...</li>
    </ol>
  </div>
</div>

<style lang="scss">
  @import "../commons.scss";

  @include main-layout;

  .hero {
    background-image: url("../../img/marteau.jpg");
  }
</style>
