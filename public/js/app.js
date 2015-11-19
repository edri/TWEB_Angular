(function ()
{
    var appModule = angular.module('exAngularApp', ['chart.js', 'btford.socket-io'])
        .factory('mySocket', function (socketFactory)	{
            return socketFactory();
    	})
        .controller('PageController', function($scope, mySocket) {
            $scope.yesClick = function() {
                mySocket.emit("vote", {vote: "yes"});
            }

            $scope.noClick = function() {
                mySocket.emit("vote", {vote: "no"});
            }

            $scope.idkClick = function() {
                mySocket.emit("vote", {vote: "idk"});
            }
        })
        .controller('DoughnutController', function($scope, mySocket) {
            $scope.labels = ["Yes", "No", "I don't know"];
    		$scope.data = [0, 0, 0];

            mySocket.on("newVote", function(data) {
                $scope.data = [data.yes, data.no, data.idk];
            });
        });
})();
