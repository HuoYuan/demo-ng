const HomeController = ($scope, UserService) => {
  $scope.user = {};
  UserService.getInfo().then(user => {
    $scope.user = user;
  });
};

export default HomeController;
