app.directive('myDirective', function(){
    return {
        restrict: 'AE',
        scope: {
            customerInfo: '=info'
        },
        templateUrl: 'js/directives/myDirective.html'
    };
});
