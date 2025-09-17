# BlankSpace Take-Home Assignment

This is a modern, responsive restaurant ordering web application built with React 19, Vite, Redux Toolkit, and Tailwind CSS. The app features a dynamic menu interface, category filtering, item customization modals, and a clean, user-friendly design.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Available Scripts](#available-scripts)
- [Key Components](#key-components)
- [State Management](#state-management)
- [Styling](#styling)
- [Responsive Design](#responsive-design)

## Features

- **Interactive Menu**: Browse through categorized menu items with smooth scrolling and category highlighting.
- **Item Customization**: Open detailed modals to configure menu items, including selecting sides, drinks, and adding special comments.
- **Multi-step Configuration**: Nested modals for complex item customization (e.g., customizing sides after selecting them).
- **Category Navigation**: Sticky category tabs with active state highlighting and smooth scrolling to sections.
- **Skeleton Loading**: Placeholder UI elements that appear while content is loading.
- **Fully Responsive**: Adapts seamlessly from mobile to desktop screens.
- **Modern Animations**: Uses Framer Motion for smooth modal transitions.

## Technologies Used

- **Framework**: React 19
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Linting**: ESLint
- **Utilities**: tailwind-merge

## Project Structure

```
rajat1120-blankspace-take-home-assignment/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── src/
│ ├── App.jsx # Main application component
│ ├── index.css # Global CSS and Tailwind configuration
│ ├── main.jsx # Application entry point with Redux Provider
│ ├── Components/ # All React components
│ │ ├── CategoryTabs.jsx # Category navigation tabs
│ │ ├── Footer.jsx # Application footer
│ │ ├── Header.jsx # Application header/navbar
│ │ ├── HeroBanner.jsx # Hero image/banner
│ │ ├── ItemConfigureModal.jsx # Main item configuration modal
│ │ ├── MenuCard.jsx # Individual menu item card
│ │ ├── MenuSection.jsx # Menu section with categories
│ │ ├── OrderInfo.jsx # Order/delivery information section
│ │ ├── SpecialOffers.jsx # Special offers/promotions section
│ │ ├── SubItemConfigureModal.jsx # Secondary configuration modal
│ │ └── Common/ # Reusable UI components
│ │ ├── Button.jsx # Custom button component
│ │ └── Input.jsx # Custom input component
│ ├── Redux/ # Redux state management
│ │ ├── AppSlice.jsx # Manages modal state
│ │ ├── CategorySlice.jsx # Manages active category state
│ │ └── Store.jsx # Redux store configuration
│ └── utils/
│ └── sampleData.jsx # Sample menu data
└── .vite/ # Vite build cache (auto-generated)
```

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rajat1120/BlankSpace-Take-home-Assignment.git
   cd rajat1120-blankspace-take-home-assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to `http://localhost:5173` (or the port specified in the terminal).**

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server with hot module replacement (HMR).
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Key Components

### App.jsx

The root component that assembles all major sections of the application: Header, HeroBanner, OrderInfo, SpecialOffers, MenuSection, and Footer.

### MenuSection.jsx & CategoryTabs.jsx

These components work together to provide category-based navigation. `CategoryTabs` displays clickable category buttons, and `MenuSection` renders the categorized menu items. They use Intersection Observer to automatically update the active category as the user scrolls.

### ItemConfigureModal.jsx & SubItemConfigureModal.jsx

These components handle the item customization workflow. The main modal (`ItemConfigureModal`) allows users to select sides and drinks, while the secondary modal (`SubItemConfigureModal`) provides additional customization options for selected items. They use Framer Motion for smooth animations.

### MenuCard.jsx

Renders individual menu items with their name, price, calories, and description. Clicking on a card opens the `ItemConfigureModal` for that specific item.

### Header.jsx & Footer.jsx

Standard navigation header and footer components with branding, navigation links, and social media icons.

## State Management

The application uses Redux Toolkit for state management with two main slices:

- **AppSlice**: Manages the state of which modals are open/closed (`selectedMenuItemId`, `secondModalItemId`).
- **CategorySlice**: Manages the currently active menu category.

The store is configured in `Store.jsx` and provided to the entire app via the `Provider` component in `main.jsx`.

## Styling

The application uses Tailwind CSS for styling. Custom fonts (SF Pro Display and TT Commons) are imported in `index.css`. Custom utility classes like `scrollbar-hide` are also defined for cross-browser compatibility.

## Responsive Design

The application is fully responsive, with different layouts and components appearing or hiding based on screen size (using Tailwind's `md:` prefix for medium screens and above). Key responsive features include:

- A mobile-friendly header with simplified navigation.
- Horizontal scrolling for category tabs on smaller screens.
- A simplified OrderInfo section on mobile.
- SpecialOffers section is hidden on mobile screens.
