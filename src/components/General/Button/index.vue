<template lang="html">
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :style="mainStyles"
    @click="buttonClicked"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: () => {
        return "default";
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
  data() {
    return {
      boxShadow: "box-shadow: none",
      hover: false
    };
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
    },
    mainStyles() {
      return {
        transition: "all 0.5s",
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "0.375rem",
        fontWeight: "500",
        cursor: "pointer",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        ...this.themeStyles,
        ...this.sizeOptions,
        ...this.cursorStyles,
        ...this.hoverStyles
      };
    },
    shadow() {
      return {
        boxShadow: this.boxShadow
      };
    },
    cursorStyles() {
      if (this.disabled) return { cursor: "not-allowed" };
      return { cursor: "pointer" };
    },
    hoverStyles() {
      if (this.hover) {
        return {
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        };
      }
      return { boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)" };
    },
    themeStyles() {
      const themes = {
        br: {
          backgroundColor: "#f4c500",
          border: "1px solid #f4c500",
          color: "#fff"
        },
        sp: {
          backgroundColor: "#7b62ff",
          border: "1px solid #7b62ff",
          color: "#fff"
        },
        cc: {
          backgroundColor: "#3a87f7",
          border: "1px solid #3a87f7",
          color: "#fff"
        },
        pk: {
          backgroundColor: "#13baba",
          border: "1px solid #13baba",
          color: "#fff"
        },
        btf: {
          backgroundColor: "#1585ff",
          border: "1px solid #1585ff",
          color: "#fff"
        },
        default: {
          backgroundColor: "#fff",
          color: "#768389",
          border: "none"
        }
      };
      return themes[this.theme];
    },
    sizeOptions() {
      const sizes = {
        xl: {
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          lineHeight: "1.5rem"
        },
        lg: {
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          lineHeight: "1.5rem"
        },
        default: {
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
          lineHeight: "1.25rem"
        },
        sm: {
          padding: "0.5rem 0.75rem",
          fontSize: "0.875rem",
          lineHeight: "1rem"
        },
        xs: {
          padding: "0.375rem 0.6rem",
          fontSize: "0.75rem",
          lineHeight: "1rem"
        }
      };
      return sizes[this.size];
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
  &:hover {
    @apply shadow-md;
  }

  &:focus {
    outline: none;
  }
}

.button-disabled {
  cursor: not-allowed !important;
}
</style>
