class NavBarDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = '/templates/nav-bar.html';
    this.scope = {};
  }
  link($scope, element, attrs) {
    $scope.barLists = [
      { enName: 'Economy', cnName: '经济' },
      { enName: 'Population', cnName: '人口' },
    ];
    $scope.isActive = attrs.param;
    $scope.activate = (string) => {
      $scope.isActive = string;
    };
  }
}

export default NavBarDirective;
