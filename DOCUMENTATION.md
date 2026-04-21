# CatMessage Project Documentation

## Overview
**CatMessage** (also referred to as \"Collection Fam 💖\") is a heartfelt, interactive web application created by Cathlyne (\"Kay-kay\") as a farewell tribute to her colleagues in the **Collection Section** (and other staff) after completing a **3-month OJT (On-the-Job Training) internship** totaling **486 hours**. The project serves as a digital \"thank you\" card or memory book, where Cathlyne shares personal, emotional messages expressing gratitude, shared memories, inside jokes, and affection for each team member. It captures her shy personality, growth during the internship, and reluctance to leave the welcoming work family she found there.

The app went through an evolution:
- **Original**: A simple static HTML/CSS/JS site (`old.html`, likely with `style.css` and `script.js`).
- **Current**: A modern **Next.js 16** app rebuilt with TypeScript, Tailwind CSS, advanced animations, and improved UX.

The tone is warm, playful (e.g., emojis, teasing nicknames like \"bully\" for Sir Cid), and nostalgic, reflecting Filipino workplace culture, OJT experiences, and personal touches (e.g., K-pop references, food shoutouts).

## Key Features
1. **Interactive Message Selector**:
   - Grid of buttons for \"Everyone\" (intro message) and ~17 individual colleagues (e.g., Ma'am Nor, Sir Rico, Sir Fahad).
   - Tapping a button reveals a personalized message in a glassmorphism-style output box.
   - Special messages: \"Signing Off\" (animated sign-off) and \"Final Message\" (closing love note).

2. **Visual & Audio Design**:
   - **Hero Section**: Full-screen fixed parallax background (`/public/background-picture.jpeg`) with pink gradient overlay and \"Collection Fam\" title.
   - **Animations**: Floating hearts, staggered button entrances, glow effects, message transitions, pulse text.
   - **Background Music**: Autoplay loop (`/public/background-music.mp4` – note: MP4 video used as audio source).
   - **Responsive Glassmorphism UI**: Blurred white cards, pink/pastel gradients (#ff2e63 primary), Poppins font.
   - **Particles**: Subtle floating hearts for romantic feel.

3. **User Flow**:
   - Scroll past hero to main content.
   - Select buttons to cycle through messages.
   - Messages preserve whitespace for email-like formatting (e.g., \"From: Cathlyne\").

4. **Special Effects**:
   - Hero parallax (fixed background).
   - Hover animations (scale, shadows).
   - Theme: Love/family (hearts 💖, sparkles ✨, users 👥).

## Tech Stack
| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 16.2.4 (App Router) |
| **Language** | TypeScript 5 |
| **UI/Styling** | Tailwind CSS 4 (via PostCSS), CSS custom properties, Google Fonts (Poppins) |
| **Icons** | Lucide React 1.8.0 |
| **React** | React 19.2.4, React DOM 19.2.4 |
| **Linting** | ESLint 9 (eslint-config-next) |
| **Build Tools** | Next.js config (empty), PostCSS, TSConfig (strict mode) |
| **Assets** | Images (background-picture.jpeg, SVGs), Video (background-music.mp4) |
| **Scripts** | `dev`, `build`, `start`, `lint` |

- **Dependencies**: Minimal – focused on core Next.js + UI libs.
- **No Database/API**: Purely static/client-side (useState for message state).

## Project Structure
```
catmessage/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Tailwind imports + hero animations + glassmorphism
│   ├── layout.tsx           # Root layout (metadata: \"Collection Fam 💖\", preload bg image)
│   └── page.tsx             # Main page ('use client') – messages, buttons, audio
├── public/                  # Static assets
│   ├── background-music.mp4
│   ├── background-picture.jpeg
│   └── SVGs (globe, next, etc.)
├── old.html                 # Legacy HTML version (with embedded CSS/JS)
├── AGENTS.md                # Empty/placeholder
├── CLAUDE.md                # Next.js agent rules comment
├── TODO.md                  # Parallax hero todo: \"Change parallax... animate on scroll\"
├── README.md                # Standard Next.js template
├── package.json             # Dependencies/scripts
├── next.config.ts           # Empty config
├── tsconfig.json            # Next.js TypeScript config
└── ... (eslint/postcss configs, gitignore)
```

## Messages Content Summary
- **Intro**: General thanks for 3 months, shyness, missing routines/colleagues (Sir Jason, Sir Cid).
- **Individuals**: Personalized anecdotes (e.g., Ma'am Nor's patience on envelopes, Sir Rico's PC access + password joke \"Gardenia.DCream@2026\", Sir Fahad's \"alien\" teasing).
- **Groups/Themes**: K-pop chats (Ma'am Anna/Seventeen/ENHYPEN), food treats (Sir A), Bicol hometown longing.
- **Themes**: Gratitude, missing early mornings/jeep rides, growth from homesickness.

**Deployment**: Ready for Vercel (mentioned in README).

## Purpose & Context
This is a **personal memento** from an OJT intern (Cathlyne from Bicol) to her \"Collection Section Family\" – likely a finance/banking collections team. It immortalizes workplace bonds, turning professional goodbyes into an emotional, shareable web experience. The modern Next.js rewrite suggests evolution for better performance/animations.

## Running the Project
```bash
npm install
npm run dev  # http://localhost:3000
```

## Future Improvements (from TODO.md)
- Enhance hero parallax: Empty content initially, animate on scroll.

This documentation is generated from full codebase analysis (Sep 2024). Project size: ~20 files, lightweight, production-ready. 💖

