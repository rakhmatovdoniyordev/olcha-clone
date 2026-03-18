# Olcha.uz - E-Commerce Admin Dashboard

## 📖 Project Overview

**Olcha.uz** is a modern, feature-rich e-commerce administration dashboard built with React, TypeScript, and Tailwind CSS. This admin panel provides comprehensive management capabilities for banners, categories, and products with an intuitive user interface and robust CRUD operations.

### ✨ Key Features

- 🔐 **Secure Authentication** - Login system with localStorage-based session management
- 🎨 **Modern UI/UX** - Built with Tailwind CSS featuring red/orange gradient theme
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Real-time Updates** - Instant state management with React hooks
- 🔍 **Advanced Search** - Multi-field search functionality across all sections
- 📊 **Dashboard Analytics** - Overview statistics and activity tracking
- 🌐 **Multi-language Support** - i18n ready with Uzbek, Russian, and English locales

---

## 🛠️ Technology Stack

### Frontend

- **React 19** - Latest React with modern features
- **TypeScript 5** - Type-safe development
- **Vite 6** - Lightning-fast build tool and dev server
- **React Router 7** - Client-side routing with protected routes
- **Tailwind CSS 4** - Utility-first CSS framework with custom animations
- **React Icons** - Comprehensive icon library (Feather Icons)

### State Management

- **Redux Toolkit** - Predictable state container
- **React Hooks** - useState, useEffect, useContext

### Internationalization

- **i18next** - Internationalization framework
- **react-i18next** - React integration for i18n

### Build & Development

- **ESLint** - Code linting and best practices
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

---

## 📁 Project Structure

```
Loyiha-olcha/
├── src/
│   ├── api/                    # API integration layer
│   │   ├── bannerApi.ts       # Banner API calls
│   │   ├── categoryApi.ts     # Category API calls
│   │   └── index.ts           # API configuration
│   ├── components/             # Reusable UI components
│   │   ├── Card/              # Product card component
│   │   ├── Category/          # Category display component
│   │   ├── DetailBottom/      # Detail page bottom section
│   │   ├── Footer/            # Site footer
│   │   ├── Header/            # Site header
│   │   ├── ScrollToTop/       # Scroll navigation
│   │   ├── Swiper/            # Banner slider
│   │   └── productSwiper/     # Product carousel
│   ├── hooks/                  # Custom React hooks
│   │   ├── banner/            # Banner-related hooks
│   │   └── category/          # Category-related hooks
│   ├── i18n/                   # Internationalization config
│   ├── locales/                # Translation files
│   │   ├── en/                # English translations
│   │   ├── ru/                # Russian translations
│   │   └── uz/                # Uzbek translations
│   ├── pages/                  # Page components
│   │   ├── Admin/             # Admin dashboard pages
│   │   │   ├── Banners/       # Banner management
│   │   │   ├── Categories/    # Category management
│   │   │   ├── Dashboard/     # Main dashboard
│   │   │   ├── Products/      # Product management
│   │   │   └── Login/         # Admin login
│   │   ├── Cart/              # Shopping cart page
│   │   ├── Comparison/        # Product comparison
│   │   ├── Detail/            # Product detail page
│   │   └── Favourites/        # Favorites page
│   ├── Router/                 # Application routing
│   ├── store/                  # Redux store configuration
│   │   ├── cartSlice.ts       # Cart state management
│   │   ├── favouriteSlice.ts  # Favorites state
│   │   └── languageSlice.ts   # Language preference
│   ├── styles/                 # Global styles
│   ├── types/                  # TypeScript type definitions
│   ├── App.tsx                 # Root component
│   └── main.tsx                # Application entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind customization
└── vite.config.ts              # Vite configuration
```

---

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Loyiha-olcha
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Environment Configuration

Create a `.env` file in the root directory if needed:

```env
VITE_API_BASE_URL=https://api.olcha.uz
VITE_APP_NAME=Olcha.uz
```

### Step 4: Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will start at: `http://localhost:5174`

---

## 📝 Usage Guide

### Admin Panel Access

**Default Credentials:**

- **Username:** `admin`
- **Password:** `admin123`

> ⚠️ **Note:** These are static credentials for development. Replace with proper authentication in production.

### Navigation Paths

| Section    | Route                   | Description                 |
| ---------- | ----------------------- | --------------------------- |
| Dashboard  | `/dashboard`            | Overview and statistics     |
| Banners    | `/dashboard/banners`    | Manage promotional banners  |
| Categories | `/dashboard/categories` | Product category management |
| Products   | `/dashboard/products`   | Product catalog management  |
| Login      | `/admin/login`          | Admin authentication        |

