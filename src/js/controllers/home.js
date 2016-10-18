export default ($scope, UserService) => {
  'ngInject';
  $scope.user = {};
  UserService.getInfo().then(user => {
    $scope.user = user;
  });
};
