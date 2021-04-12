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
    <h1>Accord</h1>
    <p>
      L'accord de votre piano est une opération qu'il est nécessaire de faire <strong
        >au moins une fois par an</strong
      > de façon à ce que celui-ci&nbsp:
    </p>
    <ol>
      <li>
        reste toujours au bon diapason pour lequel il a été conçu, ce qui lui
        donnera le meilleur rendu possible au niveau de sa sonorité,
      </li>
      <li>ne se dérègle pas avec le temps.</li>
    </ol>
    <p>
      Pour accorder votre piano, il vous en coûtera 80 €uros pour un accord
      d'entretien "classique"* sur Paris**.
    </p>
    <p class="legend mt-s">
      * : Si votre piano a beaucoup baissé (de plus d'un quart de ton) par
      rapport au diapason (c'est à dire le LA 440 Hz), il sera absolument
      nécessaire de faire préalablement, un ou plusieurs préaccord(s), de façon
      à le "monter à la bonne hauteur" et le stabiliser.
    </p>
    <p class="legend">
      ** : Si vous habitez en Ile-de-France, il faudra rajouter des frais de
      déplacement, fonctions de l'éloignement et du temps passé dans les
      transports (de 5 à 15 € en + selon que vous habitez en zone 3 ou 5).
    </p>
  </div>
</div>

<style lang="scss">
  @import "../commons.scss";

  @include main-layout;

  .hero {
    background-image: url("../../img/chat.jpg");
  }
  .description {
    .legend {
      font-style: italic;
      font-size: 0.8em;
    }
  }
  .mt-s {
    margin-top: 1em;
  }
</style>
