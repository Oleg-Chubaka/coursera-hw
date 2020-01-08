(function () {
'use strict';
  
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = '';
  $scope.message = '';
  $scope.msg_color = '';
  
  $scope.check = function() {
    if ($scope.dishes == '') {
      $scope.message = 'Please enter data first';
      $scope.msg_color = 'red';
      return null;
    } else {
      $scope.msg_color = 'green';
      var number = count_dishes();
      if (number <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    }
  };

  function count_dishes() {
    return $scope.dishes.split(',').length;
  }

}
  
})();