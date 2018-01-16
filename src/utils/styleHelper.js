
export const transition = (propertys, duration, timingFunction, delay) => {
  return propertys.map((prop) =>
    `${prop} ${duration} ${timingFunction} ${delay}`).join(',')
}
export const setStyles = (elm, styles = {}) => {
  let styleKeys = Object.keys(styles)
  styleKeys.forEach((key) => {
    elm.style.setProperty(key, styles[key])
  })
}
