import { useState } from "react";
import image from "../photos/photo11.jpg";
import emailjs from "@emailjs/browser";

const Proposal = ({ onYes }) => {
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "60%" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [noCount, setNoCount] = useState(0);
  const [showFriendMessage, setShowFriendMessage] = useState(false);

  const moveNoButton = () => {
    if (noCount >= 7) return;

    const randTop = Math.floor(Math.random() * 70 + 10);
    const randLeft = Math.floor(Math.random() * 70 + 10);
    setNoPosition({ top: `${randTop}%`, left: `${randLeft}%` });

    const newCount = noCount + 1;
    setNoCount(newCount);

    if (newCount >= 7) {
      sendFriendMessageEmail();
      setShowFriendMessage(true);
    }
  };

  const sendFriendMessageEmail = () => {
    const serviceID = "service_sqqt593";
    const templateID = "template_gzxcb4f";
    const publicKey = "KmSHcuv2A_ZOa08bz";

    const templateParams = {
      to_name: "Biku",
      from_name: "Your Pukuli",
      message: `She didn't say yes, but I told her: "If you need time, I will wait for you, but don't reject my proposal. We can be best friends..."`,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).catch((err) => {
      console.error("EmailJS error:", err);
    });
  };

  const handleYesClick = () => {
    setSending(true);
    setError(null);

    const serviceID = "service_sqqt593";
    const templateID = "template_gzxcb4f";
    const publicKey = "KmSHcuv2A_ZOa08bz";

    const templateParams = {
      to_name: "Biku",
      from_name: "Your Pukuli",
      message: "She said YES! 💖",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSending(false);
        onYes();
      })
      .catch((err) => {
        setSending(false);
        setError("Failed to send email. Please try again.");
        console.error("EmailJS error:", err);
      });
  };

  if (showFriendMessage) {
    return (
      <div className="h-screen flex flex-col items-center justify-center px-6 text-center bg-pink-50 font-love">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-6 leading-relaxed">
          If you need time, I will wait for you, <br />
          but don't reject my proposal 💔
        </h2>
        <p className="text-xl text-gray-600">
          We can be best friends... 😊
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-screen flex flex-col items-center justify-center font-love">
      <h2 className="text-4xl sm:text-5xl font-bold text-rose-700 mb-6">
        Will you be mine, Soumili? 💖
      </h2>

      <img
        src={image}
        alt="SOUMILI"
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

        {noCount < 7 && (
          <button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            style={{
              position: "absolute",
              top: noPosition.top,
              left: noPosition.left,
            }}
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full transition-all cursor-pointer shadow"
          >
            No 😭
          </button>
        )}
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default Proposal;
