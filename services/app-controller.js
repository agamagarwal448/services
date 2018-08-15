app.controller('myController', function($scope, $http){
    $scope.fname = 'qsgire';
    $http({
    	url: 'http://api.qshore.com/users',
    	method: 'GET',
    })
    .then(function(res){
    	//success
    	console.log('success');
    	console.log(res);
    	console.log(res.status);
    	console.log(res.data.status);
    	//console.log(res.data[0].fname);
    	$scope.users = res.data.data;
    	console.log(res.data.data[0].fname);
    }, function(res){
    	// failure
    	console.log('failure');
    	console.log(res);

    });
})