<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./routes";
  export let name: string;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <hr />
  <h1>Test SCSS</h1>
  <div>
    <p>ça devrait être bleu ! :)</p>
  </div>
  <hr />
  <h1>Test Navigation</h1>
  <nav>
    <ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/about">About</a></li>
    </ul>
  </nav>
  <Router {routes} />
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  div {
    p {
      color: blue;
    }
  }
</style>
