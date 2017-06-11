import React, { Component } from 'react';


export default class GalleryImage extends Component {
  render() {
    const { galleryImage } = this.props;
    return (
      <a href={ galleryImage.image }
         target='_blank'
         className='gallery-image'
         style={{width: galleryImage.thumbnail_dimensions.width + 'px'}}
         data-lightbox='gallery'>
        <img src={ galleryImage.thumbnail } />
      </a>
    );
  }
}