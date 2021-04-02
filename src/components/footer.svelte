<footer class="footer">
  <p class="footer__emphasis">
    Prénom Nom - 75020 PARIS - Tél. : 06.06.06.06.06 - Mail : prenom.nom@email.fr
  </p>
  <p>
    Si je ne réponds pas, laissez moi un message, je vous recontacterai sans
    fautes au plus tard le soir même ou le lendemain !
  </p>
  <p>Auto-entrepreneur - SIRET : 000 000 000 00000</p>
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
      font-size: 1.3em;
    }
  }
</style>
