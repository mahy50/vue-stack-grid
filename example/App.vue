<template>
  <div id="app">
    <!-- form control-->
    <div class="controller">
      <div class="btn-group">
        <button @click="addItems(2)">Append</button>
        <button @click="delItems()">Delete</button>
        <button @click="shuffle()">Shuffle</button>
        <label>Easing:</label>
        <select name="easing" id="" v-model="easing" aria-placeholder="easing">
          <option value="linear">linear</option>
          <option value="easeIn">easeIn</option>
          <option value="easeOut">easeOut</option>
          <option value="easeInOut">easeInOut</option>
          <option value="easeInSine">easeInSine</option>
          <option value="easeOutSine">easeOutSine</option>
          <option value="easeInOutSine">easeInOutSine</option>
          <option value="easeInQuad">easeInQuad</option>
          <option value="easeOutQuad">easeOutQuad</option>
          <option value="easeInOutQuad">easeInOutQuad</option>
          <option value="easeInCubic">easeInCubic</option>
          <option value="easeOutCubic">easeOutCubic</option>
          <option value="easeInOutCubic">easeInOutCubic</option>
          <option value="easeInQuart">easeInQuart</option>
          <option value="easeOutQuart">easeOutQuart</option>
          <option value="easeInOutQuart">easeInOutQuart</option>
          <option value="easeInQuint">easeInQuint</option>
          <option value="easeOutQuint">easeOutQuint</option>
          <option value="easeInOutQuint">easeInOutQuint</option>
          <option value="easeInExpo">easeInExpo</option>
          <option value="easeOutExpo">easeOutExpo</option>
          <option value="easeInOutExpo">easeInOutExpo</option>
          <option value="easeInCirc">easeInCirc</option>
          <option value="easeOutCirc">easeOutCirc</option>
          <option value="easeInOutCirc">easeInOutCirc</option>
          <option value="easeInBack">easeInBack</option>
          <option value="easeOutBack">easeOutBack</option>
          <option value="easeInOutBack">easeInOutBack</option>
        </select>
        <label for="">order:
          <input type="checkbox" v-model="order">
        </label>
      </div>
      <div class="slider-wrap">
        <span>Container Width: {{containerWidth}}%</span>
        <vue-slider class="slider" v-model="containerWidth"
          :min="30" :max="100" tooltip="false" :lazy="true" :height="2"></vue-slider>
      </div>
      <div class="slider-wrap">
        <span>columnWidth: {{columnWidth}}px</span>
        <vue-slider class="slider" v-model="columnWidth"
          :min="100" :max="300" tooltip="false" :lazy="true" :height="2"></vue-slider>
      </div>
      <div class="slider-wrap">
        <span>gutterX: {{gutterX}}px</span>
        <vue-slider class="slider" v-model="gutterX"
          :min="0" :max="80"  tooltip="false" :lazy="true" :height="2"></vue-slider>
      </div>
      <div class="slider-wrap">
        <span>gutterY: {{gutterY}}px</span>
        <vue-slider class="slider" v-model="gutterY"
          :min="0" :max="80"  tooltip="false" :lazy="true" :height="2"></vue-slider>
      </div>
    </div>
    <!-- stack grid container -->
    <div class="container" :style="{width: containerWidth + '%'}">
      <StackGrid :columnWidth="columnWidth" :gutterX="gutterX" :gutterY="gutterY"
      :order="order" :easing="easing">
        <div class="stack-item" :class="`stack-item-${item.classNum}`"
          v-for="(item, index) in dataset" :key="index">
          <div :style="item.styles" @click="changeSize(item)">{{item.index}}</div>
        </div>
      </StackGrid>

    </div>
  </div>
</template>

<script>
import StackGrid from '../src/StackGrid.vue'
import vueSlider from 'vue-slider-component'
export default {
  name: 'App',
  data () {
    return {
      dataset: [],
      containerWidth: 100,
      columnWidth: 200,
      gutterX: 20,
      gutterY: 20,
      order: false,
      easing: 'easeOut'
    }
  },
  components: {
    StackGrid,
    vueSlider
  },
  methods: {
    getStyle () {
      return {
        display: 'block',
        width: '200px',
        height: `${this.getRandomNum(100, 350)}px`
      }
    },
    getRandomNum (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    },
    genItems (i) {
      return {
        index: i,
        styles: this.getStyle(),
        classNum: this.getRandomNum(1, 9)
      }
    },
    getArray (num, start) {
      let arr = []
      for (let i = 0; i < num; i++) {
        let index = start + i
        arr[i] = this.genItems(index)
      }
      return arr
    },
    addItems (num) {
      let array = this.getArray(num, this.dataset.length)
      this.dataset.push(...array)
    },
    delItems (num) {
      this.dataset = []
    },
    shuffle () {
      const dataset = this.dataset
      dataset.forEach((item, index) => {
        const i = this.getRandomNum(0, dataset.length - 1)
        const temp = dataset[index]
        dataset[index] = dataset[i]
        dataset[i] = temp
      })
      this.dataset = [...dataset]
    },
    changeSize (e) {
      e.styles.height = this.getRandomNum(200, 300) + 'px'
    }
  },
  mounted () {
    this.addItems(this.getRandomNum(15, 20))
  }
}
</script>

<style>
@import './css/patterns.css';
.controller {
  display: flex;
  justify-content: space-around;
  margin: 0 -5px;
  padding: 10px;
  background: #fff;
  position: sticky;
  top: 0;
  border-bottom: 5px solid #3498dc;
  z-index: 1;
}
.slider-wrap {
  width: 15%;
  display: inline-block;
}
.container {
  margin: 10px auto 30px;
  border: 1px solid #999;
  background: #eee;
}
.stack-item {
  border-radius: 6px;
  cursor: pointer;
}
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
span, label {
  font-size: 16px;
}
button {
  padding: 5px 16px;
  border-radius: 5px;
  background: none;
}
select, option {
  height: 26px;
  background: #fff;
}
</style>
