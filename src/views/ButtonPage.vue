<template lang="html">
  <div class="button-page">
    <h3>Examples</h3>
    <p>Here are a few examples of buttons:</p>
    <div v-for="(theme, i) in themes" :key="i" class="example">
      <span>
        <Button size="xl" :theme="theme">Button</Button>
      </span>
      <span>
        <Button size="lg" :theme="theme">Button</Button>
      </span>
      <span>
        <Button :theme="theme">Button</Button>
      </span>
      <span>
        <Button size="sm" :theme="theme">Button</Button>
      </span>
      <span>
        <Button size="xs" :theme="theme">Button</Button>
      </span>
    </div>
    <div class="props">
      <h3>Available Props</h3>
      <Props :available-props="props" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/General/Button";
import Props from "@/components/Advanced/Props";
import { snippets } from "@/snippets";

export default {
  components: {
    Button,
    Props
  },
  data() {
    return {
      snippets,
      themes: ["default", "cc", "sp", "br", "pk"],
      props: [
        {
          property: "theme",
          type: "String",
          default: "cc, sp, br, sp"
        },
        {
          property: "type",
          type: "String",
          default: "default"
        },
        {
          property: "size",
          type: "String",
          default: "default, xs, sm, lg, xl"
        },
        {
          property: "link",
          type: "String",
          default: "null"
        },
        {
          property: "new-tab",
          type: "Boolean",
          default: "false"
        },
        {
          property: "disabled",
          type: "Boolean",
          default: "false"
        }
      ]
    };
  },
  methods: {
    clickPop(url) {
      // eslint-disable-next-line
      console.log(url)
    }
  }
};
</script>

<style lang="scss" scoped>
.button-page {
  h3 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .example {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background-color: #f4f6f9;
    border-radius: 0.5rem;

    &:first-of-type {
      margin-top: 1rem;
    }

    span {
      margin-right: 0.5rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .props {
    h3 {
      margin-bottom: 1rem;
    }
  }
}
</style>
