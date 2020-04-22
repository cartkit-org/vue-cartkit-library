<template>
  <div class="ck_cc_atc_modal cc_atc_modal_iframe" @click.stop="() => false">
    <div
      v-show="canClose"
      class="ck_cc_atc_close-icon x-button-add-to-cart"
      @click="$emit('closed')"
    >
      <svg
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
        />
      </svg>
    </div>

    <div class="ck_cc_atc_text-container">
      <h3 :style="{ color: headingColor }">
        {{ heading }}
      </h3>
      <p :style="{ color: subheadingColor }">
        {{ subheading }}
      </p>
    </div>

    <input
      id="email"
      v-model="email"
      class="ck_cc_atc_form-input"
      :placeholder="emailPlaceholderText"
    />

    <div class="ck_cc_atc_button-container">
      <button
        type="button"
        class="ck_cc_atc_button btn-add-to-cart"
        :class="{ ck_cc_atc_loading: loading }"
        :style="{ color: buttonFontColor, background: buttonColor }"
        @click="$emit('submited', { email })"
      >
        <span :style="`opacity: ${loading ? 0 : 1}`">{{ buttonText }}</span>
        <svg
          v-show="loading"
          class="ck_cc_atc_loader"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="20px"
          height="20px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="currentColor"
            stroke-width="5"
            r="35"
            stroke-dasharray="164.93361431346415 56.97787143782138"
            transform="matrix(1,0,0,1,0,0)"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: ""
    },
    headingColor: {
      type: String,
      default: "#222222"
    },
    subheading: {
      type: String,
      default: ""
    },
    subheadingColor: {
      type: String,
      default: "#222222"
    },
    emailPlaceholderText: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    buttonFontColor: {
      type: String,
      default: "#ffffff"
    },
    buttonColor: {
      type: String,
      default: "#33C3F0"
    },
    canClose: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      email: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.ck_cc_atc_modal {
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  position: relative;
  width: 420px;
  max-width: 90vw;
  padding: 40px;
  box-sizing: border-box;

  .ck_cc_atc_close-icon {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;

    svg {
      color: #718096;
      height: 16px;
      width: 16px;
    }
  }

  .ck_cc_atc_text-container {
    text-align: center;
    max-width: 320px;

    h3 {
      color: #1a202c;
      font-weight: 500;
      line-height: 24px;
      margin-top: 16px;
      font-size: 24px;
      margin-bottom: 0;
    }

    p {
      color: #a0aec0;
      line-height: 20px;
      margin-top: 16px;
      margin-bottom: 0;
      font-size: 16px;
    }
  }

  .ck_cc_atc_form-input {
    margin-top: 16px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    display: block;
    background-color: #fff;
    border-color: #d2d6dc;
    border-width: 1px;
    border-radius: 6px;
    border-style: solid;
    padding: 8px 12px;
    font-size: 16px;
    line-height: 1.5;

    &:focus {
      outline: none;
      border-color: #3a87f7;
    }
  }

  .ck_cc_atc_button-container {
    display: flex;
    width: 100%;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    margin-top: 12px;
    border-radius: 6px;
  }

  .ck_cc_atc_button {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    border: none;
    background-color: #5a67d8;
    color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: all ease-in-out 150ms;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;

    &.ck_cc_atc_loading {
      position: relative;
      align-items: center;

      &:after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 6px;
        content: "";
        background: rgba(#fff, 0.5);
        z-index: 1;
      }
    }
  }
}

.ck_cc_atc_loader {
  position: absolute;
  color: #3a87f7;
  animation: ccmicrojs-loader-rotate 500ms infinite linear;
  z-index: 2;
}

@keyframes ccmicrojs-loader-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 400px) {
  .ck_cc_atc_modal {
    padding: 30px 20px;
  }
}
</style>
