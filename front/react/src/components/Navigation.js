import React, { Component } from 'react';
import { Link } from 'react-router'
import util from 'util';


export default class Navigation extends Component {
    render() {
        const { galleries } = this.props;
        let galleryLinks = [];
        for (let gallery of galleries) {
            galleryLinks.push(
                <li key={ gallery.id }>
                    <Link to={util.format('/galeria/%s/', gallery.id)}>{ gallery.title }</Link>
                </li>
            );
        }
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    { galleryLinks }
                    <li>
                        <Link to="/kontakt">Kontakt</Link>
                    </li>
                </ul>
            </div>
        );
    }
}