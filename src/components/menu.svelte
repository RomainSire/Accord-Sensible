<script>
  /**
   * Toggle the full screen navigation menu
   * @param event {Object} Event object triggered on click
   */
  function toggleMenu(event) {
    event.stopPropagation();
    const menuElement = document.getElementById("navigation-menu");
    const backgroundElement = document.getElementById("background-menu");
    if (menuElement.classList.contains("hidden")) {
      menuElement.classList.remove("hidden");
      backgroundElement.classList.remove("hidden");
    } else if (!menuElement.classList.contains("hidden")) {
      menuElement.classList.add("hidden");
      backgroundElement.classList.add("hidden");
    }
  }

  /**
   * Utilitary function used to pervent event propagation
   * @param event {Object} Event object triggered on click
   */
  function stopPropagation(event) {
    event.stopPropagation();
  }
</script>

<div class="post-it" on:click={toggleMenu}>
  <p>Menu</p>
</div>

<div class="bg-cover hidden" id="background-menu" on:click={toggleMenu}>
  <nav
    class="navigation hidden"
    id="navigation-menu"
    on:click={stopPropagation}
  >
    <ul>
      <li><a href="#/">Accueil</a></li>
      <li><a href="#/">Accord</a></li>
      <li><a href="#/">Réglages</a></li>
      <li><a href="#/">Réparations</a></li>
      <li><a href="#/">Conseil</a></li>
      <li><a href="#/">Photos</a></li>
      <li><a href="#/">Amis</a></li>
      <li><a href="#/">Mon parcours</a></li>
    </ul>
    <div class="navigation__close" on:click={toggleMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  </nav>
</div>

<style lang="scss">
  @import "../variables.scss";

  @mixin post-it-visual {
    position: relative;
    background: #ffa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    border-radius: 0 0 0 30px/45px;
    box-shadow: inset 0 -20px 20px rgba(0, 0, 0, 0.2),
      inset 0 12px 5px rgba(0, 0, 0, 0.2), 0 5px 6px 5px rgba(0, 0, 0, 0.2);
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 25px;
      background: #ffa;
      box-shadow: 3px -2px 10px rgba(0, 0, 0, 0.2),
        inset 15px -15px 15px rgba(0, 0, 0, 0.3);
      left: 0;
      bottom: 0;
      z-index: 2;
      transform: skewX(25deg);
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 70%;
      height: 15%;
      border-top: 3px solid #130d6b;
      border-radius: 50%;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  p {
    color: black;
  }

  .post-it {
    @include post-it-visual;
    height: 4em;
    width: 7em;
    margin: 1em;
    font-family: "Potta One", cursive;
    cursor: pointer;
    transform: rotate(-5deg);
    transition: transform 0.15s linear;
    &:hover {
      transform: scale(1.15);
      position: relative;
      z-index: 5;
    }
  }

  .bg-cover {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: $color_background;
    opacity: 100%;
    transition: opacity 300ms;
  }

  .navigation {
    // Récupération et ajustement du visuel de post-it
    @include post-it-visual;
    box-shadow: inset 0 -40px 40px rgba(0, 0, 0, 0.2),
      inset 0 25px 10px rgba(0, 0, 0, 0.2), 0 5px 6px 5px rgba(0, 0, 0, 0.2);
    &:after {
      height: 5%;
    }

    // Positionnement
    position: absolute;
    z-index: 20;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    max-width: 90%;
    height: 70vh;

    opacity: 100%;
    transform-origin: top right;
    transition: all 500ms;
    &.hidden {
      transform: scale(0.1) translate(0, 0);
      top: 0;
      left: auto;
      right: 0;
    }

    ul {
      font-family: $font_title;
      font-size: 1.5em;
      line-height: 2em;
    }
    a {
      color: #333;
      text-decoration: none;
      transition: color 200ms;
      &:hover {
        color: $color_emphasis;
      }
    }

    &__close {
      color: black;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      svg {
        width: 40px;
      }
      transition: color 200ms;
      &:hover {
        color: $color_emphasis;
      }
    }
  }

  .hidden {
    z-index: -10;
    opacity: 0;
  }
</style>
