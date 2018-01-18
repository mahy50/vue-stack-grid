<template>
  <div class="stack-grid" ref="container" :style="containerStyles">
    <div class="stack-grid-wrap" ref="wrap" :style="{position: 'relative'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import './animation/requestAnimationFrame'
import * as easings from './animation/easings'
import { transition, setStyles } from './utils/styleHelper'
export default {
  name: 'stack-grid',
  data () {
    return {
      dataset: 0,
      oldColumnNum: 0
    }
  },
  props: {
    columnWidth: { type: Number, default: 200 },
    gutterX: { type: Number, default: 20 },
    gutterY: { type: Number, default: 20 },
    center: { type: Boolean, default: true },
    easing: { type: String, default: 'easeOut' },
    duration: { type: String, default: '480ms' },
    delay: { type: String, default: '0ms' },
    order: { type: Boolean, default: false }
  },
  computed: {
    containerStyles () {
      return {
        display: this.center ? 'flex' : '',
        'justify-content': this.center ? 'center' : ''
      }
    }
  },
  methods: {
    getContainerWidth () {
      let parentNode = this.$refs.container.parentNode
      if (parentNode || parentNode.clientWidth) {
        return parentNode.clientWidth
      } else {
        return window ? window.document.clientWidth : ''
      }
    },
    getColumnNum (containerWidth) {
      const {columnWidth, gutterX} = this
      return Math.floor((containerWidth + gutterX) / (columnWidth + gutterX))
    },
    getItemHeight (child) {
      if (child.elm) {
        let height = window.getComputedStyle(child.elm).height.replace('px', '')
        return Math.ceil(height)
      }
    },
    genStyles (posTop, posLeft) {
      const {columnWidth} = this
      let styles = {
        display: 'block',
        position: 'absolute',
        top: posTop + 'px',
        left: posLeft + 'px',
        transition: transition(['opacity', 'top', 'left'], this.duration, easings[this.easing], this.delay),
        width: columnWidth + 'px'
      }
      return styles
    },
    setWrapStyles (width, height) {
      this.$nextTick(() => {
        setStyles(this.$refs.wrap, {
          height: height + 'px',
          width: width + 'px'
        })
      })
    },
    resetWrapStyles () {
      this.$nextTick(() => {
        setStyles(this.$refs.wrap, {
          height: 0 + 'px'
        })
      })
    },
    genLayout (data, number) {
      if (!data) return
      const {columnWidth, gutterX, gutterY, order} = this
      let heights = Array(number).fill(0)
      let i
      data.forEach((item, index) => {
        if (order) {
          i = index % heights.length
        } else {
          i = heights.indexOf(Math.min(...heights))
        }
        let posTop = heights[i]
        let posLeft = i * (columnWidth + gutterX)
        heights[i] += this.getItemHeight(item) + gutterY
        let styles = this.genStyles(posTop, posLeft)
        setStyles(item.elm, styles)
      })
      const width = number * (columnWidth + gutterX) - gutterX
      const height = Math.max(...heights) - gutterY
      this.setWrapStyles(width, height)
      this.dataset = this.$slots.default.length
    },
    updateIfNeed (need) {
      const num = this.getColumnNum(this.getContainerWidth())
      const {oldColumnNum} = this
      if (need || oldColumnNum !== num) {
        requestAnimationFrame(() => this.genLayout(this.$slots.default, num))
        this.oldColumnNum = num
      }
    },
    init () {
      const columnNum = this.getColumnNum(this.getContainerWidth())
      if (this.$slots.default) {
        this.genLayout(this.$slots.default, columnNum)
      } else {
        this.$nextTick(() => {
          this.genLayout(this.$slots.default, columnNum)
        })
      }
    }
  },
  updated () {
    if (this.$slots.default) {
      this.updateIfNeed(true)
    } else {
      this.resetWrapStyles()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
    window.addEventListener('resize', this.updateIfNeed)
  },
  destroyed () {
    window.removeEventListener('resize', this.updateIfNeed)
  }
}
</script>
