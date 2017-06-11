import React, { Component } from 'react';
import { Freewall } from 'freewall';

import GalleryImage from './GalleryImage';


export default class Gallery extends Component {
  componentDidMount() {
    this.initFreewall();
  }

  initFreewall() {
    let wall = new Freewall('.gallery-images-container');
    wall.reset({
      selector: '.gallery-image',
      animate: true,
      cellW: 150,
      cellH: 'auto',
      onResize: function () {
        wall.fitWidth();
      }
    });
    wall.container.find('.gallery-image img').load(function () {
      wall.fitWidth();
    });
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