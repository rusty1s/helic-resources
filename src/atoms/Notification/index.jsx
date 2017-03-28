import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './notification.css';

const Notification = ({ icon, children, className, ...props }) => (
  <div
    className={cx(className, styles.main)}
    {...props}
  >
    {icon}
    <div className={styles.content}>{children}</div>
  </div>
);

Notification.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Notification.defaultProps = {
  className: null,
};

const SuccessIcon = (
  <svg className={styles.icon} viewBox="0 0 100 100">
    <circle />
    <polyline points="25,50 45,70 75,30" />
  </svg>
);

const SuccessNotification = ({ children, className, ...props }) => (
  <Notification
    icon={SuccessIcon}
    className={cx(className, styles.success)}
    {...props}
  >
    {children}
  </Notification>
);

SuccessNotification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SuccessNotification.defaultProps = {
  className: null,
};

export default SuccessNotification;

const ErrorIcon = (
  <svg className={styles.icon} viewBox="0 0 100 100">
    <circle />
    <polyline points="30,30 70,70" />
    <polyline points="70,30 30,70" />
  </svg>
);

export const ErrorNotification = ({ children, className, ...props }) => (
  <Notification
    icon={ErrorIcon}
    className={cx(className, styles.error)}
    {...props}
  >
    {children}
  </Notification>
);

ErrorNotification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ErrorNotification.defaultProps = {
  className: null,
};
