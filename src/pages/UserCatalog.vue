<template >
  <div>
    <my-header></my-header>
    <div class="q-ma-md">
      <q-select
        dense
        filled
        style="width: 300px; border: 2px solid deeppink; color: white"
        :options="options"
        label="Выбрать категорию товара:"
        v-model="category"
        @update:model-value="getDataOption()"
      >
      </q-select
      >(я не знаю куда это приспособить)
    </div>

    <div class="row q-pa-xl">
      <div
        v-for="card in data"
        :key="card"
        class="q-pa-md row items-start q-gutter-md col-4"
      >
        <q-card style="min-width: 300px">
          <q-img
            :src="card.image"
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
                {{ card.rating.rate }}
                <q-rating readonly v-model="card.rating.rate" />
              </div>

              <div class="q-ma-md">
                <q-btn
                  label="Просмотр товара"
                  @click="
                    (this.dialog = true),
                      (this.price = card.price),
                      (this.title = card.title),
                      (this.description = card.description),
                      (this.rate = card.rating.rate),
                      (this.img = card.image)
                  "
                >
                </q-btn>
                <div class="q-ma-md">
                  <q-btn
                    label="Добавить в корзину"
                    @click="
                      (this.price = card.price),
                        (this.title = card.title),
                        (this.description = card.description),
                        (this.rate = card.rating.rate),
                        (this.img = card.image),
                        addToCart()
                    "
                  ></q-btn>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <q-dialog v-model="dialog">
        <q-card style="max-width: 450px">
          <q-img
            :src="this.img"
            style="height: 200px; max-width: 150px"
            class="q-ma-xl"
            contain
          />
          <q-separator />
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="text-h6 ellipsis">
                {{ this.title }}
              </div>
            </div>
            <q-separator />

            <div>
              <div class="q-ma-md">
                <strong>Price: </strong> {{ this.price }} $
              </div>
              <div class="q-ma-md">
                {{ this.rate }}
                <q-rating readonly v-model="this.rate" />
              </div>
              <div class="q-ma-md">
                <strong> Описание:</strong><br />
                {{ this.title }}
              </div>
              <div class="q-ma-md">
                <q-btn
                  label="Добавить в корзину"
                  @click="addToCart()"
                  v-close-popup
                >
                </q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>
<script>
import MyHeader from "../components/MyHeader.vue";
export default {
  components: {
    MyHeader,
  },
  data() {
    return {
      page: 1,
      limit: 4,
      data: [],
      cart: [],
      nums: 0,
      dialog: false,
      title: "",
      price: 0,
      rate: 0,
      description: "",
      img: "",
      pageNumber: 0,
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
  methods: {
    addToCart() {
      let cartObject = {
        title: this.title,
        price: this.price,
        rate: this.rate,
        desc: this.description,
        img: this.img,
      };
      this.cart.push(cartObject);
      localStorage.setItem("cart", JSON.stringify(this.cart));
      console.log(localStorage.getItem("cart"));
    },
    getDataOption() {
      this.data = [];
      fetch("https://fakestoreapi.com/products/category/" + this.category.value)
        .then((res) => res.json())
        .then((json) => (this.data = json));
    },
  },

  mounted() {
    fetch("https://fakestoreapi.com/products/?limit=" + this.limit)
      .then((response) => response.json())
      .then((json) => (this.data = json));
  },
};
</script>
<style scoped>
</style>
