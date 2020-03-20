const buttonCode = `import { Button } from "vue-cartkit-library"

export default {
  components: { Button }
}`;

const buttonUsage = `<Button
  theme="cc"
  type="primary"
  size="sm"
  link="/some-link"
  :new-tab="false"
  :disabled="false"
>
  This is the button Text
</Button>`;

export const snippets = {
  button: {
    code: buttonCode,
    usage: buttonUsage
  }
};
