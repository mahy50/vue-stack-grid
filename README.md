# vue-stack-grid

>Grid layout components for Vue.js, like Pinterest

- [vue-stack-grid](#vue-stack-grid)
  - [Live Demo](#live-demo)
  - [Install](#install)
  - [Example](#example)
  - [Props](#props)
  - [License](#license)

## Live Demo

[Demo](https://mahy50.github.io/vue-stack-grid)

## Install

You can install from `npm` or `yarn`

```bash
$ npm install vue-stack-grid-component
or
$ yarn add vue-stack-grid-component
```

## Example

In Vue

```vue
<template>
  <div class="container">
    <StackGrid
      :columnWidth="200"
      :gutterX="20"
      :gutterY="20">
        <!-- you component like this -->
        <div class="stack-item"
          v-for="(item, index) in dataset" :key="index"
        >
          <!-- some thing have fixed height-->
        </div>
    </StackGrid>
  </div>
</template>
<script>
import StackGrid from 'vue-stack-grid-component'

export default {
  ...
  components: {
    StackGrid
  },
  ...
}
</script>
```

## Props

| Name        | Type    | Default   | Description                                           |
| ----------- | ------- | --------- | ----------------------------------------------------- |
| columnWidth | Number  | 200       | Specify column width as an number(px)                 |
| gutterX     | Number  | 20        | Adds horizontal space between item elements           |
| gutterY     | Number  | 20        | Adds vertical space between item elements             |
| center      | Boolean | true      | Specify that all columns are vertically centered      |
| easing      | String  | 'easeOut' | Specify a css valid transition-timing-function string |
| duration    | String  | '480ms'   | Specify duration of animation in ms                   |
| delay       | String  | '0ms'     | Specify delay of the initial animation in ms          |
| order       | Boolean | false     | The order of item, left-to-right order                |

[Transition-Timing-Function](https://github.com/ai/easings.net/blob/master/easings.yml)

linear easeIn easeOut easeInOut easeInSine easeOutSine ...

## License

Released under the [MIT](LICENSE) License.
