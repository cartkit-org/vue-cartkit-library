## Sales Pop
An interactive pop that appears on the site.

## Importing
    import { SalesPop } from 'vue-cartkit-library'

## Example
    <SalesPop                
       :border-radius="25"
       img="/img/pop-image.png"
       top="Jane in Miami, Florida USA"
       middle="Bought a Kodak Polaroid Camera"
       purchasedAt="Some Date"
       click-url="https://someurl.com"
       background-color="#fff"
       background-img="https://res.cloudinary.com/carlsapps/image/christmas-3_ensom9.png"
       text-color="#fff"
    />

## Props
All the available props:

|Property          |Description                     |Type            |Default    |
|------------------|--------------------------------|----------------|-----------|
|img               |Pop Image                       | `String`       |''
|top               |Top Headline                    | `String`       |''
|middle            |Middle Headline                 | `String`       |''
|fromAnonymous     |Anonymous Default Name          | `String`       |null
|popDate           |Pop Date                        | `String`       |''
|backgroundColor   |Pop Background Color            | `String`       |'#fff'
|textColor         |Pop Text Color                  | `String`       |''
|borderRadius      |Border Radius in Pixels         | `Number`       |0
|deletePop         |Show Delete Option              | `Boolean`      |false
|anonymous         |Show pop as Anonymous           | `Boolean`      |false
|locale            |Pop Language                    | `String`       |'en'
|clickUrl          |URL to redirect when pop click  | `String`       |''
|backgroundImg     |Pop Background Image            | `String`       |null
|popSize           |Pop Size                        | `String`       |'small'
|paddingTop        |Padding Top                     | `String`       |'0px'
|paddingBottom     |Padding Bottom                  | `String`       |'0px'
|paddingRight      |Padding Right                   | `String`       |'0px'
|paddingLeft       |Padding Left                    | `String`       |'0px'
