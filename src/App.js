import React, { useState } from 'react';
import images from './components/devExamples/images';
import Carousel from './components/Carousel';
import Chat from './components/Chat';
import Pagination from './components/UserCard/Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default App;
