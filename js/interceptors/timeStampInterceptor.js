angular.module("listaTelefonica").factory("timeStampInterceptor", function () {
    return {
        request: function (config) {
            var url = config.url;
            if(url.indexOf('view') > -1) return config;
            var timeStamp = new Date().getTime();
            config.url = url + "?timeStamp=" + timeStamp;
            return config;
        }
    }
});

// return {
//     request: function (config) {
//
//     },
//     requestError: function (rejection) {
//
//     },
//     response: function (response) {
//
//     },
//     responseError: function (rejection) {
//
//     }
// }