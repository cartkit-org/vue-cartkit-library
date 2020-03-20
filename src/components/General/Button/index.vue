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
        return "cc";
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
        return null;
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
      return {
        "cartkit-button": true,
        [this.type]: true,
        [`size-${this.size}`]: true,
        "button-disabled": this.disabled,
        [this.theme]: true
      };
    }
  },
  methods: {
    buttonClicked() {
      if (this.link) {
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

<style lang="scss">
.cartkit-button {
  transition: all 0.5s;
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

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

.cartkit-button.size-extra-large,
.cartkit-button.size-xl {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

.cartkit-button.size-large,
.cartkit-button.size-lg {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

.cartkit-button.size-default {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.cartkit-button.size-small,
.cartkit-button.size-sm {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1rem;
}

.cartkit-button.size-extra-small,
.cartkit-button.size-xs {
  padding: 0.375rem 0.6rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

.cartkit-button.default {
  border: 1px solid #a6b1b2;
  color: #768389;
  background-color: #fff;

  &:hover {
    color: #9cadb5;
  }
}

.cartkit-button.br {
  background-color: #f4c500;
  border: 1px solid #f4c500;
  color: #fff;

  &:hover {
    background-color: #d6ad26;
  }
}

.cartkit-button.sp {
  background-color: #7b62ff;
  border: 1px solid #7b62ff;
  color: #fff;

  &:hover {
    background-color: #5e50e2;
  }
}

.cartkit-button.cc {
  background-color: #3a87f7;
  border: 1px solid #3a87f7;
  color: #fff;

  &:hover {
    background-color: #0f53b5;
  }
}

.cartkit-button.pk {
  background-color: #13baba;
  border: 1px solid #13baba;
  color: #fff;

  &:hover {
    background-color: #109995;
  }
}

.cartkit-button.btf {
  background-color: #1585ff;
  border: 1px solid #1585ff;
  color: #fff;

  &:hover {
    opacity: 0.9;
    background-color: #0d72de;
  }
}

.button-disabled {
  cursor: not-allowed !important;
}
</style>
