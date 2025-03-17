import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  const { notif__msg } = styles;

  return <p className={notif__msg}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;