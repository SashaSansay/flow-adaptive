# flow-adaptive.js

Make your web apps looks awesome on any device.

No more headaches with adaptive sizes in pixels!

## What is flow-adaptive.js about?

It's about dynamic change of html element font-size for comfortable using of rem
unit of measurement. 

## Installation

`npm install flow-adaptive`

## Usage

```javascript
import FlowAdaptive from 'flow-adaptive'

new FlowAdaptive({
  fontRatio: 1440 / 10,
  maxWidth: 1440,
  minWidth: 650,
  breakPoints: [
    {
      minWidth: 650,
      maxWidth: 900,
      fontRatio: 768 / 10,
    },
    {
      maxWidth: 649,
      fontRatio: 375 / 10,
    },
  ],
})
```
