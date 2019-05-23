import * as type from './type.js'

export function getHome(text) {
  return { type: type.HOME, text }
}
export function setHome(text) {
  return { type: type.SET_HOME, text }
}
export function setVisible(show) {
  return { type: type.VISIBLE_TODO, show }
}