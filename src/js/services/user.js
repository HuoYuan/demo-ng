export default ($http, $q, $resource) => {
  'ngInject';
  const Service = {
    getInfo: () => {
      const deferred = $q.defer();
      deferred.resolve({ name: 'Sway' });
      return deferred.promise;
    },
  };
  return Service;
};
