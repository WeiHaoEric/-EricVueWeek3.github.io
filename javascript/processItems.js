import * as Vue from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js";

const itemApp = {
  data() {
    return {
      title: "商品清單",
      itemList: [],
    };
  },
  methods:{},
};

Vue.createApp(itemApp).mount("#item-app");
