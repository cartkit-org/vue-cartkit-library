<template>
  <div id="app">
    <div class="pop-container">
      <SalesPop
        :img="salespop.img"
        :top="salespop.top"
        :middle="salespop.middle"
        :purchasedAt="salespop.purchasedAt"
        :border-radius="25"
        :click-url="salespop.clickUrl"
        background-color="#fff"
        text-color="#333"
      />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import SalesPop from "./components/SalesPop";

export default {
  name: "app",
  components: {
    SalesPop
  },
  data() {
    return {
      salespop: {
        img:
          "https://res.cloudinary.com/carlsapps/image/upload/v1555519945/nS2mJr_ljm2dc.png",
        top: "Dan in Atlanta, Georgia",
        middle: "Purchased Crew Neck Pleated Short Sleeve Casual Shirts",
        purchasedAt: moment().format(),
        clickUrl:
          "https://roselinlin.com/collections/weekly-new-in/products/casual-long-sleeve-letter-shirts-tops"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap");

#app {
  font-family: "Roboto", sans-serif;

  .pop-container {
    width: 100%;
    max-width: 26rem;
    position: fixed;
    left: 16px;
    bottom: 16px;
  }
}
</style>
