import { FETCH_GALLERIES, FETCH_GALLERY } from './const';
import { Routes } from '../sources/Routes';
import { request } from '../sources/ApiSource';
import _ from 'lodash';


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


function createFetchGalleryAction(gallery) {
    return {
        type: FETCH_GALLERY,
        gallery
    };
}


module.exports.fetchGallery = (galleryId) => {
    return (dispatch) => {
        let url = _.replace(Routes.galleryUrl, ':gallery_id', galleryId);
        return request(url, 'GET')
            .then(response => response.json())
            .then(json => {
                dispatch(createFetchGalleryAction(json))
            });
    };
};