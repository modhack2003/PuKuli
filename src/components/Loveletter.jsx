const LoveLetter = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 py-6 bg-rose-50">
      <div className="bg-white w-full max-w-md p-4 rounded-2xl shadow-md border border-rose-200">
        <h2 className="text-lg sm:text-xl font-semibold text-rose-700 mb-2">Dear Pukuli,</h2>

        <p className="text-gray-700 leading-snug text-sm sm:text-base">
          আমি জানি না—কেউ বুঝবে কিনা, নিজেও ঠিক জানি না তোমাকে ভালোবাসি কি না।<br />
          তবে যতবার কথা বলি, মনে হয়—তুমি আমার ভালো লাগার এক নরম কারণ।<br /><br />

          দিন শুরু হয় তোমার মেসেজ দিয়ে, রাত শেষ হয় তোমার স্টোরি দেখে।<br />
          তুমি উত্তর দিলে মন ভরে যায়, না দিলে—একটা চুপচাপ অভ্যেসের মতো লাগে।<br /><br />

          শুধু তোমার পাশে থাকতে চাই, তোমার কথা শুনতে, হাসি দেখতে, মন বুঝতে।<br /><br />

          জানি তুমি কঠিন সময়ের মধ্য দিয়ে গিয়েছো… আমিও গেছি। তাই বুঝি—সবসময় প্রেম নয়, বন্ধুত্বই শান্তি দিতে পারে।<br /><br />

          জীবনে কিছু জোর করবো না, শুধু একটু জায়গা চাই।<br />
          চাইলে, আমায় বন্ধু করে রেখো। আর কখনো দরকার হলে—আমি থাকব, নিঃশব্দ পাশে।<br /><br />

          তুমি আলাদা একজন… আর আমি, সেই আলাদা মানুষটাকেই ভালোবাসি।
        </p>

        <p className="mt-4 text-right text-rose-500 text-sm font-medium">
          With love,<br />Bikram 💖
        </p>
      </div>

      <button
        onClick={onNext}
        className="mt-6 px-5 py-2 bg-pink-500 text-white text-sm rounded-full hover:bg-pink-600 transition"
      >
        Continue
      </button>
    </div>
  );
};

export default LoveLetter;
