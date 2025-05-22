// src/components/PhotoStory.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import image1 from "../photos/photo1.jpg";
import image2 from "../photos/photo2.jpg";
import image3 from "../photos/photo3.jpg";
import image4 from "../photos/photo4.jpg";
import image5 from "../photos/photo5.jpg";
import image6 from "../photos/photo6.jpg";
import image7 from "../photos/photo7.jpg";
import image8 from "../photos/photo8.jpg";
import image9 from "../photos/photo9.jpg";
import image10 from "../photos/photo10.jpg";
import song1 from "../songs/Sudhu-Tomari-Jonno (mp3cut.net).mp3";
import song2 from "../songs/ekhon (mp3cut.net) (1).mp3";
import song3 from "../songs/Cheri Cheri Lady_Modern Talking (mp3cut.net).mp3";
import song4 from "../songs/Finding Her_320(PagaiWorld (mp3cut.net).mp3";
import song5 from "../songs/Janiye-x-Kangna-JalRaj (mp3cut.net).mp3";
import song6 from "../songs/Tujh Mein Rab Dikhta Hai-320kbps (mp3cut.net).mp3";
import song7 from "../songs/Raabta - SirfJatt (mp3cut.net).mp3";
import song8 from "../songs/Tera Hone Laga Hoon [FULL SONG] Lyrics Ajab Prem Ki Gajab Ka_mp4 (mp3cut.net).mp3";
import song9 from "../songs/aankhon-mein-teri-ajab-si (mp3cut.net).mp3";
import song10 from "../songs/Main Rang Sharbaton Ka - Atif Aslam, Chinmayi Sripaada(MixJio (mp3cut.net).mp3";

const originalPhotoData = [
  { src: image1, text: `Shudhu tumi chao jodi\nSajabo abar nodi\nEshechi hajar barone\nShudhu tomari jonne🎵`, audio: song1 },
  { src: image2, text: `Ami vabte parini\nTumi buker vitor fatcho amar\nShorir jure tomar premer bij\nAmi thamte parini\nTomar gaale norom dukkho\nAmay duhat diye muchte dio please.. ❤️`, audio: song2 },
  { src: image3, text: `I get up, I get down, all my world turns around\nWho is right? Who is wrong? I don't know\nI've got pain in my heart, got a love in my soul\nEasy come, but I think easy go`, audio: song3 },
  { src: image4, text: `Jaana Mere Sawalon Ka Manzar Tu Han\nMai Sukha Sa Sara Samandar Tu Haan\nGulabi Si Surkhi Jo Dikhti Thi\nPhir Se Dikh Jaye Toh Jee Bhar Ke Saah Bhar Lu`, audio: song4 },
  { src: image5, text: `Ankhiyan Teri Mere Dil Pe Vaar Kare\nTeri Yeh Ada Janiye\nTujhe Na Pata Jaaniye\nHai Aisa Nasha Janiye 💞`, audio: song5 },
  { src: image6, text: `Tujh mein rab dikhta hai\nYaara main kya karun💫`, audio: song6 },
  { src: image7, text: `Raabta, kuch toh hai tujhse raabta... 🧲`, audio: song7 },
  { src: image8, text: `Tera hone lagaa hoon\nKhone lagaa hoon, jab se milaa hoon\nTera hone lagaa hoon🕊️`, audio: song8 },
  { src: image9, text: `Aankhon mein teri ajab si ajab si adaayein hain... ✨`, audio: song9 },
  { src: image10, text: `Main rang sharbaton ka, tu meethe ghaat ka paani... 🍹`, audio: song10 }
];

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const TypedLine = ({ line, onComplete }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index <= line.length) {
        setDisplayed(line.slice(0, index));
        index++;
        setTimeout(type, 50);
      } else {
        onComplete();
      }
    };

    const initialDelay = setTimeout(type, 50);
    return () => clearTimeout(initialDelay);
  }, [line, onComplete]);

  return (
    <p className="text-2xl sm:text-xl text-gray-800 text-left leading-relaxed whitespace-pre-wrap font-sans   animate-pulse">
      {displayed}
    </p>
  );
};

const PhotoStory = ({ onNext }) => {
  const shuffledPhotos = useMemo(() => shuffle(originalPhotoData), []);
  const [index, setIndex] = useState(0);
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  const currentPhoto = shuffledPhotos[index];

  useEffect(() => {
    setLines(currentPhoto.text.split("\n"));
    setCurrentLine(0);
  }, [currentPhoto]);

  const handleLineComplete = useCallback(() => {
    setTimeout(() => {
      setCurrentLine((prev) => prev + 1);
    }, 300);
  }, []);

  useEffect(() => {
    const audio = new Audio(currentPhoto.audio);
    audio.play();
    audio.addEventListener("ended", () => {
      if (index < shuffledPhotos.length - 1) {
        setIndex(index + 1);
      } else {
        onNext();
      }
    });

    return () => audio.pause();
  }, [index, currentPhoto.audio, onNext, shuffledPhotos.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 px-4 py-10 transition-opacity duration-700 animate-fadeIn">
      <img
        src={currentPhoto.src}
        alt={`Photo ${index + 1}`}
        className="w-64 h-88 object-cover rounded-tr-xl rounded-bl-xl shadow-xl border-4 border-rose-200"
      />

      <div  className="bg-white bg-opacity-80 backdrop-blur border  border-rose-200 rounded-tl-2xl rounded-br-2xl px-6 py-8 w-full max-w-3xl shadow-md relative overflow-hidden ruled-paper transition-all duration-500">
        <div className="flex flex-col space-y-4">
          {lines.slice(0, currentLine + 1).map((line, idx) => (
            <TypedLine key={idx} line={line} onComplete={handleLineComplete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoStory;
