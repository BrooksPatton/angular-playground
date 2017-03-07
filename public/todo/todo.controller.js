angular.module('app').controller('todo', function($scope, api) {
  function loadItems() {
    api.get().then((items) => {
      $scope.items = items.data
    })
  }

  loadItems()

  $scope.addItem = function() {
    const item = this.todoItem

    api.add(item).then(() => {
      loadItems()
    })
  }
})
