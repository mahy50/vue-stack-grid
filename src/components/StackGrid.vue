<template>
  <div class="stack-grid" ref="container">
    <div class="stack-grid-wrap" ref="wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import imagesLoaded from 'imagesloaded'
export default {
  name: 'stack-grid',
  data () {
    return {
      dataset: 0,
      oldColumnNum: 0
    }
  },
  props: {
    columnWidth: {
      type: [Number],
      default: 200
    },
    gutterX: {
      type: Number,
      default: 20
    },
    gutterY: {
      type: Number,
      default: 20
    }
  },
  methods: {
    getContainerWidth () {
      console.log(this.$refs.container.parentNode.clientWidth)
      if (this.$refs.container.parentNode.clientWidth) {
        return this.$refs.container.parentNode.clientWidth
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
      // 判断动画效果，item起始点
      const {columnWidth} = this
      // const {columnWidth, top = 0, left = 0, bottom = 0} = this
      let styles = {
        display: 'block',
        position: 'absolute',
        width: columnWidth + 'px',
        // bottom: bottom + 'px',
        // top: top + 'px',
        // left: left + 'px',
        // transform: `translateX(${posTop}px) translateY(${posLeft}px)`,
        transition: 'all 480ms ease-out',
        top: posTop + 'px',
        left: posLeft + 'px'
      }
      return styles
    },
    styleHelper (elm, styles) {
      let styleKeys = Object.keys(styles)
      styleKeys.forEach((key) => {
        elm.style.setProperty(key, styles[key])
      })
    },
    setWrapStyles (width, height) {
      this.$nextTick(() => {
        this.styleHelper(this.$refs.wrap, {
          height: height + 'px',
          width: width + 'px'
        })
      })
    },
    resetWrapStyles () {
      console.log('object')
      this.$nextTick(() => {
        this.styleHelper(this.$refs.wrap, {
          height: 0 + 'px'
        })
      })
    },
    genLayout (data, number) {
      const {columnWidth, gutterX, gutterY} = this
      let heights = Array(number).fill(0)
      data.forEach((item, index) => {
        let i = heights.indexOf(Math.min(...heights)) // 顺序填充，还是最小填充
        let top = heights[i]
        let left = i * (columnWidth + gutterX)
        heights[i] += this.getItemHeight(item) + gutterY
        let styles = this.genStyles(top, left)
        this.styleHelper(item.elm, styles)
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
        this.genLayout(this.$slots.default, num)
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
    window.addEventListener('resize', () => this.updateIfNeed())
  },
  destroyed () {
    window.removeEventListener('resize', () => this.updateIfNeed())
  }
}
</script>

<style>
.stack-grid {
  display: flex;
  justify-content: center;
}
.stack-grid-wrap {
  position: relative;
}
</style>
