<template lang="html">
  <div class="props-table">
    <div class="props-table-header">
      <div class="left">
        <span>Property</span>
      </div>
      <div class="middle">
        <span>Type</span>
      </div>
      <div class="right">
        <span>Default</span>
      </div>
    </div>
    <div class="props-table-content">
      <div v-for="(prop, i) in availableProps" :key="i" class="content-row">
        <div class="left">
          <span>{{ prop.property }}</span>
        </div>
        <div class="middle">
          <span>{{ prop.type }}</span>
        </div>
        <div class="right">
          <span>{{ prop.default }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    availableProps: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.props-table {
  .props-table-header,
  .content-row {
    display: flex;
    align-items: center;

    .left,
    .middle,
    .right {
      padding: 1rem;
    }

    .left,
    .middle {
      width: 100px;
      flex: none;
    }

    .right {
      flex: 1 1 auto;
    }
  }

  .props-table-header {
    background-color: #f4f6f9;

    span {
      color: #333;
    }
  }

  .content-row {
    border-bottom: 1px solid #e2e8f0;

    .middle {
      span {
        color: #1585ff;
      }
    }
  }
}
</style>
