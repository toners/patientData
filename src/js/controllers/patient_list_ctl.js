/**
 * Alerts Controller
 */

angular
    .module('RDash')
    .controller('PatientListCtrl', ['$scope', PatientListCtrl]);

function PatientListCtrl($scope) {
    $scope.patients = [{
        name: 'Barney Rubble',
        complete: true,
        mrn: '1234',
        medicalCard: '44444'
    }, {
        name: 'Fred Flinstone',
        complete: true,
        mrn: '2341234',
        medicalCard: '554544'
    }];

    $scope.itemsByPage=15;
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


}