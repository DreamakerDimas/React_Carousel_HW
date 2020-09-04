import React from 'react';
import images from './components/devExamples/images';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Carousel images={images} />
    </>
  );
}

export default App;
