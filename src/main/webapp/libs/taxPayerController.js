/// <reference path="angular.min.js" />

var taxPayerModule = angular.module("taxPayerModule", []);

taxPayerModule.controller("taxPayerController", function($scope) {

	$scope.taxPayers = [

	]

	// Adding Tax payer and redirecting to servlet using $http service
	$scope.AddTaxPayer = function(data) {
		alert('I am in add function');
		$http({
			method : 'POST',
			url : 'taxPayerServlet',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : $scope.user
		}).success(function(data) {
			$scope.status = data;
		});
	};

	$scope.cancel = function() {
		$scope.data = {};
	}

})
