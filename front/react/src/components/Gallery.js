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
      delay: 50,
      onResize: function () {
        wall.fitWidth();
      }
    });
    let imagesLoaded = 0;
    let imageElements = wall.container.find('.gallery-image img');
    imageElements.load(function () {
      imagesLoaded += 1;
      if (imageElements.length == imagesLoaded) {
        wall.fitWidth();
        setTimeout(function() {
          wall.container.addClass('loaded');
        }, 500);
      }
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