<script>
  import Clock from '../../components/Clock/Clock.svelte';
  export let data;
</script>

<style>
  .banner {
    padding: 1rem 2rem;
    background: #eee;
    border-radius: 2rem;
    margin-bottom: 1rem;
  }

  .entries {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 3rem 0;
  }
  :global(.entry) {
    margin-right: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: white;
  }
  .about {
    margin-bottom: 2rem;
  }

  .hydrate {
    display: grid;
    grid-template-columns: 80% 20%;
  }
  .hydrate .left {
    margin-right: 1.5rem;
  }
</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
</svelte:head>

<div class="hydrate">
  <h1>{ data.aapje }</h1>

  {#if data.user}
    <h2>{ data.user }</h2>
  {:else}
    Log in
  {/if}

  <div class="right">
    <Clock hydrate-client={{}} />
  </div>
</div>
