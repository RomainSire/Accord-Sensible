<div class="wrapper">
  <div class="hero">
    <!-- <img src="img/heroBanner.jpg" alt="Travail d'accord de piano" /> -->
  </div>
  <div class="description">
    <h1>Les services que je vous propose :</h1>
    <p>
      <strong>Accorder</strong> votre piano, <strong>Régler</strong> la
      mécanique, <strong>Réparer</strong> les pièces défectueuses, vous
      <strong>Conseiller</strong>...
    </p>
    <p>
      Je suis disponible toute la journée, de préférence les jeudis, vendredis,
      ainsi que le samedi matin.
    </p>
    <p>Pour tout renseignement, n'hésitez pas à me contacter !</p>
    <p><strong>Musicalement,</strong></p>
    <p class="signature">
      <img class="signature" src="favicon.png" alt="signature">
    </p>
  </div>
</div>

<style lang="scss">
  @import "../variables.scss";

  .wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
  }
  .hero {
    flex: 1;
    background-image: url("../../img/heroBanner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .description {
    flex: 1;
    padding: 30px 50px;
    .signature {
      margin-top: 0.5em;
      img {
        width: 50px;
      }
    }
    strong {
      @include big-emphasis;
    }
  }
</style>
