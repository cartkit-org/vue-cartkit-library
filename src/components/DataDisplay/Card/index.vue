<template lang="html">
  <div class="card" :style="cardStyles">
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    cardStyles() {
      return {
        backgroundColor: "#fff",
        borderRadius: "0.5rem",
        padding: "1rem",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
