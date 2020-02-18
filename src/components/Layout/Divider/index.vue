<template lang="html">
  <div class="carkit-divider" :class="margin">
    <p v-if="heading">{{ heading }}</p>
    <div class="divider" />
  </div>
</template>

<script>
export default {
  props: {
    margin: {
      type: String,
      default: () => {
        return "none";
      }
    }
  },
  data() {
    return {
      dividerStyles: {
        margin: `${this.margin}px 0`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.carkit-divider {
  @apply block w-full;

  p {
    color: #2d2f39;
    font-family: "CircularStd Medium", "helvetica", "sans-serif";
    @apply mb-3;
  }

  .divider {
    height: 1px;
    background-color: #dfe7ee;
    @apply block w-full;
  }
}

.carkit-divider.none {
  @apply m-0;
}

.carkit-divider.sm {
  @apply my-4;
}

.carkit-divider.md {
  @apply my-6;
}

.carkit-divider.lg {
  @apply my-8;
}

.carkit-divider.xl {
  @apply my-12;
}
</style>
