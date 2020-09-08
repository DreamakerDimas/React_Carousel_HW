import React, { useState, useEffect } from 'react';
import getUsers from '../api';
import UserCard from './UserCard';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './PageUsers.module.scss';

function PageUsers(props) {
  const { currentPage } = props;

  const [users, setUsers] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const className = classNames(styles.usersContainer);

  const load = async () => {
    //setState - isLoaded, getUsers
    try {
      await getUsers({ page: currentPage }).then((data) => {
        setUsers(data);
      });
    } catch (e) {
      setError(e);
      console.log(error);
      return;
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    if (!isLoaded) {
      load();
    }
    if (isLoaded && users.info.page !== currentPage) {
      setIsLoaded(false);
    }
  });

  const getUsersElements = () => {
    if (isLoaded) {
      const usersElements = users.results.map((user, index) => {
        return <UserCard key={index} user={user} />;
      });
      return usersElements;
    } else {
      return 'Loading...';
    }
  };

  return <div className={className}>{getUsersElements()}</div>;
}

PageUsers.propTypes = { currentPage: PropTypes.number.isRequired };

export default PageUsers;
