import { FETCH_GALLERIES } from './const';
import { Routes } from '../sources/Routes';
import { request } from '../sources/ApiSource';


function createFetchGalleriesAction(galleries) {
    return {
        type: FETCH_GALLERIES,
        galleries
    };
}


module.exports.fetchGalleries = () => {
    return (dispatch) => {
        return request(Routes.galleriesUrl, 'GET')
            .then(response => response.json() )
            .then(json => {
                dispatch(createFetchGalleriesAction(json))
            });
    };
};