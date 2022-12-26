<template>
  <div>
    <my-header></my-header>
    <div v-if="this.cart.length == 0">
      В корзине пока нет товаров...<br />
      Вы можете их добавить перейдя в
      <span
        class="text-italic text-weight-bold cart"
        @click="this.$router.push('/products')"
        >каталог</span
      >
    </div>
    <div v-else>
      <div>Ваши заказы:</div>
      <div
        v-for="card in cart"
        :key="card"
        class="q-pa-md row items-start q-gutter-md col-4"
      >
        <q-card style="min-width: 300px">
          <q-img
            :src="card.img"
            style="max-height: 200px; max-width: 150px"
            class="q-ma-xl"
            contain
          />
          <q-separator />
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="text-h6 ellipsis">
                {{ card.title }}
              </div>
            </div>
            <q-separator />

            <div>
              <div class="q-ma-md">
                <strong> Price: </strong>{{ card.price }} $
              </div>
              <div class="q-ma-md">
                {{ card.rate }}
                <q-rating readonly v-model="card.rate" />
              </div>
              <q-btn
                label="Удалить товар"
                @click="(this.title = card.title), deleteFromCart()"
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "src/components/MyHeader.vue";
export default {
  components: {
    MyHeader,
  },
  data() {
    return {
      title: "",
      cart: [],
    };
  },
  methods: {
    deleteFromCart() {
      for (let i = 0; i < this.cart.length + 1; i++) {
        if (this.title == this.cart[i].title) {
          this.cart.splice(i, i + 1);
        }
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    console.log(this.cart);
  },
};
</script>
<style scoped>
.cart {
  cursor: pointer;
}
.cart:hover {
  text-decoration: underline;
  color: blueviolet;
}
</style>