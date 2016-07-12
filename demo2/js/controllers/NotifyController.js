app.controller('NotifyController', ['$scope','notify', function ($scope, notify) {
    $scope.callNotify = function(msg) {
      notify(msg);
    };
}]);
