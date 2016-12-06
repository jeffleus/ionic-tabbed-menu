(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', '$timeout', '$ionicPopup', '$cordovaToast'];

    function logger($log, $timeout, $ionicPopup, $cordovaToast) {
        var service = {
            showToasts: true,
            toastTimeout: 750, 

            error   : error,
            info    : info,
            success : success,
            warning : warning,

            // straight to console; bypass toastr
            log     : $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            var alertPopover = $ionicPopup.alert({
                title: 'Error',
                template: message
            });
            alertPopover.then(function(res){
                $log.info('error alert dismissed');
            });
            $timeout(function() {
                alertPopover.close();
            }, service.toastTimeout);
//            $cordovaToast.showWithOptions(message, "short", "bottom", {
//                backgroundColor: '#FF0000',
//                textColor: '#FFFF00'
//            });
            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
//            $cordovaToast.show(message, title);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
//            $cordovaToast.show(message, title);
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
//            $cordovaToast.show(message, title);
            $log.warn('Warning: ' + message, data);
        }
    }
}());