function HomeCtrl($scope, $location, SessionService){
	
	//Set username to scope
	$scope.setUser = function () {

		SessionService.set('username', $scope.username);
		
		$location.path('/publications');

	}
}
function PublicationsCtrl($scope, SessionService){
	
	$scope.username = SessionService.get('username') ;

}