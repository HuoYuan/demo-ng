import UserService from './user';

export default angular.module('services', ['ngResource'])
.service('UserService', UserService)
.name;
