import Vue from "vue";
import AtcPopup from "~/components/Advanced/AtcPopup/";
import { withKnobs, text, boolean, color } from "@storybook/addon-knobs";

const container = () => ({
  template:
    '<div style="width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background:#eee;"><story /></div>'
});

export default {
  title: "AtcPopup",
  component: AtcPopup,
  decorators: [withKnobs, container]
};

export const Default = () => ({
  components: { AtcPopup },
  props: {
    heading: {
      default: text("Heading", "Please enter your email")
    },
    headingColor: {
      default: color("Heading Color", "#222222")
    },
    subheading: {
      default: text(
        "Sub Heading",
        "To add this item to your cart, please enter your email address"
      )
    },
    subheadingColor: {
      default: color("Sub Heading Color", "#222222")
    },
    emailPlaceholderText: {
      default: text("Email Placeholder", "Email address")
    },
    buttonText: {
      default: text("Button Text", "Add to Cart")
    },
    buttonFontColor: {
      default: color("Button Font Color", "#FFFFFF")
    },
    buttonColor: {
      default: color("Button Color", "#33C3F0")
    },
    loading: {
      default: boolean("Button Loading", false)
    }
  },
  template: `
    <AtcPopup
      :heading="heading"
      :headingColor="headingColor"
      :subheading="subheading"
      :subheadingColor="subheadingColor"
      :emailPlaceholderText="emailPlaceholderText"
      :buttonText="buttonText"
      :buttonFontColor="buttonFontColor"
      :buttonColor="buttonColor"
      :loading="loading"
    />
  `
});
