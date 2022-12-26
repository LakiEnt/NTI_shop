<template>
  <div class="header">
    <div class="q-ma-md header-item" @click="this.$router.push('/')">
      LOGO SHOP
    </div>
    <div class="q-ma-md header-item" @click="this.$router.push('/products')">
      <q-icon name="list" color="white" />
      Каталог
    </div>
    <div class="q-ma-md header-item" @click="this.$router.push('/cart')">
      <q-icon name="shopping_cart" color="white" class="q-mr-xs" />
      Корзина
    </div>
    <div class="q-ma-md header-item">
      <q-icon name="search" color="white" />
      Категории
    </div>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {
      category: "",
      options: [
        {
          label: "Электроника",
          value: "electronics",
        },
        {
          label: "Украшения",
          value: "jewelery",
        },
        {
          label: "Мужское",
          value: "men's clothing",
        },
        {
          label: "Женское",
          value: "women's clothing",
        },
      ],
    };
  },
};
</script>
<style  scoped>
.header {
  background-color: deeppink;
  min-height: 55px;
  display: flex;
  justify-content: left;
}
.header-item {
  cursor: pointer;
}
</style>
