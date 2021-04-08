<footer class="footer">
  <p class="footer__emphasis">
    Prénom NOM - Paris, 20<sub>ème</sub> - 06.06.06.06.06 - prenom.nom@email.fr
  </p>
  <p>
    Si je ne réponds pas, laissez moi un message, je vous recontacterai sans
    fautes au plus tard le soir même ou le lendemain&nbsp!
  </p>
  <p>Auto-entrepreneur - SIRET&nbsp: 000 000 000 00000</p>
</footer>

<style lang="scss">
  @import "../commons.scss";

  .footer {
    @include transparent-background-effect;
    width: 100%;
    padding: 15px;
    margin-top: 2em;
    text-align: center;
    &__emphasis {
      @include big-emphasis;
      //font-size: 1.3em;
    }
    p {
      margin: 0;
    }
  }
</style>
