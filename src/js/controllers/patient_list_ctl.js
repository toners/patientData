/**
 * Alerts Controller
 */

angular
    .module('RDash')
    .controller('PatientListCtrl', ['$scope', PatientListCtrl]);

function PatientListCtrl($scope) {
    $scope.patients = [{
        name: 'Barney Rubble',
        msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
    }, {
        name: 'Fred Flinstone',
        msg: 'Found a bug? Create an issue with as many details as you can.'
    }];

      $scope.filteredPatients= []
      ,$scope.currentPage = 1
      ,$scope.numPerPage = 10
      ,$scope.maxSize = 5;

    $scope.$watch('currentPage + numPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;
        
        $scope.filteredPatients = $scope.patients.slice(begin, end);
      });

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}