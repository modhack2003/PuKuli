import { useState } from "react";
import image from "../photos/WhatsApp Image 2025-05-22 at 13.14.10_3c49b6d5.jpg";
import emailjs from '@emailjs/browser';

const Proposal = ({ onYes }) => {
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "60%" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const moveNoButton = () => {
    const randTop = Math.floor(Math.random() * 70 + 10);
    const randLeft = Math.floor(Math.random() * 70 + 10);
    setNoPosition({ top: `${randTop}%`, left: `${randLeft}%` });
  };

  const handleYesClick = () => {
    setSending(true);
    setError(null);

    // Replace these with your EmailJS values
    const serviceID = 'service_sqqt593';
    const templateID = 'template_gzxcb4f';
    const publicKey = 'KmSHcuv2A_ZOa08bz';

    const templateParams = {
      to_name: 'Biku', // Your name or recipient
      from_name: 'Your MAMON', // You can change or make dynamic
      message: 'She said YES! 💖', // Customize as needed
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSending(false);
        onYes();  // Proceed to next step after email sent successfully
      })
      .catch((err) => {
        setSending(false);
        setError('Failed to send email. Please try again.');
        console.error('EmailJS error:', err);
      });
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center font-love">
      <h2 className="text-4xl sm:text-5xl font-bold text-rose-700 mb-6">
        Will you be mine, Mamon? 💖
      </h2>

      <img
        src={image}
        alt="Mamon"
        className="w-64 h-64 rounded-full object-cover border-4 border-rose-300 shadow-lg mb-8"
      />

      <div className="flex gap-6 w-full h-40 justify-center font-sans relative">
        <button
          onClick={handleYesClick}
          disabled={sending}
          className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-all shadow-md h-1/3"
        >
          {sending ? "Sending..." : "Yes 💘"}
        </button>

        <button
          onMouseEnter={moveNoButton}
          style={{
            position: "absolute",
            top: noPosition.top,
            left: noPosition.left,
          }}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full transition-all cursor-pointer shadow"
        >
          No 😭
        </button>
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default Proposal;
