<template lang="html">
  <div class="components">
    <div class="component-main">
      <div class="component-main-container">
        <div class="header">
          <span>Components</span>
          <h1>{{ component }}</h1>
          <p>
            These docs will guide you through using and changing the component.
          </p>
        </div>
        <div class="content">
          <div class="content-component">
            <component :is="componentName" />
          </div>
        </div>
      </div>
      <div class="component-sidebar">
        <div class="row">
          <p class="title">How to Import</p>
          <pre class="language-css"><code>{{ code }}</code></pre>
        </div>
        <div class="row">
          <p class="title">Example usage</p>
          <pre class="language-css"><code>{{ usage }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPage from "./ButtonPage.vue";
import Props from "@/components/Advanced/Props";
import { snippets } from "@/snippets";

export default {
  components: {
    ButtonPage,
    Props
  },
  data() {
    return {
      component: null,
      componentName: null
    };
  },
  computed: {
    code() {
      return snippets[this.component].code;
    },
    usage() {
      return snippets[this.component].usage;
    }
  },
  watch: {
    $route() {
      this.setComponent(this.$route.params.component);
    }
  },
  mounted() {
    this.setComponent(this.$route.params.component);
  },
  methods: {
    setComponent(component) {
      this.component = component;
      // eslint-disable-next-line
      this.componentName = `${component.replace(/^\w/, c => c.toUpperCase())}Page`;
    }
  }
};
</script>

<style lang="scss" scoped>
.components {
  position: relative;

  .component-main {
    margin-right: 22rem;
    padding: 2rem;

    .component-main-container {
      max-width: 50rem;
      margin: auto;

      .header {
        span {
          color: #989fa9;
          font-weight: normal;
          display: block;
          margin-bottom: 0.5rem;
        }

        h1 {
          text-transform: capitalize;
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 2rem;
        }
      }

      .content {
        margin-top: 3rem;

        .content-component {
          margin-top: 2rem;
        }
      }
    }
  }

  .component-sidebar {
    position: fixed;
    right: 0;
    width: 18rem;
    height: 100%;
    top: 0;
    z-index: 100;
    padding: 2rem;
    background-color: #2f353b;

    .row {
      margin-bottom: 2rem;

      .title {
        margin-bottom: 1rem;
      }
    }

    pre {
      font-size: 0.75rem;
      border-radius: 0.5rem;
    }
  }
}
</style>
