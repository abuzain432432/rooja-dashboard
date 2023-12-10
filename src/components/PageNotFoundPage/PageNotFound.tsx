/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  fadeInAnimation,
  toLeftAnimation,
  toRightAnimation,
  toTopAnimation,
} from '../../animations/TextAnimations';

import { useNavigate } from 'react-router-dom';
import errorImage from '../../assets/images/404.svg';
import { Typography } from 'antd';
import { motion } from 'framer-motion';

import CustomButton from '../ui/CutomButton.tsx';
import styles from './PageNotFound.module.css';

export default function PageNotFound() {
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
          <span className='text-red-400'>
            Page <span>Not</span> Found 😢
          </span>
        </Typography.Title>
      </motion.div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={toLeftAnimation}
      >
        <Typography.Text className={`text-lg ${styles['message']}`}>
          <span className='text-gray-800'>
            Oops! The page you are looking for might have been moved
            or doesn't exist
          </span>
        </Typography.Text>
      </motion.div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={toTopAnimation}
      >
        <div className='xl:mt-2 lg:mt-1'>
          <CustomButton
            theme='red'
            onClick={() => navigation(-1)}
            size='large'
          >
            Go Back
          </CustomButton>
        </div>
      </motion.div>
    </div>
  );
}
