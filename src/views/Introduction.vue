<template lang="html">
  <div class="home">
    <p>Home</p>
    <div id="pop-container">
      <SalesPop
        :img="salespop.img"
        :top="salespop.top"
        :middle="salespop.middle"
        :purchasedAt="salespop.purchasedAt"
        :border-radius="25"
        :click-url="salespop.clickUrl"
        background-color="#fff"
        background-img="https://res.cloudinary.com/carlsapps/image/upload/v1575912142/christmas-3_ensom9.png"
        text-color="#fff"
        @open-url="clickPop"
        @closed="hidePops"
        deletePop
      />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import SalesPop from "@/components/Advanced/SalesPop/";

export default {
  name: "introduction",
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
  },
  methods: {
    clickPop(url) {
      console.log('url', url);
    },
    hidePops() {
      console.log('hide');
    }
  }
};
</script>

<style lang="scss" scoped>
#pop-container {
  max-width: 450px;
}
</style>
