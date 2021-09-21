import Vue from 'vue'
const moment = require('moment')

require('moment/locale/es')
// require('moment/locale/en-gb')

Vue.use(require('vue-moment'), {
  moment
})

Vue.filter('formatDate', function (date, arg1) {
  const format = 'YYYY/MM/DD h:mma'
  if (arg1) {
    return moment(date, arg1).format(format)
  } else {
    return moment(date).format(format)
    // return moment(date).format('L LTS')
  }
})

Vue.filter('formatMoney', function (value) {
  const val = (value / 1).toFixed(0).replace('.', ',')
  return `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
})
