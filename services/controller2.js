app.controller('myCtrl', function($scope, $http){
    $scope.fname = 'qshore';
 

    $http({
        url: 'http://api.qshore.com/users',
    	//url: 'http://newtel.in/asdfasdf',
    	method: 'GET',
    })
    .then(function(res){
    	//success
    	$scope.users = res.data.data;
    }, function(res){
    	// failure
    	console.log('failure');
    	console.log(res);

    });


    $scope.viewUser = function(uid){
        //alert($scope.uid);
        //alert(users.uid);
        var url = 'http://api.qshore.com/view-user/'+uid;

        $http({
            url:url,
            method:'GET'

        }).then(function(res){
            console.log('success');
            console.log(res)
            $scope.userInfo = res.data.data;
        }, function(r){
            console.log('failure');
            console.log(r)
        });
    };

    $scope.createUser = function(){
        alert('createUser');
        var url = 'http://api.qshore.com/add-user';
        var user = {
                fname: 'Mohan',
                lname:'Lal',
                age:23,
                email:'mohanlal@123',
                password:'lal123'
            };
        $http({
            url:url,
            method:'POST',
            data : user
        }).then(function(res){
            console.log('success');
            console.log(res)
            $scope.userInfo = res.data.data;

             
        }, function(r){
            console.log('failure');
            console.log(r)
        });
}
});
