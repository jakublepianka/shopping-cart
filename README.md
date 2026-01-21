# Shopping Cart

A modern, responsive e-commerce shopping cart application built with React and Vite.

## Features

- **Product Browsing**: Browse mobile accessories from an external API with product images, ratings, and prices
- **Shopping Cart**: Add/remove items, adjust quantities, and view cart totals
- **Product Details**: View detailed product information in a modal with image carousel
- **Image Carousel**: Auto-rotating carousel for featured products on the home page with manual controls
- **Responsive Design**: Fully responsive UI optimized for mobile, tablet, and desktop viewports
- **Product Ratings**: Visual 5-star rating system for products
- **Skeleton Loading**: Loading states for product cards while data is fetching
- **Testing**: Comprehensive unit tests using Vitest and React Testing Library

## Tech Stack

- **React** 19.2.0 - UI framework
- **Vite** 7.2.4 - Build tool and dev server
- **React Router** 7.10.1 - Client-side routing
- **Vitest** 4.0.15 - Unit testing framework
- **React Testing Library** 16.3.0 - Component testing utilities
- **ESLint** 9.39.1 - Code linting
- **Normalize.css** 8.0.1 - CSS normalization

## Project Structure

src/
├── components/
│ ├── Carousel/ # Image carousel component with autoplay
│ ├── CartInputControls/ # Quantity input controls for cart
│ ├── Header/ # Navigation header
│ ├── Footer/ # Footer component
│ └── paths/
│ ├── HomePage/ # Home page with featured carousel
│ ├── ShopPage/ # Product listing and browsing
│ └── CartPage/ # Shopping cart view
├── context/
│ ├── Cart/ # Cart state management
│ └── Products/ # Product data management
├── hooks/
│ └── useAddToCartControls/ # Custom hook for cart controls
└── index.css # Global styles

## Features in Detail

### Home Page
- Hero section with call-to-action
- Auto-rotating carousel displaying top-rated products
- Brand messaging with creative text overlays

### Shop Page
- Grid layout of product cards with ratings
- Product images with overlay showing title, price, and rating
- Add-to-cart functionality with quantity controls
- Skeleton loading states while products load
- Responsive grid that adapts from 1 to 4 columns based on viewport

### Product Modal
- Detailed product view in a modal overlay
- Image carousel for multiple product images
- Full product description and specifications
- Add-to-cart form with quantity controls

### Cart Page
- View all items in cart with thumbnails
- Adjust quantities or remove items
- Cart summary showing total items and price
- Empty state with link back to shop