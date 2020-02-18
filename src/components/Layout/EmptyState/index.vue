<template lang="html">
  <div class="empty-state" :style="{ height }">
    <div class="empty-state-content">
      <img :src="img" />
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: () => {
        return "https://res.cloudinary.com/carlsapps/image/upload/v1581971316/undraw_landscape_mode_53ej_y1g9bl.svg";
      }
    },
    msg: {
      type: String,
      default: () => {
        return "This is the msg of the empty state";
      }
    },
    height: {
      type: String,
      default: () => {
        return "320px";
      }
    }
  }
};
</script>

<style lang="scss">
.empty-state {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  .empty-state-content {
    text-align: center;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      margin: auto;
      max-width: 300px;
      height: auto;
      margin-bottom: 20px;
    }
  }
}
</style>
