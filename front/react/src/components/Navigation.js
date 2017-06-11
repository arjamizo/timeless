import React, { Component } from 'react';
import { Link } from 'react-router'
import util from 'util';


export default class Navigation extends Component {
  render() {
    const { galleries } = this.props;
    let galleryLinks = [];
    for (let gallery of galleries) {
      galleryLinks.push(
        <li className="link" key={ gallery.id }>
          <Link to={util.format('/galeria/%s/', gallery.id)}>{ gallery.title }</Link>
        </li>
      );
    }
    return (
      <div className="navbar-wrapper">
        <div className="fade fade-left"></div>
        <div className="main-wrapper">
          <Link to="/">
            <img src="/static/images/navbar/logo.png" className="logo"/>
          </Link>
          <ul className="links">
            { galleryLinks }
            <li className="link" key='contact'>
              <Link to='/kontakt'>Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="fade fade-right"></div>
      </div>
    );
  }
}