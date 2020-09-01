<script>
  export let data;
</script>

<style>
</style>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="hydrate">
  <h1>Login</h1>

  <form action="/api/login/" method="post">
    <label>
      Username
      <input type="text" name="username">
    </label>
    <label>
      Password
      <input type="password" name="password">
    </label>

    <button type="submit">Login</button>
  </form>
</div>
