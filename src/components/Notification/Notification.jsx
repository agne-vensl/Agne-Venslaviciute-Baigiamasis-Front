import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Notification.style';

const Notification = ({ notification, handleDelete }) => {
  if (notification.message) {
    return (
      <S.Notification>
        <S.DeleteButton
          onClick={() => {
            handleDelete({});
          }}
        >
          &times;
        </S.DeleteButton>
        {notification.message}
      </S.Notification>
    );
  }

  return <div />;
};

Notification.propTypes = {
  notification: PropTypes.shape({
    message: PropTypes.string,
  }),
  handleDelete: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  notification: {
    message: '',
  },
};

export default Notification;
