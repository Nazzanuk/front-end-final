app.service('API', () => {

    var API = '';

    var remove = (collection, _id) => {
        console.info('saving', collection, params);
        return $http.delete(`${API}/${collection}/${_id}`).then((response) => {
            console.info('response', response);
            return response.data;
        }, console.error);
    };

    var insert = (collection, data) => {
        console.info('inserting', data);
        return $http.post(`${API}/${collection}`, data).then((response) => {
            console.info('response', response);
            return response.data;
        }, console.error);
    };

    var load = (collection, params) => {
        console.info('loading', collection, {params, json: true});
        return $http.get(`${API}/${collection}`).then((response) => {
            console.info('load ' + collection + ' response', response);
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

