import * as Vue from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js";

const itemApp = {
  data() {
    return {
      baseURL: "https://vue3-course-api.hexschool.io",
      apiPath: "hello-eric",
      title: "商品清單",
      itemList: [],
    };
  },
  methods: {},
  created() {
    // set token for axios
    const token = document.cookie.split(";")[0].split("=")[1];
    console.log("token", token);
    axios.defaults.headers.common["Authorization"] = token;

    //   `${BASE_URL}/api/${API_PATH}/admin/products`;
    axios
      .get(`${this.baseURL}/api/${this.apiPath}/admin/products?page=1`)
      .then((res) => {
        if (res.data.success) {
          console.log("all items:", res);
        } else {
          alert("Failed to get item list");
        }
      });
  },
};

Vue.createApp(itemApp).mount("#item-app");
