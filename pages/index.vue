<template>
  <div class="container">
    <h2>Welcome</h2>
  </div>
</template>

<script>
export default {
    asyncData: async ({ app, route, payload }) => {
      console.log(await app.$content('/products').getAll())
    // return {
    //   page: (await app.$content("/pages").get(route.path)) || payload
    // };
  }
};
</script>
