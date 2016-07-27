app.service('API', ($http) => {

    var APIS = {
        anime:'https://jsonp.afeld.me/?url=http://hummingbird.me/api/v1/',
        local:'/api'
    };

    var remove = (api, url, _id) => {
        console.info('saving', url, params);
        return $http.delete(`${APIS[api]}/${url}/${_id}`).then((response) => {
            console.info('response', response);
            return response.data;
        }, console.error);
    };

    var insert = (api, url, data) => {
        console.info('inserting', data);
        return $http.post(`${APIS[api]}/${url}`, data).then((response) => {
            console.info('response', response);
            return response.data;
        }, console.error);
    };

    var load = (api, url, params) => {
        console.info('loading', url, {params, json: true});
        return $http.get(`${APIS[api]}/${url}`).then((response) => {
            console.info('load ' + url + ' response', response);
            return response.data
        }, console.error);
    };

    var init = () => {};

    init();

    return {
        load,
        remove,
        insert
    };
});

