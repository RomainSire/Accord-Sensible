<div class="wrapper">
  <div class="hero" />
  <div class="description">
    <h1>Les services que je vous propose :</h1>
    <p>
      <strong><a href="#/accord">Accorder</a></strong> votre piano,
      <strong><a href="#/reglages">Régler</a></strong>
      la mécanique, <strong><a href="#/reparations">Réparer</a></strong> les
      pièces défectueuses, vous
      <strong><a href="#/conseils">Conseiller</a></strong>...
    </p>
    <p>
      Je suis disponible toute la journée, de préférence les jeudis, vendredis,
      ainsi que le samedi matin.
    </p>
    <p>Pour tout renseignement, n'hésitez pas à me contacter !</p>
    <p><strong>Musicalement,</strong></p>
    <p class="signature">
      <img src="favicon.png" alt="signature" />
    </p>
  </div>
</div>

<style lang="scss">
  @import "../commons.scss";

  @include main-layout;

  .hero {
    background-image: url("../../img/heroBanner.jpg");
  }
  .description {
    .signature {
      margin-top: 0.5em;
      img {
        width: 50px;
      }
    }
  }
</style>
