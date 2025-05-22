

````markdown
# 💖 Romantic React Proposal App

A beautiful, animated, and heartfelt love proposal built with **React** and **Tailwind CSS**. This project expresses emotions through photo storytelling, handwritten letters, music, and interactivity—perfect for creating a memorable digital confession.

---

## ✨ Features

- 📸 **Photo Story** — Romantic photos with line-by-line animated text and matching background music.
- 💌 **Love Letter** — A heartfelt digital letter with handwritten-style animation.
- 💍 **Proposal Page** — Interactive "Will you be mine?" screen with playful NO button.
- 🎉 **Celebration Scene** — Floating hearts and celebration visuals when your love says "Yes".
- 🎶 **Background Music** — Romantic song autoplay throughout the experience.
- 📱 **Fully Responsive** — Works beautifully on mobile and desktop devices.
- 📝 **Ruled Paper Effect** — Text boxes styled like love notes on paper.

---

## 📦 Installation

Make sure you have **Node.js v20+** and **npm v9+** installed.

```bash
git clone https://github.com/your-username/romantic-proposal-app.git
cd romantic-proposal-app
npm install
npm run dev
````

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Landing.jsx
│   ├── PhotoStory.jsx
│   ├── LoveLetter.jsx
│   ├── Proposal.jsx
│   ├── Celebration.jsx
│   └── FloatingHearts.jsx
│
├── photos/
│   └── [photo1.jpg, photo2.jpg, ...]
├── songs/
│   └── [song1.mp3, song2.mp3, ...]
├── App.jsx
└── main.jsx
```

---

## 🖼️ Customization

### 🖼 Photos

Place your images in the `src/photos/` folder and import them in `PhotoStory.jsx`.
Example:

```js
import image1 from "../photos/photo1.jpg";
```

### 🎵 Music

Add MP3 files in `src/songs/` and assign them in `PhotoStory.jsx` to match each photo.

```js
import song1 from "../songs/song1.mp3";
```

---

## ⚙️ Typing Animation Settings

In `PhotoStory.jsx`, the animation settings are controlled by:

```js
const TYPING_SPEED = 35; // milliseconds per character
const LINE_DELAY = 800;  // milliseconds between lines
```

To remove the **blinking cursor** effect, delete or comment out this CSS:

```css
border-right: 2px solid rgba(0, 0, 0, 0.75); /* Remove this */
```

---

## 📐 Style Notes

### 📄 Paper Styling (`ruled-paper`)

```css
.ruled-paper {
  background-image: repeating-linear-gradient(
    to bottom,
    #ffffff 0px,
    #ffffff 24px,
    #fca5a5 25px
  );
}
```

### 🖊 Typing Class (`animate-typing`)

```css
.animate-typing {
  display: inline-block;
  overflow: hidden;
  white-space: pre-wrap;
  animation: typing 4s steps(40, end);
}
```

### 🖼 Photo Size

In `PhotoStory.jsx`:

```jsx
className="w-64 h-64 object-cover rounded-xl shadow-xl border-4 border-rose-200"
```

Change `w-64 h-64` for photo dimensions.

---

## ❤️ Contribute or Fork

This project is a personal romantic creation, but feel free to fork it for your own love story.
If you share publicly, give credit where it's due. 😊

---

## 📜 License

MIT License – Free to use and modify with ❤️

---

## 👤 Author

**Bikram Day**
Cybersecurity & Web Dev Enthusiast | Romantic Technologist
*“Built for someone special...”*

```

```
