import React from 'react';
import PageUsers from '../PageUsers';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

function Pagination(props) {
  const { currentPage, setCurrentPage } = props;

  const toPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.pageContainer}>
      <PageUsers currentPage={currentPage} />
      <div className={styles.paginationCont}>
        <button onClick={toPrevPage}>Prev</button>
        {currentPage}
        <button onClick={toNextPage}>Next</button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
