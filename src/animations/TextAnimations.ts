const toRightAnimation = {
  hidden: {
    opacity: 0.5,
    x: -150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 80,
      damping: 10,
    },
  },
};
const toLeftAnimation = {
  hidden: {
    opacity: 0.5,
    x: 150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 80,
      damping: 10,
    },
  },
};
const toTopAnimation = {
  hidden: {
    opacity: 0.0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 80,
      damping: 10,
    },
  },
};
const fadeInAnimation = {
  hidden: {
    opacity: 0.0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.3,
      delay: 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};
export {
  fadeInAnimation,
  toLeftAnimation,
  toRightAnimation,
  toTopAnimation,
};
