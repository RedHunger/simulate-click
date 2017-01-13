angular
    .module('simCl')
    .directive('simClick', function (){
        return {
            scope: {
                callback: "&"
            },
            template :  "<div class='element' id='{{id}}' ng-click='incrementId()' > " +
                            "<span>{{id}}</span>" +
                        "</div>",
            restrict: 'E',

            controller : function ($scope) {
                $scope.id = 0;
                $scope.incrementId = function increment() {
                    $scope.id++;
                }
            },
            controllerAs: 'counter',

            link: function (scope,element){
                // scope.incrementId = scope.incrementId();
                element.bind('click', function(e) {
                    var id = e.target.id;
                    console.log(scope);
                    console.log("Element with id:"+ id + ", was clicked");
                });


            }
        }
    });


