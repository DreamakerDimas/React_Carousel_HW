import React, { Component } from 'react';
import Slides from './Slides';
import Controller from './Controller';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Carousel.module.scss';

const className = classNames(styles.carouselContainer);

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImgId: 0,
    };
  }

  setImgId = (id) => {
    this.setState({
      currentImgId: id,
    });
  };

  toPrevSlide = () => {
    const { images } = this.props;
    const { currentImgId } = this.state;
    currentImgId === 0
      ? this.setImgId(images.length - 1)
      : this.setImgId(currentImgId - 1);
  };

  toNextSlide = () => {
    const { images } = this.props;
    const { currentImgId } = this.state;
    currentImgId === images.length - 1
      ? this.setImgId(0)
      : this.setImgId(currentImgId + 1);
    console.log(currentImgId);
  };

  render() {
    const { images } = this.props;
    const { currentImgId, fullScreenMode } = this.state;

    return (
      <div className={className}>
        <Slides
          fullScreenMode={fullScreenMode}
          currentImgId={currentImgId}
          images={images}
        />
        <Controller
          toPrevSlide={this.toPrevSlide}
          toNextSlide={this.toNextSlide}
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
