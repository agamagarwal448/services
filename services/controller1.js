app.controller('myCtrl',function($scope,$http){
	$scope.fname="qshore";
	$http({
		url:'http://api.qshore.com/users',
		//url: 'http://newtel.in/asdfasdf',
		method:'GET'
})
	.then(function(res){
	console.log('success');
	console.log(res);
	$scope.users=res.data.data;
	console.log(res.data.data[0].fname);

},function(res){
console.log("failure");
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

    $scope.createUser=function(){
    	alert("createmsg");
    	var url='http://api.qshore.com/add-user';
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
            	data:user,
            }).then(function(res){
            	console.log('success');
            	console.log(res);
            	$scope.userInfo = res.data.data;

            	$http({
                url: 'http://api.qshore.com/users',
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

            },function(r){
            	console.log('failure');
            	console.log(r);
            });
    }

    $scope.editUser=function(uid){
    	var url='http://api.qshore.com/edit-user/'+uid;
    	var user={
                fname: 'Mohan upd',
                lname:'Lal',
                age:23,
                email:'mohanlalupd@123',
                password:'lal1upd23'
            };
            $http({
            	url:url,
            	method:'PUT',
            	data:user,
            }).then(function(res){
            	console.log('success');
            	console.log(res);

            	$http({
                url: 'http://api.qshore.com/users',
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

            },function(r){
            	console.log('failure');
            	console.log(r);
            });

            $scope.deleteuser=function(uid){
            	var url= 'http://api.qshore.com/delete-user/'+uid;
               $http({
               	url:url,
               	method:'DELETE',
               })
               .then(function(res){
               	console.log('success');
               	console.log(res);
               	$scope.userInfo = res.data.data;

               	$http({
               		url:'http://api.qshore.com/users',
               		method:'GET',
               	})
               	.then(function(res){
               		console.log('success');
               		console.log(res);
               		$scope.users=res.data.data;
               	},function(r){
               		console.log('failure');
               		console.log(r);
               	})

                },function(r){
               	console.log('failure');
               	console.log('r');
               });

               }

}
});