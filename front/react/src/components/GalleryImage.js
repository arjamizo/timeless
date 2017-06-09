import React, { Component } from 'react';


export default class GalleryImage extends Component {
    render() {
        const { galleryImage } = this.props;
        return (
            <a href={ galleryImage.image } target='_blank'>
                <img src={ galleryImage.thumbnail } />
            </a>
        );
    }
}