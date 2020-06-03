# flow-adaptive.js

Make your web apps look awesome on any device with zero dependencies.

No more headaches with adaptive sizes in pixels!

Also here is a [vue plugin](https://github.com/SashaSansay/flow-adaptive-vue).

## What is flow-adaptive.js about?

It's about dynamic change of html element font-size for comfortable using of rem
unit of measurement. 

## Installation

`npm install flow-adaptive`

## Usage

```javascript
import FlowAdaptive from 'flow-adaptive'

new FlowAdaptive({
  fontRatio: 1440 / 10, // the best practice is to set fontRatio to base layout width / 10
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

And then all you need is to set all sizes in rem units. For example: 

```scss
.foo {
  font-size: 1.6rem; // equal to 16px on 1440px, on 768px and on 375px screen width 
}
```

`fontRatio` can be either a number or a function callback. e.g: 

```javascript
new FlowAdaptive({
  fontRatio: 1440 / 10,
  ...
})
```

```javascript
new FlowAdaptive({
  fontRatio : () => 1440/10 * ((800/1440) / (window.innerHeight/window.innerWidth)),
})
```

Or you can use it without modules

```html
<script type="text/javascript" src="flow-adaptive.min.js"></script>
<script type="text/javascript">
new FlowAdaptive({...})
</script>
```
