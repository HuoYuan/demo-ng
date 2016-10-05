const UserService = ($http, $q, $resource) => {
  const Service = {
    getInfo: () => {
      const deferred = $q.defer();
      deferred.resolve({ name: 'Sway' });
      return deferred.promise;
    },
  };
  return Service;
};

export default UserService;
