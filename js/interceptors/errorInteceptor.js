/*
$q = implementation of promises/deferred
 */

angular.module("listaTelefonica").factory("errorInteceptor", function ($q, $location) {
    return {
        responseError: function (rejection) {
            if (rejection.status === 404) {
                $location.path("/error");
            }
            return $q.reject(rejection);
        }
    };
});