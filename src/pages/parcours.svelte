<div class="wrapper">
  <div class="hero" />
  <div class="description">
    <h1>Mon parcours... en quelques mots</h1>

    <p>
      Diplômé de l'ITEMM (Institut Technologique Européen des Métiers de la
      Musique, au Mans), je suis aussi musicien (saxophoniste de jazz au sein du
      BOA), et je travaille à mi-temps dans une entreprise de télécommunications
      en tant qu'ingénieur d'études...
    </p>
    <p><strong> Musicalement,</strong></p>
    <p class="signature">
      <img src="favicon.png" alt="signature" />
    </p>
  </div>
</div>

<style lang="scss">
  @import "../commons.scss";

  @include hero-description-layout;

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
