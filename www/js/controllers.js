function HomeCtrl($scope, $location, SessionService){
	
	//Set username to scope
	$scope.setUser = function () {

		SessionService.set('username', $scope.username);
		
		$location.path('/publications');

	}
}
function PublicationsCtrl($scope, SessionService){
	
	$scope.username = SessionService.get('username') ;

	var publications = [
		{ 
			body: 'Lorem ipsum',
			user_id: '1',
			date: '10/08/2012',
			comments:[
				{
					body: 'Coment 1',
					user_id: '12',
					date: '10/08/2112'
				},
				{
					body: 'Coment 2',
					user_id: '32',
					date: '10/08/2532'
				},
				{
					body: 'Coment 3',
					user_id: '42',
					date: '10/08/2112'
				}
			]

		},
		{ 
			body: 'Lorem ipsum 2',
			user_id: '2',
			date: '10/08/2112',
			comments:[
				{
					body: 'Coment 1',
					user_id: '12',
					date: '10/08/2112'
				}
			]

		},
		{ 
			body: 'Lorem ipsum 3',
			user_id: '3',
			date: '10/08/2212'

		}
	];

	$scope.publications = publications;

}