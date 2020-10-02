<script>
  import Clock from '../../components/Clock/Clock.svelte';
  export let data;
</script>

<style>
  .hydrate {
    display: grid;
    grid-template-columns: 80% 20%;
  }
</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
</svelte:head>

<div class="hydrate">
  <Clock hydrate-client={{}} />
</div>
