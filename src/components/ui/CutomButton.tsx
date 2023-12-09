/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'antd';
import { ReactNode } from 'react';
import styles from './CustomButton.module.css';
import { SizeType } from 'antd/es/config-provider/SizeContext';
interface CustomButtonType {
  isLoading?: boolean;
  children?: ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (data: any) => void;
  icon?: ReactNode;
  theme?: string;
  size?: SizeType;
}
function CustomButton({
  isLoading,
  children,
  htmlType,
  icon,
  size = 'large',
  theme,
  onClick,
}: CustomButtonType) {
  return (
    <Button
      data-testid={`${icon ? 'icon-btn' : 'btn'}`}
      size={size}
      onClick={onClick}
      loading={isLoading}
      className={`${styles.customButton} ${
        theme === 'red' && styles.redButton
      } ${theme === 'gray' && styles.grayButton}`}
      type='default'
      htmlType={htmlType}
    >
      <div className='flex items-center w-full justify-center '>
        {!isLoading && <p>{icon}</p>}
        <p>{children}</p>
      </div>
    </Button>
  );
}

export default CustomButton;
