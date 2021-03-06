'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('Flaskular.services', []).
  value('version', '0.1');


angular.module('Flaskular.services', ['ngResource'])
    .factory('Person', function($resource) {
        return $resource('/api/people/:personId', {}, {
            query: {
                method: 'GET',
                params: { personId: '' },
                isArray: false
            }
        });
    });
