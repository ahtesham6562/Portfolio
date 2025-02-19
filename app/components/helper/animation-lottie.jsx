"use client"

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath }) => (
  <Lottie
    animationData={animationPath}
    loop
    autoplay
    style={{ width: '95%' }}
  />
);

export default AnimationLottie;