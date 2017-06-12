import React, { Component } from 'react';


export default class GalleryImage extends Component {
  render() {
    const { galleryImage } = this.props;
    return (
      <a href={ galleryImage.image }
         target='_blank'
         className='gallery-image'
         style={{
           width: (galleryImage.thumbnail_dimensions.width / 2 + 20) + 'px',
           height: (galleryImage.thumbnail_dimensions.height / 2 + 20) + 'px'
         }}
         data-lightbox='gallery'>
        <img src={ galleryImage.thumbnail } />
        <div className='zoom-overlay'>
          <img src='/static/images/gallery/zoom.png' className='zoom-icon' />
        </div>
      </a>
    );
  }
}