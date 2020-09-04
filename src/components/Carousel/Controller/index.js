import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Controller.module.scss';

function Controller(props) {
  const { toPrevSlide, toNextSlide } = props;

  const [isRunningShow, setIsRunningShow] = useState(false);
  const [slideShowId, setSlideShowId] = useState(null);
  const [delayValue, setDelayValue] = useState(1000);

  const startSlideShow = () => {
    if (!isRunningShow) {
      setIsRunningShow(true);
      setSlideShowId(setInterval(toNextSlide, delayValue));
    }
  };

  const stopSlideShow = () => {
    if (isRunningShow) {
      clearInterval(slideShowId);
      setIsRunningShow(false);
    }
  };

  const delayHandler = (event) => {
    setDelayValue(event.target.value);
  };

  return (
    <div className={styles.controllerContainer}>
      <div className={styles.navigation}>
        <p>Navigation</p>
        <button onClick={toPrevSlide}>{'<'}</button>
        <button onClick={toNextSlide}>{'>'}</button>
      </div>

      <div className={styles.delayContainer}>
        <p>SlideShow</p>
        <button onClick={startSlideShow}>Start</button>
        <button onClick={stopSlideShow}>Stop</button>
        <div className={styles.delaySlider}>
          <p>Set delay before start</p>
          <input
            name="delay"
            type="range"
            min={100}
            max={10000}
            step={100}
            value={delayValue}
            onChange={delayHandler}
          />
        </div>
        <p>{delayValue} ms</p>
      </div>
    </div>
  );
}

Controller.propTypes = {
  toPrevSlide: PropTypes.func.isRequired,
  toNextSlide: PropTypes.func.isRequired,
};

export default Controller;
