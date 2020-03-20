<template lang="html">
  <div class="sidebar">
    <div class="logo">
      <img
        src="https://res.cloudinary.com/carlsapps/image/upload/v1584644972/ck-icon_vhw4kt.svg"
        alt="Cartkit Logo"
      />
    </div>
    <div v-for="(menu, i) in menus" :key="i" class="menu">
      <span class="label">{{ menu.label }}</span>
      <div class="menu-items">
        <div v-for="(item, j) in menu.items" :key="j" class="menu-item">
          <router-link :to="item.url">
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          label: "Welcome",
          items: [
            { url: "/", title: "Introduction" },
            { url: "/getting-started", title: "Getting Started" }
          ]
        },
        {
          label: "Components",
          items: [
            { url: "/components/button", title: "Button" },
            { url: "/components/divider", title: "Divider" }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;

  .logo {
    width: 100%;
    margin-bottom: 2.5rem;

    img {
      width: 2rem;
      height: auto;
    }
  }

  .menu {
    margin-bottom: 2.5rem;

    .label {
      font-size: 0.875rem;
      color: #9ea5af;
    }

    .menu-items {
      display: flex;
      margin-top: 0.5rem;
      flex-direction: column;

      .menu-item {
        margin: 0.5rem 0;

        a.router-link-exact-active {
          color: #3a87f7;
        }
      }
    }
  }
}
</style>
