const data = [{
  name: 'new test'
}]

function get() {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

function add(item) {
  return new Promise((resolve, reject) => {
    data.push(item)

    resolve()
  })
}

module.exports = {
  get,
  add
}
