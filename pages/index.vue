<template>
  <div class="container">
    <h2>Welcome</h2>
    <div v-for="(product, index) in products" :key="index">
      <h1>{{product.title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => {
    console.log(await app.$content("/products").getAll());
    return {
      products: (await app.$content("/products").getAll()) || payload
    };
  }
};
</script>
