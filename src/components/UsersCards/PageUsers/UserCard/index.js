import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.scss';

const UserCard = (props) => {
  const { user } = props;

  const imgSrc = user.picture.medium;
  const userName =
    user.name.title + ' ' + user.name.first + ' ' + user.name.last;
  const gender = user.gender;
  const email = user.email;

  return (
    <div className={styles.userContainer}>
      <div className={styles.userTitle}>
        <div className={styles.userAvatar}>
          <img src={imgSrc} alt="avatar" />
        </div>
        <h4 className={styles.userName}>{userName}</h4>
      </div>
      <div className={styles.userInfo}>
        <p>Gender: {gender}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
