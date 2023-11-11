import { Typography } from 'antd';
import { ReactNode } from 'react';
import styles from './CustomHeading.module.css';
function CustomHeading({
  children,
  level = 1,
}: {
  children: ReactNode;
  level?: number;
}) {
  //
  return (
    <Typography.Title
      className={`${styles.customHeading}`}
      level={level}
    >
      {children}
    </Typography.Title>
  );
}

export default CustomHeading;
