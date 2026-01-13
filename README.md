# UNAVO - Food Order Landing Page

A modern, responsive food ordering website built with React and Tailwind CSS.

## Features

- 🎨 Clean and modern UI with Emerald Green theme
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- 🔍 Search functionality with location selector
- 🍕 Category browsing
- 🏪 Restaurant listings with ratings and offers
- 💰 Special offers section
- ⚡ Fast and lightweight with Vite

## Tech Stack

- React 18
- Tailwind CSS
- Vite

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── CategoryCard.jsx
│   ├── RestaurantCard.jsx
│   ├── OfferCard.jsx
│   └── Footer.jsx
├── pages/
│   └── LandingPage.jsx
├── data/
│   └── dummyData.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- Change color theme in `tailwind.config.js`
- Update dummy data in `src/data/dummyData.js`
- Modify components in `src/components/`

## License

MIT
