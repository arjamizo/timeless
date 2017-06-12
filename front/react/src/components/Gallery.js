import React, { Component } from 'react';
import { Freewall } from 'freewall';
import lightbox from 'lightbox2';

import GalleryImage from './GalleryImage';


export default class Gallery extends Component {
  componentDidMount() {
    this.initFreewall();
    this.initLightbox();
  }

  initFreewall() {
    let wall = new Freewall('.gallery-images-container');
    wall.reset({
      selector: '.gallery-image',
      animate: true,
      cellW: 250,
      cellH: 'auto',
      onResize: function () {
        wall.fitWidth();
      }
    });
    wall.container.find('.gallery-image img').load(function () {
      wall.fitWidth();
    });
  }

  initLightbox() {
    console.log(lightbox);
    lightbox.option({
      albumLabel: 'Zdjęcie %1 z %2'
    })
  }

  render() {
    const { galleryImages } = this.props;
    let imageElements = [];
    for (let galleryImage of galleryImages) {
      imageElements.push(
        <GalleryImage galleryImage={ galleryImage } key={ galleryImage.id }/>
      )
    }
    return (
      <div className='gallery-images-container'>
        { imageElements }
      </div>
    );
  }
}