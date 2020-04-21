## Atc Popup

An promt popup asking for user permission to show push notifications

## Importing

    import { NotificationPrompt } from 'vue-cartkit-library'

## Example

    <NotificationPrompt
       pushIcon="https://s3.amazonaws.com/checkouts-public/notifications_grey_192x192.png"
       templateHeader="Would you like to receive our latest products and offers?"
       templateBody="You'll be notified about the latest sales and discounts."
       dontAllowBtnText="Don't Allow"
       allowBtnText="Allow"
    />

## Props

All the available props:

| Property         | Description          | Type     | Default |
| ---------------- | -------------------- | -------- | ------- |
| pushIcon         | Icon of the prompt   | `String` | ''      |
| templateHeader   | Prompt title         | `String` | ''      |
| templateBody     | Prompt body          | `String` | ''      |
| dontAllowBtnText | Don't allow btn text | `String` | ''      |
| allowBtnText     | Allow btn text       | `String` | ''      |

## Events

| Event   | Trigger                      | Return |
| ------- | ---------------------------- | ------ |
| closed  | When dontAllowBtn is clicked | `null` |
| allowed | When allowBtn is clicked     | `null` |
