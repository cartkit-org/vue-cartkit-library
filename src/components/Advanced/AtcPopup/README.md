## Atc Popup

An interactive popup that appears on the Add To Cart button

## Importing

    import { AtcPopup } from 'vue-cartkit-library'

## Example

    <AtcPopup
       heading="Please enter your email"
       headingColor="#222222"
       subheading="To add this item to your cart, please enter your email address"
       subheadingColor="#222222"
       emailPlaceholderText="Email address"
       buttonText="Add To Cart"
       buttonFontColor="#ffffff"
       buttonColor="#33C3F0"
       :canClose="true"
       :loading="false"
    />

## Props

All the available props:

| Property             | Description                 | Type      | Default   |
| -------------------- | --------------------------- | --------- | --------- |
| heading              | Popup Heading               | `String`  | ''        |
| headingColor         | Popup Heading Text Color    | `String`  | '#222222' |
| subheading           | Popup SubHeading            | `String`  | ''        |
| subheadingColor      | Popup SubHeading Text Color | `String`  | '#222222' |
| emailPlaceholderText | Email Input Placeholder     | `String`  | ''        |
| buttonText           | Button Text                 | `String`  | ''        |
| buttonFontColor      | Button Text Color           | `String`  | '#ffffff' |
| buttonColor          | Button Background Color     | `String`  | '#33C3F0' |
| canClose             | Show close icon             | `Boolean` | true      |
| loading              | Show a loader on the btn    | `Boolean` | false     |

## Events

| Event    | Trigger                       | Return                       |
| -------- | ----------------------------- | ---------------------------- |
| closed   | When close icon is clicked    | `null`                       |
| submited | When submit button is clicked | `Object` { email: `String` } |
