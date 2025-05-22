const LoveLetter = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border-2 border-rose-300 max-w-xl">
        <h2 className="text-2xl font-semibold text-rose-700 mb-4">Dear Mamon,</h2>
        <p className="text-gray-700 leading-relaxed">
          "Every second with you feels like magic—onekta sei golpo gulo'r moto ja chhoto belay bhabtam sudhu golper boi te hoy. Kintu tumi amar jibon'e eshe, shei golpo ke bastob kore tulecho.

          Tomar ekta haashir jonyo aajkal raat bhor jage thaki. Tomar chokher ekta jhalok amar moner ekta pura raatke alo kore dey.

          Ei lekha sudhu ekta message na… ei amar hridoyer ekta tukro.
          Ami tumi chara kichu bhabi na aar, tumi holo amar bikel bela'r megh, ratri'r golpo, ar notun sakaler prothom roddur.

          Shudhu eta bolte chai...
          Ami tomake prithibir sob kichur theke beshi bhalobashi.
          Aar ei golpo ami kokhono sesh korte chai na."
        </p>
        <p className="mt-4 text-right text-rose-500">With love,<br />Bikram 💖</p>
      </div>
      <button
        onClick={onNext}
        className="mt-10 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
      >
        Continue
      </button>
    </div>
  );
};

export default LoveLetter;
