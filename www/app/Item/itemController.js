angular.module('starter.controllers')

.controller('ItemCtrl', function($scope, $log) {
	$scope.vm = {
		message: 'This is a single item view reached from the menu.'
	};
	
	$scope.$on('$ionicView.enter', function() {
		$log.info('ItemCtrl_enter');
	});
	$scope.$on('$ionicView.leave', function() {
		$log.info('SearchCtrl_leave');
	});
});
