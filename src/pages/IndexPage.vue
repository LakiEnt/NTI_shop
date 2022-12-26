<template>
  <div>
    <h1>Приветсвую на нашем сайте</h1>
    <q-btn
      label="Перейти в каталог"
      @click="this.$router.push('/products')"
    ></q-btn>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      num: 0,
    };
  },
};
</script>
