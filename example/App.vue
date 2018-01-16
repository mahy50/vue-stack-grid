<template>
  <div id="app">
    <!-- form control-->
    <div class="controller">
      <div class="btn-group">
        <button @click="addItems(2)">添加</button>
        <button @click="delItems()">删除</button>
        <button @click="shuffle()">变换</button>
        <label>Easing:</label>
        <select name="easing" id="" v-model="easing" aria-placeholder="easing">
          <option value="linear">linear</option>
          <option value="easeIn">easeIn</option>
          <option value="easeOut">easeOut</option>
          <option value="sineIn">sineIn</option>
          <option value="sineOut">sineOut</option>
          <option value="sineInOut">sineInOut</option>
          <option value="quadIn">quadIn</option>
          <option value="quadOut">quadOut</option>
          <option value="quadInOut">quadInOut</option>
          <option value="cubicIn">cubicIn</option>
          <option value="cubicOut">cubicOut</option>
          <option value="cubicInOut">cubicInOut</option>
          <option value="quartIn">quartIn</option>
          <option value="quartOut">quartOut</option>
          <option value="quartInOut">quartInOut</option>
          <option value="quintIn">quintIn</option>
          <option value="quintOut">quintOut</option>
          <option value="quintInOut">quintInOut</option>
          <option value="expoIn">expoIn</option>
          <option value="expoOut">expoOut</option>
          <option value="expoInOut">expoInOut</option>
          <option value="circIn">circIn</option>
          <option value="circOut">circOut</option>
          <option value="circInOut">circInOut</option>
          <option value="backIn">backIn</option>
          <option value="backOut">backOut</option>
          <option value="backInOut">backInOut</option>
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
    this.addItems(this.getRandomNum(10, 10))
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
  height: 30px;
}
</style>
