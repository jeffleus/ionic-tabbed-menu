(function() {
'use strict';

var ctrl = 'ListCtrl';
angular.module('starter.controllers')

.controller(ctrl, function($scope, $log) {

	$scope.vm = {
		message: 'This is a list view reached from the menu.',
		items: ['One', 'Two', 'Three']
	};
	
	$scope.$on('$ionicView.enter', function() {
		$log.info(ctrl + '_enter');
	});
	$scope.$on('$ionicView.leave', function() {
		$log.info(ctrl + '_leave');
	});
});
})();