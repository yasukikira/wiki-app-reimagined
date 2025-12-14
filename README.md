# Wiki Modern 📖

![Version](https://img.shields.io/badge/version-1.1.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)

**Wiki Modern** is a reimagined Wikipedia reader built for speed, aesthetics, and focus. It transforms the vast knowledge of Wikipedia into a clean, app-like experience that works beautifully on desktop and mobile.

[**🔴 Live Demo**](https://wiki-app-reimagined.vercel.app/)

---

## ✨ Features

### 🚀 Core Experience
*   **Modern UI:** A clean, card-based interface with beautiful typography (Merriweather & Inter).
*   **Focus Mode:** Toggle images on/off with a single click for distraction-free reading.
*   **Voice Search:** Integrated speech-to-text for hands-free searching.
*   **Text-to-Speech:** Listen to article summaries with one tap.
*   **Multi-Language:** Instant support for 10+ major languages (EN, ES, FR, JA, etc.).

### 📱 PWA (Progressive Web App)
*   **Installable:** Works as a native app on iOS and Android.
*   **Offline Capable:** Caches the UI for instant loading.

### 🎨 Personalization
*   **Themes:** Switch between Light, Dark, and Sepia modes.
*   **Bookmarks:** Save your favorite articles locally.
*   **Seasonal Engine:** The app automatically adapts its theme during holidays (e.g., December brings a subtle snow overlay).

### 🥚 Easter Eggs
Search for specific terms to trigger hidden visuals!
*   Try searching for **"Christmas"** 🎄
*   Try searching for **"New Year"** 🎆

---

## 🛠️ Tech Stack

*   **Frontend:** HTML5, Vanilla JavaScript (ES6+).
*   **Styling:** Tailwind CSS (via CDN) + Custom CSS variables.
*   **Icons:** Lucide Icons.
*   **API:** Wikipedia REST API v1.
*   **Animations:** Canvas Confetti & CSS Keyframes.
*   **Deployment:** Vercel / GitHub Pages.

---

## 🚀 How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yasukikira/wiki-app-reimagined.git
    ```
2.  **Open the folder**
    Navigate to the project folder.
3.  **Launch (Important)**
    To enable PWA and Voice Search features, you must serve the files locally (Service Workers do not work on `file://` protocol).
    *   **VS Code:** Install the "Live Server" extension and click "Go Live".
    *   **Python:** Run `python -m http.server` in the terminal and open `localhost:8000`.

---

## 🧪 Testing Features

To verify the app is fully functional:

1.  **Search:** Type "Einstein" and press enter.
2.  **Voice:** Click the Mic icon and say "Batman".
3.  **Images:** Open the menu (⋮) and toggle "Show Images" off/on.
4.  **Game:** Open menu -> "Wiki Game". Try to get from Start to Target.
5.  **Easter Eggs:** Search for "New Year" and watch the confetti (ensure images are ON).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Powered by the Wikipedia API. Not affiliated with the Wikimedia Foundation.*