<template lang="html">
  <!-- eslint-disable -->
  <div
    id="ck_sp_m-cartkit-shop-pop"
    :class="template"
    :style="shopPopStyles"
  >

    <!-- Close Icon -->
    <div
      id="ck_sp_m-delete-icon-cont"
      v-if="deletePop"
      :style="deleteIconContStyles"
      @click="closePop"
    >
      <img
        id="ck_sp_m-sp-times"
        src="https://unicons.iconscout.com/release/v1.0.0/svg/times.svg"
        :style="iconTimesStyles"
      />
    </div>

    <!-- Img -->
    <div
      id="ck_sp_m-sp-img-cont"
      :style="imageContainerStyles"
      @click="clickedPop"
    >
      <img
        id="ck_sp_m-sp-img"
        :src="image"
        :style="{
          width: '100% !important',
          height: 'auto !important',
          margin: '0 !important',
          padding: '0 !important',
          opacity: '1 !important',
          cursor: 'pointer',
        }"
      />
    </div>

    <!-- Info -->
    <div
      id="ck_sp_m-sp-info"
      :style="{
        transition: 'all .5s',
        flex: 'auto',
        cursor: 'pointer',
        position: 'relative',
        margin: 0,
        padding: 0,
        marginLeft: '0.75rem',
        maxWidth: '310px !important',
        zIndex: '9998',
      }"
    >
      <p
        id="ck_sp_m-sp-name"
        :style="topStyles"
        @click="clickedPop"
      >
        {{ top }}
      </p>
      <p
        v-if="middle"
        id="ck_sp_m-sp-action"
        :style="middleStyles"
        @click="clickedPop"
      >
        {{ middle }}
        <timeago
          v-if="purchasedAt && popSize == 'small'"
          :datetime="purchasedAt"
          :locale="locale"
          :style="timeagoStyles"
        />
      </p>
      <div
        v-if="purchasedAt && popSize == 'default'"
        id="ck_sp_m-sp-verified"
        :style="{
          fontWeight: '400',
          transition: 'all .5s',
          opacity: '0.8',
          cursor: 'pointer',
          lineHeight: '1',
          position: 'relative',
          zIndex: '9998 !important',
        }"
      >
        <timeago
          :datetime="purchasedAt"
          :locale="locale"
          :style="timeagoStyles"
        />
      </div>
    </div>

  </div>
  <!-- eslint-enable -->
</template>

<script>
import moment from "moment";

