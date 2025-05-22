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

  const handleStepChange = (nextStep) => {
    setFade(false);
    setTimeout(() => {
      setStep(nextStep);
      setFade(true);
    }, 1000);
  };

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-pink-100 text-center font-serif transition-opacity duration-1000 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Always show floating hearts */}
      <FloatingHearts />

      {step === 0 && <Landing onNext={() => handleStepChange(1)} />}
      {step === 1 && <PhotoStory onNext={() => handleStepChange(2)} />}
      {step === 2 && <LoveLetter onNext={() => handleStepChange(3)} />}
      {step === 3 && <Proposal onYes={() => handleStepChange(4)} />}
      {step === 4 && <Celebration />}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
