export const animationFromBottom = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: 0.2, duration: 0.25, type: 'tween' }
  };
  
  export const animationFromRight = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.2, duration: 0.25, type: 'tween' }
  };
  
  export const animationFromLeft = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.2, duration: 0.25, type: 'tween' }
  };
  