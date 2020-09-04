import React from 'react';
import styles from './SlideImage.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SlideImage = (props) => {
  const { url, position } = props;
  const className = classNames(
    styles.imgBox,
    position === 'prev' && styles.prev,
    position === 'next' && styles.next
  );

  return (
    <div className={className}>
      <img src={url} alt="img" />
    </div>
  );
};

SlideImage.propTypes = {
  url: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default SlideImage;
