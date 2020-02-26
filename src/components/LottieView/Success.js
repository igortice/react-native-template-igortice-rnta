import LottieView from 'lottie-react-native';
import React from 'react';

const success_json = require('~/assets/animations/success.json');

const Success = ({goTo = null}) => (
  <LottieView
    source={success_json}
    autoPlay={true}
    loop={false}
    autoSize={true}
    speed={0.6}
    onAnimationFinish={() => goTo()}
  />
);

export default Success;