### Key Features

#### 🏠 Dashboard Home

- View total counts of banners, categories, and products
- Recent activity feed
- Quick stats and insights

#### 🖼️ Banner Management

- Create new banners with image upload
- Edit existing banners
- Toggle active/inactive status
- Delete banners
- Grid view with preview images

#### 📂 Category Management

- Add new categories with icons
- Multi-language support (UZ/RU/EN)
- Active/inactive toggle
- Table view with sorting
- Icon picker integration

#### 📦 Product Management

- Add/edit products with detailed information
- Multi-language product names
- Price management with discounts
- Stock status tracking
- Rating and reviews display
- Image upload support
- Advanced search and filtering

---

## 🎨 Design System

### Color Palette

```css
/* Primary Gradient */
--gradient-primary: linear-gradient(135deg, #ef4444, #f97316);

/* Red Tones */
--red-500: #ef4444
--red-400: #f87171
--red-300: #fca5a5

/* Orange Tones */
--orange-500: #f97316
--orange-400: #fb923c
--orange-300: #fdba74
```

### Typography

- **Headings:** Bold, tracking-tight
- **Body:** Regular weight, readable line-height
- **Buttons:** Medium weight, uppercase tracking

### Spacing Scale

- Base unit: `4px`
- Common: `4, 8, 12, 16, 24, 32, 48, 64px`

### Border Radius

- Small: `8px`
- Medium: `12px`
- Large: `16px`
- XL: `20px`
- 2XL: `24px`

---

## 🔧 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Production

```bash
npm run build        # Create optimized build
npm run preview      # Serve production build locally
```

### Code Quality

```bash
npm run lint         # Check code quality
npm run format       # Format code with Prettier (if configured)
```

---

## 🌐 Internationalization (i18n)

The application supports multiple languages:

### Supported Languages

- 🇺🇿 **Uzbek (uz)** - Default
- 🇷🇺 **Russian (ru)**
- 🇬🇧 **English (en)**

### Adding New Translations

1. Navigate to `src/locales/[lang]/`
2. Edit the corresponding JSON file
3. Use translation keys in components:

```tsx
import { useTranslation } from "react-i18next";

const { t } = useTranslation();
<h1>{t("header.title")}</h1>;
```

---

## 🔐 Security Considerations

### Current Implementation

- localStorage-based authentication
- Static credentials for development
- Client-side route protection

### Production Recommendations

- Implement JWT token-based authentication
- Add refresh token mechanism
- Secure API endpoints with proper authentication
- Implement CSRF protection
- Add rate limiting
- Use HTTPS in production
- Sanitize user inputs
- Implement proper error handling

---

## 📊 Performance Optimization

### Implemented Features

- ✅ Code splitting with React Router
- ✅ Lazy loading for heavy components
- ✅ Image optimization with lazy loading
- ✅ Debounced search functionality
- ✅ Efficient state management with Redux

### Best Practices

- Minimize re-renders with React.memo
- Use useMemo for expensive calculations
- Implement virtual scrolling for large lists
- Optimize bundle size with tree shaking

---

## 🐛 Known Issues

Currently, there are no known critical issues. The application is stable and production-ready for frontend deployment.

---

## 🤝 Contributing

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines

- Follow ESLint rules
- Use TypeScript for type safety
- Write meaningful comments for complex logic
- Maintain consistent naming conventions (camelCase for variables/functions, PascalCase for components)
- Use functional components with hooks

---

## 📄 License

This project is proprietary software. All rights reserved.

---

## 👥 Contact Information

### Development Team

- **Project:** Olcha.uz E-Commerce Platform
- **Version:** 1.0.0
- **Last Updated:** March 2026

### Support

For questions, issues, or feature requests, please contact the development team through the appropriate channels.

---

## 🙏 Acknowledgments

- **Design Inspiration:** Modern e-commerce platforms
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **UI Framework:** [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)

---

## 📈 Future Enhancements

### Planned Features

- [ ] Backend API integration
- [ ] Real-time analytics dashboard
- [ ] Advanced product filtering
- [ ] Bulk operations (import/export)
- [ ] Email notifications
- [ ] Order management system
- [ ] Customer management
- [ ] Sales reporting
- [ ] Dark mode support
- [ ] PWA capabilities

### Roadmap

- **Q2 2026:** Backend integration and authentication
- **Q3 2026:** Advanced analytics and reporting
- **Q4 2026:** Mobile app version

---

<div align="center">

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

© 2026 Olcha.uz. All Rights Reserved.

</div>
