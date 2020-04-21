import Vue from "vue";
import NotificationPrompt from "~/components/Advanced/NotificationPrompt/";
import { withKnobs, text } from "@storybook/addon-knobs";

const container = () => ({
  template:
    '<div style="width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background:#eee;"><story /></div>'
});

export default {
  title: "NotificationPrompt",
  component: NotificationPrompt,
  decorators: [withKnobs, container]
};

export const Default = () => ({
  components: { NotificationPrompt },
  props: {
    pushIcon: {
      default: text(
        "Push Icon",
        "https://s3.amazonaws.com/checkouts-public/notifications_grey_192x192.png"
      )
    },
    templateHeader: {
      default: text(
        "Template Header",
        "Would you like to receive our latest products and offers?"
      )
    },
    templateBody: {
      default: text(
        "Template Body",
        "You'll be notified about the latest sales and discounts."
      )
    },
    dontAllowBtnText: {
      default: text("Don't Allow Btn Text", "Don't Allow")
    },
    allowBtnText: {
      default: text("Allow Btn Text", "Allow")
    }
  },
  template: `
    <NotificationPrompt
      :pushIcon="pushIcon"
      :templateHeader="templateHeader"
      :templateBody="templateBody"
      :dontAllowBtnText="dontAllowBtnText"
      :allowBtnText="allowBtnText"
    />
  `
});

Default.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};
