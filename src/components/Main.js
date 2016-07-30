require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// get images data
var imageDatas = require('../data/imageData.json');

// change the images name into images url
function genImageURL(imageDatasArr) {
    try {
        for (var i = 0, len = imageDatasArr.length; i < len; i++) {
            var singleImageData = imageDatasArr[i];
            if (singleImageData) {
                singleImageData.imageURL = require('../images/' + singleImageData.filename);
            }
        }
    }
    catch (e) {
        alert(e.message);
    }
}
genImageURL(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
        <section className="stage">
            <section className="img-sec">
            </section>
            <nav className="controller-nav">
            </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
