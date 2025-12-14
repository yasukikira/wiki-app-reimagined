# Wiki Modern 📖

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)

**Wiki Modern** is a reimagined Wikipedia reader built for speed, aesthetics, and focus. It transforms the vast knowledge of Wikipedia into a clean, app-like experience that works beautifully on desktop and mobile.

[**🔴 Live Demo**](https://your-vercel-link-here.app)

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

No build step required! This is a static web application.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/wiki-modern.git
    ```
2.  **Open the folder**
    Navigate to the folder in your file explorer.
3.  **Launch**
    Open `index.html` in your browser.
    *Note: For Voice Search and PWA features to work perfectly, use a local server (like Live Server in VS Code).*

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