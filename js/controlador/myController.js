angular
    .module('pruebaApp', [])
    /* este puede generar problemas a la hora de minimizar la aplicacion */
    .controller('pruebaAppCtrl', function ($scope) {
        $scope.algo = "Hola Angular, usando controller más simple";
    })
    /* los problemas de minimización se solucionarian añadiendo la variable $scope -->SERIA EL MODO IDEAL <-- */
    .controller('pruebaAppCtrl2', ['$scope', function ($scope) {
        $scope.algo = "Hola Angular, usando controller más eficaz";
  }])
    /* La recomendación de esta opción 2 se basa en que así puedes tener varios controladores en tu página, incluso anidados unos dentro de otros, y los datos que nos ofrece cada uno están separados en distintos espacios de nombres. */
    .controller("pruebaAppCtrl3", function () {
        this.algo = "Esto funciona! Gracias Angular";
    })
    /* Botones para acumuluar */
    .controller("acumuladorAppCtrl", ["$scope", function ($scope) {
        //esta función es mi controlador
        //var $scope = this;
        $scope.total = 0;
        $scope.cuantos = 0;

        $scope.sumar = function () {
            $scope.total += parseInt($scope.cuantos);
        }
        $scope.restar = function () {
            $scope.total -= parseInt($scope.cuantos);
        }
}]);