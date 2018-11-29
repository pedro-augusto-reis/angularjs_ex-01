angular.module("listaTelefonica").config(function ($httpProvider) {
    $httpProvider.interceptors.push("timeStampInterceptor");
    $httpProvider.interceptors.push("errorInteceptor");
    $httpProvider.interceptors.push("loadingInterceptor");
});