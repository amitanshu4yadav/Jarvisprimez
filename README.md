# JarvisPrimez

A voice AI assistant for Windows powered by Google Gemini. Say **"jarvisprimez"** to wake it.

Made by **Amitanshu** - MIT License.

## Features
- Wake word: `jarvisprimez` (say "go to sleep" to sleep)
- Talks back with selectable voice, speed and pitch
- Bring your own Gemini API key (stored locally), works with the free tier
- Model picker auto-loaded from your key (Gemini and Gemma), with automatic fallback when a free-tier limit is hit
- Professional dark UI, custom logo, custom installer

## Run from source
```
npm install
npm start
```

## Build the Windows installer
```
npm install
npm run dist
```
Output: `dist/JarvisPrimez-Setup.exe` (or run the GitHub Action "Build EXE").

## Security
See [SECURITY.md](SECURITY.md). License: [MIT](LICENSE).
