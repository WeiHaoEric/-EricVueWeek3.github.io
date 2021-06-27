import * as Vue from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

const RunLogin = {
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io",
      userInfo: { username: "", password: "" },
      redirectPage: "",
    };
  },
  methods: {
    login() {
      console.log("login", this.userInfo.username, this.userInfo.password);

      axios.post
    },
  },
};

Vue.createApp(RunLogin).mount("#app");
