(function ()
{
    var appModule = angular.module('exAngularApp', ['chart.js', 'btford.socket-io'])
        .factory('mySocket', function (socketFactory)	{
            return socketFactory();
    	})
        .controller('PageController', function($scope, mySocket) {
            $scope.yesClick = function() {
                console.log("Sending...");
                mySocket.emit("news", {hello: "world"});
            }

            $scope.noClick = function() {

            }

            $scope.idkClick = function() {

            }
        })
        .controller('DoughnutController', function($scope) {
            $scope.labels	=	["Download	Sales",	"In-Store	Sales",	"Mail-Order	Sales"];
    		$scope.data	=	[300,	500,	100];
        })
        .controller('SocketController', function(mysocket) {

        });
})();
