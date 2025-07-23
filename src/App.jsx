import React, { useState } from "react";
import Landing from "./components/landing";
import LoveLetter from "./components/Loveletter";
import Proposal from "./components/Proposal";
import Celebration from "./components/Celebration";
import FloatingHearts from "./components/FloatingHearts";
import PhotoStory from "./components/PhotoStory";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [step, setStep] = useState(0);
  const [fade, setFade] = useState(true);
  const [celebrationMessage, setCelebrationMessage] = useState("");

  const handleStepChange = (nextStep) => {
    setFade(false);
    setTimeout(() => {
      setStep(nextStep);
      setFade(true);
    }, 1000);
  };

  const handleYes = () => {
    setCelebrationMessage("Love you ❤️"); // Set your personal message here
    handleStepChange(4); // Move to Celebration
  };

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br from-purple-600 via-rose-200 to-pink-400 text-center font-serif transition-opacity duration-1000 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      
      <FloatingHearts />
      {step === 0 && <Landing onNext={() => handleStepChange(1)} />}
      {step === 1 && <PhotoStory onNext={() => handleStepChange(2)} />}
      {step === 2 && <LoveLetter onNext={() => handleStepChange(3)} />}
      {step === 3 && <Proposal onYes={handleYes} />}
      {step === 4 && <Celebration message={celebrationMessage} />}
      <Analytics />
      <SpeedInsights />
      
    </div>
  );
}

export default App;
