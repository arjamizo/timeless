import React, { Component } from 'react';
import GalleryImage from './GalleryImage';


export default class Gallery extends Component {
    render() {
        const { galleryImages } = this.props;
        let imageElements = [];
        for (let galleryImage of galleryImages) {
            imageElements.push(
                <li key={ galleryImage.id }>
                    <GalleryImage galleryImage={ galleryImage } />
                </li>
            )
        }
        return (
            <div>
                <ul>
                    { imageElements }
                </ul>
            </div>
        );
    }
}