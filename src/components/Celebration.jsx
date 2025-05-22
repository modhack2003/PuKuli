import Lottie from "lottie-react";
import heartAnimation from "../assets/heart-animation.json";

const Celebration = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-rose-200 text-center">
      <h1 className="text-5xl sm:text-6xl font-love text-rose-700 mb-6">
        She said YES! 💍
      </h1>
      <p className="text-lg text-gray-700 font-light mb-6">
        Mamon & Bikram – the beginning of forever 💖
      </p>

      <Lottie
        animationData={heartAnimation}
        loop={true}
        autoplay={true}
        className="w-72 h-72"
      />
    </div>
  );
};

export default Celebration;
