<script>
  export let data;
</script>

<style>
</style>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1>Account</h1>

{#if data.user}
  <h2>Logged in as { data.user.userName }</h2>
{:else}
  <p>You are not logged in</p>
  <a href="/login/">Log in</a>
{/if}

