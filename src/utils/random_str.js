export default function(len = 32) {
  const $charts = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $charts.length
  let str = ''
  for (let i = 0; i < len; i++) {
    str += $charts.charAt(Math.floor(Math.random() * maxPos))
  }
  return str
}
