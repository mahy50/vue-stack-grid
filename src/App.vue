<template>
  <div id="app">
    <!-- form control-->
    <div class="controller">
      <div class="btn-group">
        <button @click="addItems(2)">添加</button>
        <button @click="delItems()">删除</button>
      </div>
      <div class="slider-wrap">
        <span>Container Width: {{containerWidth}}%</span>
        <vue-slider class="slider" v-model="containerWidth"
          :min="30" :max="100" tooltip="false" :height="2"></vue-slider>
      </div>
      <div class="slider-wrap">
        <span>columnWidth: {{columnWidth}}px</span>
        <vue-slider class="slider" v-model="columnWidth"
          :min="100" :max="400" tooltip="false" :height="2"></vue-slider>
      </div>
      <div class="slider-wrap">
        <span>gutterX: {{gutterX}}px</span>
        <vue-slider class="slider" v-model="gutterX"
          :min="0" :max="80"  tooltip="false" :height="2"></vue-slider>
      </div>
      <div class="slider-wrap">
        <span>gutterY: {{gutterY}}px</span>
        <vue-slider class="slider" v-model="gutterY"
          :min="0" :max="80"  tooltip="false" :height="2"></vue-slider>
      </div>
    </div>
    <!-- stack grid container -->
    <div class="container" :style="{width: containerWidth + '%'}">
      <StackGrid :columnWidth="columnWidth" :gutterX="gutterX" :gutterY="gutterY">
        <div class="stack-item" :class="`stack-item-${item.classNum}`"
          v-for="(item, index) in dataset" :key="index">
          <div :style="item.styles">{{index}}</div>
          <!-- <img class="clearfix" src="#" :style="item.styles"/> -->
        </div>
      </StackGrid>

    </div>
  </div>
</template>

<script>
import StackGrid from './components/StackGrid'
import vueSlider from 'vue-slider-component'
export default {
  name: 'App',
  data () {
    return {
      dataset: [],
      containerWidth: 100,
      columnWidth: 200,
      gutterX: 20,
      gutterY: 20
    }
  },
  components: {
    StackGrid,
    vueSlider
  },
  methods: {
    getStyle () {
      return `display: block; width: 200px; height: ${this.getRandomNum(100, 350)}px`
    },
    getRandomNum (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    },
    shuffleItems () {
      return {
        styles: this.getStyle(),
        classNum: this.getRandomNum(1, 9)
      }
    },
    getArray (num, start) {
      let arr = []
      for (let i = 0; i < num; i++) {
        arr[i] = this.shuffleItems()
      }
      return arr
    },
    addItems (num) {
      let array = this.getArray(num, this.dataset.length)
      this.dataset.push(...array)
    },
    delItems (num) {
      this.dataset = []
    }
  },
  mounted () {
    this.addItems(this.getRandomNum(10, 10))
  }
}
</script>

<style>
@import './css/patterns.css';
.btn-group {
  width: 100%;
}
.controller {
  margin: 0 -5px;
  padding: 10px;
  background: #fff;
  position: sticky;
  top: 0;
  border-bottom: 5px solid #3498dc;
  z-index: 1;
}
.slider-wrap {
  width: 20%;
  display: inline-block;
}
.container {
  margin: 10px auto 30px;
  border: 1px solid #999;
  background: #eee;
}
.stack-item {
  border-radius: 6px;
}
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
span {
  font-size: 16px;
}
button {
  padding: 5px 16px;
  border-radius: 5px;
  background: none;
}
</style>
