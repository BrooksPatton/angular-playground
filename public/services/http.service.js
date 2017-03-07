angular.module('app').service('api', function($http, $q) {

  function get() {
    return $http.get('/api/items')
  }

  function add(item) {
    return $http.post('/api/items', {
      name: item,
      finished: false,
      createdOn: new Date()
    })
  }

  return {
    get,
    add
  }
})
