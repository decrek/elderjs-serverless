<script>
  export let data;
</script>

<style>
  .error {
    color: red;
  }
</style>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="hydrate">
  <h1>Login</h1>

  {#if data.errorMessage}
    <p class="error">{ data.errorMessage }</p>
  {/if}
  <form action="/api/login/" method="post">
    <label>
      Username
      <input type="text" name="userName">
    </label>
    <label>
      Password
      <input type="password" name="password">
    </label>

    <button type="submit">Login</button>
  </form>
</div>
