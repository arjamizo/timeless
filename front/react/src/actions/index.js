import { HELLO_WORLD, FETCH_GALLERIES } from './const';
import { Routes } from '../sources/Routes';
import { request } from '../sources/ApiSource';


function createHelloWorldAction() {
    return {
        type: HELLO_WORLD
    };
}

function createFetchGalleriesAction(galleries) {
    return {
        type: FETCH_GALLERIES,
        galleries
    };
}


module.exports.helloWorld = () => {
    return (dispatch) => {
        dispatch(createHelloWorldAction());
    };
};


module.exports.fetchGalleries = () => {
    return (dispatch) => {
        return request(Routes.galleriesUrl, 'get')
            .then(response => response.json() )
            .then(json => {
                dispatch(createFetchGalleriesAction(json))
            });
    };
};