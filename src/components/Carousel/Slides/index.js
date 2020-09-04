import React from 'react';
import SlideImage from './SlideImage';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import PropTypes from 'prop-types';
import styles from './Slides.module.scss';
import classNames from 'classnames';

const Slides = (props) => {
  const { currentImgId, images } = props;
  const className = classNames(styles.slidesContainer);

  const handle = useFullScreenHandle();

  const getUrl = (id) => {
    if (id === -1) {
      return images[images.length - 1];
    }
    if (id === images.length) {
      return images[0];
    }
    return images[id];
  };

  return (
    <div className={styles.outerContainer}>
      <div className={className}>
        <SlideImage position="prev" url={getUrl(currentImgId - 1)} />
        <div className={styles.currentBox}>
          <FullScreen handle={handle}>
            <SlideImage url={getUrl(currentImgId)} />
          </FullScreen>
        </div>
        <SlideImage position="next" url={getUrl(currentImgId + 1)} />
      </div>
      <div>
        <button onClick={handle.enter}>Full Screen</button>
      </div>
    </div>
  );
};

Slides.propTypes = {
  currentImgId: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
};

export default Slides;