export default {
  props: {
    img: {
      type: String,
      default: () => ""
    },
    top: {
      type: String,
      default: () => ""
    },
    middle: {
      type: String,
      default: () => ""
    },
    fromAnonymous: {
      type: String,
      default: () => null
    },
    purchasedAt: {
      type: String,
      default: () => ""
    },
    template: {
      type: String,
      default: () => "light"
    },
    rounded: {
      type: Boolean,
      default: () => false
    },
    backgroundColor: {
      type: String,
      default: () => ""
    },
    textColor: {
      type: String,
      default: () => ""
    },
    borderRadius: {
      type: Number,
      default: () => 0
    },
    deletePop: {
      type: Boolean,
      default: () => true
    },
    anonymous: {
      type: Boolean,
      default: () => false
    },
    locale: {
      type: String,
      default: () => ""
    },
    clickUrl: {
      type: String,
      default: () => ""
    },
    backgroundImg: {
      type: String,
      default: () => null
    },
    popSize: {
      type: String,
      default: () => "small"
    },
    paddingTop: {
      type: String,
      default: () => "0 !important"
    },
    paddingBottom: {
      type: String,
      default: () => "0 !important"
    },
    paddingRight: {
      type: String,
      default: () => "8px !important"
    },
    paddingLeft: {
      type: String,
      default: () => "16px !important"
    }
  },
  data() {
    return {
      popConfirm: false
    };
  },
  computed: {
    shopPopStyles() {
      let background = "";
      if (this.backgroundImg) {
        background = `url("${this.backgroundImg}") no-repeat top right`;
      } else {
        background = this.backgroundColor || "#fff";
      }
      const textColor = this.textColor || "#333";
      const borderRadius = this.borderRadius || "50%";

      return {
        background: background,
        backgroundSize: "cover",
        color: textColor,
        borderRadius: `${borderRadius}px`,
        transition: "all .5s",
        height: "100% !important",
        boxShadow:
          "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        paddingTop: this.paddingTop,
        paddingBottom: this.paddingBottom,
        paddingLeft: this.paddingLeft,
        paddingRight: this.paddingRight,
        margin: 0,
        cursor: "pointer",
        zIndex: "9998 !important"
      };
    },
    deleteIconContStyles() {
      let size = "";
      if (this.popSize == "default") {
        size = 32;
      } else {
        size = 24;
      }

      return {
        transition: "all .5s",
        top: "0",
        right: "0",
        position: "absolute",
        cursor: "pointer",
        backgroundColor: "#fff",
        boxShadow:
          "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
        height: `${size}px !important`,
        width: `${size}px !important`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        zIndex: "9999 !important",
        margin: 0,
        padding: 0
      };
    },
    fromAnonymousName() {
      if (this.fromAnonymous) {
        return this.fromAnonymous;
      }
      return "Someone";
    },
    image() {
      if (this.imageExists(this.img)) {
        return this.img;
      }
      return "https://res.cloudinary.com/carlsapps/image/upload/v1575911100/default-product_hmddwe.png";
    },
    sizeSettings() {
      if (this.popSize == "small") {
        return {
          imgSize: 60,
          iconSize: 16,
          topFontSize: 13,
          bottomFontSize: 11
        };
      }
      return {
        imgSize: 80,
        iconSize: 20,
        topFontSize: 14,
        bottomFontSize: 12
      };
    },
    imageContainerStyles() {
      return {
        transition: "all .5s",
        display: "flex",
        flex: "none",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#fff",
        margin: "8px 0",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: "9998 !important",
        height: `${this.sizeSettings.imgSize}px !important`,
        width: `${this.sizeSettings.imgSize}px !important`,
        position: "relative"
      };
    },
    iconTimesStyles() {
      return {
        width: `${this.sizeSettings.iconSize}px !important`,
        height: `${this.sizeSettings.iconSize}px !important`,
        cursor: "pointer",
        margin: "0 !important",
        padding: "0 !important"
      };
    },
    topStyles() {
      return {
        transition: "all .5s",
        marginBottom: "0.25rem",
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        cursor: "pointer",
        lineHeight: "1",
        position: "relative",
        color: this.textColor,
        zIndex: "9998 !important",
        fontWeight: "500 !important",
        fontSize: `${this.sizeSettings.topFontSize}px !important`
      };
    },
    middleStyles() {
      return {
        fontWeight: "400 !important",
        transition: "all .5s",
        opacity: "0.85",
        marginBottom: "0.25rem",
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        cursor: "pointer",
        lineHeight: "1",
        position: "relative",
        color: this.textColor,
        zIndex: "9998 !important",
        fontSize: `${this.sizeSettings.bottomFontSize}px !important`
      };
    },
    timeagoStyles() {
      return {
        zIndex: "9998",
        fontSize: `${this.sizeSettings.bottomFontSize}px !important`,
        fontWeight: "400 !important"
      };
    }
  },
  methods: {
    hide() {
      this.popConfirm = false;
    },
    confirmedDelete() {
      this.$emit("deleted");
      this.popConfirm = false;
    },
    timeAgo(date) {
      const diff = moment(date).diff(moment.now(), "hours");
      if (diff * -1 < 48) {
        return `${diff * -1} Hours Ago`;
      }
      return "Recently";
    },
    closePop() {
      this.hideP();
      this.$cookies.set("sales_pop_hide", true);
    },
    hideP() {
      this.$emit("closed");
    },
    clickedPop() {
      if (this.clickUrl && this.clickUrl !== "") {
        this.$emit("open-url", this.clickUrl);
      }
    },
    imageExists(image) {
      const http = new XMLHttpRequest();
      http.open("HEAD", image, false);
      http.send();
      return http.status !== 404;
    }
  }
};
</script>

<style lang="scss" scoped>
div#ck_sp_m-cartkit-shop-pop {
  div#ck_sp_m-delete-icon-cont {
    &:hover {
      background-color: #f2f2f2;
    }
  }
}

#ck_sp_m-sp-img-cont {
  #ck_sp_m-sp-img {
    width: 100% !important;
    height: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    cursor: pointer;
  }
}

div#ck_sp_m-sp-info {
  #ck_sp_m-sp-name {
    font-size: 12px !important;

    @media (min-width: 776px) {
      font-size: 14px !important;
    }
  }

  #ck_sp_m-sp-verified,
  #ck_sp_m-sp-action {
    font-size: 11px !important;

    @media (min-width: 776px) {
      font-size: 12px !important;
    }
  }
}

.cartkit-shop-pop.light {
  background-color: #fff;

  .info {
    .verified {
      span {
        &:last-of-type {
          i {
            background-color: #7b62ff;
            color: #fff;
          }
        }
      }
    }
  }
}

.cartkit-shop-pop.dark {
  background-color: #12283a;

  .img {
    background-color: #fff;
  }

  .info {
    .name {
      color: #fff;
    }

    .verified {
      color: #a6b1b2;

      span {
        &:last-of-type {
          i {
            background-color: #7b62ff;
            color: #fff;
          }
        }
      }
    }
  }
}

.cartkit-shop-pop.gradient1 {
  background: rgb(33, 212, 253)
    linear-gradient(90deg, rgba(33, 212, 253, 1) 0%, rgba(183, 33, 255, 1) 100%);

  .img {
    background-color: #fff;
  }

  .info {
    .name,
    .action,
    .verified {
      color: #fff;
    }
  }
}

.cartkit-shop-pop.gradient2 {
  background: rgb(33, 212, 253)
    linear-gradient(90deg, rgba(33, 212, 253, 1) 0%, rgba(42, 245, 152, 1) 100%);

  .img {
    background-color: #fff;
  }

  .info {
    .name,
    .action,
    .verified {
      color: rgba(0, 0, 0, 0.7);
    }
  }
}

.cartkit-shop-pop.gradient3 {
  background: rgb(254, 225, 64)
    linear-gradient(
      90deg,
      rgba(254, 225, 64, 1) 0%,
      rgba(250, 112, 154, 1) 100%
    );

  .img {
    background-color: #fff;
  }

  .info {
    .name,
    .action,
    .verified {
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
