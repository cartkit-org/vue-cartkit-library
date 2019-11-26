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
      :style="deleteIconContStyles"
      @click="closePop"
    >
      <img
        id="ck_sp_m-sp-times"
        v-if="deletePop"
        src="https://unicons.iconscout.com/release/v1.0.0/svg/times.svg"
        :style="{
          width: '20px !important',
          height: '20px !important',
          cursor: 'pointer',
          margin: '0 !important',
          padding: '0 !important',
        }"
      />
    </div>

    <!-- Img -->
    <div
      id="ck_sp_m-sp-img-cont"
      :style="{
        transition: 'all .5s',
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#fff',
        margin: '8px 0',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: '9998 !important',
      }"
      @click="clickedPop"
    >
      <img
        id="ck_sp_m-sp-img"
        :src="img"
        :style="{
          width: '100% !important',
          height: 'auto !important',
          margin: '0 !important',
          padding: '0 !important',
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
        :style="{
          transition: 'all .5s',
          fontWeight: '500',
          marginBottom: '0.25rem',
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          padding: 0,
          cursor: 'pointer',
          lineHeight: '1',
          position: 'relative',
          color: this.textColor,
          zIndex: '9998 !important',
        }"
        @click="clickedPop"
      >
        {{ top }}
      </p>
      <p
        v-if="middle"
        id="ck_sp_m-sp-action"
        :style="{
          fontWeight: '400',
          transition: 'all .5s',
          opacity: '0.7',
          marginBottom: '0.25rem',
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          padding: 0,
          lineHeight: '1.3',
          cursor: 'pointer',
          lineHeight: '1',
          position: 'relative',
          color: this.textColor,
          zIndex: '9998 !important',
        }"
        @click="clickedPop"
      >
        {{ middle }}
      </p>
      <div
        v-if="purchasedAt"
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
          :style="{ zIndex: '9998', }"
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
    }
  },
  data() {
    return {
      popConfirm: false
    };
  },
  computed: {
    shopPopStyles() {
      const backgroundColor = this.backgroundColor || "#fff";
      const textColor = this.textColor || "#333";
      const borderRadius = this.borderRadius || "50%";

      return {
        background: backgroundColor,
        color: textColor,
        borderRadius: `${borderRadius}px`,
        transition: "all .5s",
        height: "100% !important",
        boxShadow:
          "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        paddingTop: "0 !important",
        paddingBottom: "0 !important",
        paddingLeft: "16px !important",
        paddingRight: "24px !important",
        margin: 0,
        cursor: "pointer",
        zIndex: "9998 !important"
      };
    },
    deleteIconContStyles() {
      return {
        transition: "all .5s",
        top: "0",
        right: "0",
        position: "absolute",
        cursor: "pointer",
        backgroundColor: "#fff",
        boxShadow:
          "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
        height: "32px !important",
        width: "32px !important",
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
  height: 60px !important;
  width: 60px !important;

  @media (min-width: 776px) {
    height: 80px !important;
    width: 80px !important;
  }

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
