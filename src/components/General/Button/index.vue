<template lang="html">
  <button :class="buttonClasses" :disabled="disabled" @click="buttonClicked">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: () => {
        return "br";
      }
    },
    type: {
      type: String,
      default: () => {
        return "default";
      }
    },
    size: {
      type: String,
      default: () => {
        return "default";
      }
    },
    link: {
      type: String,
      default: () => {
        return "";
      }
    },
    newTab: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  computed: {
    buttonClasses() {
      return `cartkit-button ${this.type} size-${this.size} ${
        this.disabled ? "button-disabled" : ""
      }`;
    }
  },
  methods: {
    buttonClicked() {
      if (this.link !== "") {
        if (this.newTab) {
          window.open(this.link);
        } else {
          this.$router.push(this.link);
        }
      } else {
        this.$emit("clicked");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cartkit-button {
  transition: all 0.5s;
  display: inline-block;
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    @apply shadow-md;
  }

  &:focus {
    outline: none;
  }
}

.cartkit-button.size-full {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
}

.cartkit-button.size-default {
  padding: 0.75rem 2rem;
}

.cartkit-button.size-small {
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
}

.cartkit-button.default {
  border: 1px solid #a6b1b2;
  color: #768389;

  &:hover {
    border-color: #f4c500;
    color: #f4c500;
  }
}

.cartkit-button.primary {
  background-color: #f4c500;
  border: 1px solid #f4c500;
  color: #fff;

  &:hover {
    background-color: #d6ad26;
  }
}

.cartkit-button.primary-dark {
  background-color: #d6ad26;
  border: 1px solid #d6ad26;
  color: #fff;

  &:hover {
    @apply shadow-md;
  }
}

.cartkit-button.btf {
  background-color: #1585ff;
  border: 1px solid #1585ff;
  color: #fff;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

.button-disabled {
  cursor: not-allowed !important;
}
</style>
