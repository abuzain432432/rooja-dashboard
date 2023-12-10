/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/images/error.svg';
import { Typography } from 'antd';
import { motion } from 'framer-motion';
import CustomButton from '../ui/CutomButton';
import styles from './Error.module.css';
import {
  fadeInAnimation,
  toLeftAnimation,
  toRightAnimation,
  toTopAnimation,
} from '../../animations/TextAnimations.ts';
export default function Error() {
  const error: any = useRouteError();
  const navigation = useNavigate();

  return (
    <div
      className={`bg-gray-200 min-h-screen flex w-full justify-center items-center flex-col  ${styles.error}`}
    >
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeInAnimation}
      >
        <img
          className={'xl:w-[350px] lg:w-[300px]'}
          src={errorImage}
        />
      </motion.div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={toRightAnimation}
      >
        <Typography.Title
          className={`xl:mt-8 lg:mt-5 ${styles.title}`}
          level={1}
        >
          Something went wrong 😢
        </Typography.Title>
      </motion.div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={toLeftAnimation}
      >
        <Typography.Text className={`text-lg ${styles['message']}`}>
          Sorry, something went wrong on our end. Our team has been
          notified, and we're working to fix it
        </Typography.Text>
      </motion.div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={toTopAnimation}
      >
        <div className='xl:mt-2 lg:mt-1'>
          <CustomButton onClick={() => navigation(-1)} size='large'>
            Go Back
          </CustomButton>
        </div>
      </motion.div>
    </div>
  );
}
