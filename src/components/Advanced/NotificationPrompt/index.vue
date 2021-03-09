<template>
  <div class="ck_cc_np_notification">
    <div class="ck_cc_np_left-side">
      <img style="max-width: 100%" :src="pushIcon" alt="Notification Bell" />
    </div>
    <div class="ck_cc_np_right-side">
      <div class="ck_cc_np_title">
        {{ templateHeader }}
      </div>
      <div class="ck_cc_np_subtitle">
        {{ templateBody }}
      </div>
      <div class="ck_cc_np_buttons">
        <a href="#" class="ck_cc_np_dontallow" @click.prevent="$emit('closed')">
          {{ dontAllowBtnText }}
        </a>
        <a href="#" class="ck_cc_np_allow" @click.prevent="$emit('allowed')">
          {{ allowBtnText }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pushIcon: {
      type: String,
      default: ""
    },
    templateHeader: {
      type: String,
      default: ""
    },
    templateBody: {
      type: String,
      default: ""
    },
    dontAllowBtnText: {
      type: String,
      default: ""
    },
    allowBtnText: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.ck_cc_np_notification {
  display: table;
  table-layout: fixed;
  padding: 24px 32px 24px;
  width: 425px;
  max-width: 100vw;
  background: #fff;
  box-sizing: border-box;
}
.ck_cc_np_notification .ck_cc_np_left-side {
  display: table-cell;
  vertical-align: top;
  width: 65px;
}

.ck_cc_np_notification .ck_cc_np_right-side {
  display: table-cell;
  vertical-align: top;
  padding-top: 0;
  padding-left: 15px;
  text-align: right;
}

.ck_cc_np_notification .ck_cc_np_title {
  text-align: left;
  font-size: 17px;
  margin-top: 0px;
  line-height: 1.4;
}

.ck_cc_np_notification .ck_cc_np_subtitle {
  text-align: left;
  font-size: 12px;
  padding-top: 5px;
  color: gray;
}

.ck_cc_np_notification .ck_cc_np_buttons {
  padding-top: 20px;
  font-size: 16px;
}

.ck_cc_np_notification .ck_cc_np_dontallow {
  text-align: center;
  padding-right: 24px;
  color: #2563eb;
  text-decoration: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: darken(#2563eb, 15%);
  }
}

.ck_cc_np_notification .ck_cc_np_allow {
  padding: 6px 20px;
  border-radius: 2px;
  text-align: center;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background: #2563eb;
  color: #fff;
  text-decoration: none;

  &:hover {
    background: darken(#2563eb, 10%);
    color: #fff;
  }
}

@media (max-width: 400px) {
  .ck_cc_np_notification-container {
    width: auto !important;
  }

  .ck_cc_np_right-side {
    padding-left: 0 !important;
  }

  .ck_cc_np_notification .ck_cc_np_left-side {
    display: none !important;
  }
}
@media (max-width: 300px) {
  .ck_cc_np_buttons {
    display: flex;
    flex-direction: column;
  }
  .ck_cc_np_dontallow {
    padding-right: 0 !important;
    padding-bottom: 8px;
  }
}
</style>
