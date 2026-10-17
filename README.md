# 🏡 Real Estate Marketplace

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Chakra UI](https://img.shields.io/badge/Chakra--UI-v2-319795?style=for-the-badge&logo=chakraui&logoColor=white)](https://chakra-ui.com/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-11.18-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, responsive, and high-performance **Real Estate Marketplace Web Application** built with **Next.js (App Router)**, **Chakra UI**, and **Framer Motion**. The platform offers prospective homebuyers and renters an intuitive portal to discover, filter, inspect, and calculate finances for properties across major cities.

---

## 📸 Overview & Live Experience

Real Estate Marketplace empowers users with real-time property discovery:
- **Instant multi-parameter filtering** across property types, budgets, bedroom counts, and locations.
- **Deep-dive property showcases** with dynamic routing, multi-image lightbox galleries, and neighborhood highlights.
- **Financial decision tools** like an embedded, interactive Mortgage EMI calculator.
- **Interactive engagement** with one-click favoriting (with local persistence) and scheduled viewing request workflows.

---

## ✨ Key Features

### 🔍 1. Real-Time Search & Filter Engine
- **City & Neighborhood Search**: Instant text-based filter for locations (e.g., Mumbai, Pune, Goa, Delhi, Bangalore).
- **Property Type Selector**: Categorized browsing for *Apartments*, *Villas*, *Houses*, *Penthouses*, *Studios*, and *Offices*.
- **Bedrooms Filter**: Filter by 1+, 2+, 3+, or 4+ BHK configurations.
- **Interactive Price Range Slider**: Real-time slider adjusting maximum budget up to ₹10 Crore with immediate catalog updates.
- **Global Filter State**: Powered by custom React `FilterContext` for instant synchronization.

### 🏠 2. Dynamic Property Detail Pages (`/property/[id]`)
- **App Router Dynamic Routing**: SEO-friendly dynamic routes for every listing.
- **Interactive Image Gallery & Lightbox**: Multi-angle property viewer with modal expansion on click.
- **Comprehensive Property Metadata**: Price formatted in Indian Currency (INR `₹`), bedrooms, bathrooms, square footage, amenities list, and full descriptive copy.
- **Direct Agent Contact**: Embedded agent helpline and direct inquiries.

### 💰 3. Interactive Mortgage & EMI Calculator
- Real-time loan estimation algorithm based on standard financial amortization formulas:
  $$\text{EMI} = \frac{P \times r \times (1 + r)^n}{(1 + r)^n - 1}$$
- Pre-filled with the property's listing price.
- Live slider and input controls for **Loan Amount**, **Interest Rate (%)**, and **Tenure (Years)**.
- Real-time monthly installment feedback.

### ❤️ 4. Persistent Favorites / Wishlist
- Toggle heart icon on property cards with micro-animations.
- **LocalStorage Persistence**: Saved properties survive browser refreshes.
- Dedicated `/favorites` page with empty-state handling and quick navigation back to listings.
- Navbar badge showing real-time count of saved items.

### 📅 5. Book a Viewing Workflow
- In-page consultation and site-visit scheduler form.
- Form validation for Name, Email, Phone Number, and Custom Inquiry message.
- Async simulated submission with loading spinners and Chakra UI toast notifications.

### 📱 6. Mobile-First Responsive Design
- Clean navigation bar with collapsible slide-out drawer on mobile devices.
- Grid layouts adapting seamlessly from 1 column on mobile to 2 columns on tablets and 3 columns on desktops.
- Fluid typography and touch-optimized interactive controls.

### ⚡ 7. Production-Grade Hydration & Performance
- Custom **Emotion Cache Registry** tailored for Next.js App Router to eliminate SSR/CSR style mismatch warnings.
- Server-inserted HTML style injection for instantaneous zero-flicker rendering.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Hybrid Server & Client Rendering, File-based Routing |
| **Language** | [JavaScript / React 19](https://react.dev/) | Component architecture, Hooks & Context API |
| **UI Library** | [Chakra UI (v2)](https://chakra-ui.com/) | Accessible, themeable UI component system |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth hover transitions, fade-ins, and modal gestures |
| **Icons** | [React Icons (FontAwesome)](https://react-icons.github.io/react-icons/) | Vector icons for amenities, navigation, and features |
| **State Management** | React Context API | `FavoritesContext` (persisted), `FilterContext` (search) |
| **Styling Engine** | Emotion (`@emotion/react`, `@emotion/cache`) | Zero-mismatch CSS-in-JS style injection |

---

## 📂 Project Architecture

```
real-estate-marketplace/
├── public/                 # Static assets and favicons
├── src/
│   ├── app/                # Next.js App Router directory
│   │   ├── favorites/      # Wishlist / Saved properties page
│   │   │   └── page.js
│   │   ├── property/       # Dynamic property detail routes
│   │   │   └── [id]/
│   │   │       └── page.js
│   │   ├── globals.css     # Global reset and typography styling
│   │   ├── layout.js       # Root application layout and metadata
│   │   ├── not-found.js    # Custom 404 Error page
│   │   └── page.js         # Homepage with Hero, Filters & Grid
│   ├── components/         # Reusable presentation & feature components
│   │   ├── BookingForm.js        # Schedule viewing modal/form
│   │   ├── Footer.js             # Site-wide responsive footer
│   │   ├── HeroSection.js        # Engaging homepage banner
│   │   ├── ImageGallery.js       # Property image grid & modal lightbox
│   │   ├── MortgageCalculator.js # Real-time EMI calculation tool
│   │   ├── Navbar.js             # Navigation bar with mobile drawer & counter
│   │   ├── PropertyCard.js       # Animated listing card with favorites toggle
│   │   ├── providers.js          # Emotion Cache & Context wrappers
│   │   └── SearchFilters.js      # Multi-criteria search & slider bar
│   ├── context/            # Global React Context providers
│   │   ├── FavoritesContext.js   # Saved properties + LocalStorage sync
│   │   └── FilterContext.js      # Global search & filter state
│   └── data.js             # Comprehensive dataset of 20+ rich properties
├── jsconfig.json           # Path alias configurations (`@/*`)
├── next.config.mjs         # Next.js compiler settings
├── package.json            # Dependencies and npm scripts
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
- **Node.js**: `v18.17.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm** or **yarn** package manager

### 1. Clone the Repository
```bash
git clone https://github.com/The-Sahil/real-estate-marketplace.git
cd real-estate-marketplace
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```

> **Note**: `--legacy-peer-deps` ensures seamless compatibility between Chakra UI v2 and React 19.

### 3. Start Development Server
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

### 4. Build for Production
To generate an optimized production bundle:
```bash
npm run build
npm start
```

---

## 📊 Data Schema Reference

Each property object in `src/data.js` conforms to the following schema:

```typescript
interface Property {
  id: number;
  title: string;
  price: number;            // Stored in INR (₹)
  image: string;            // Main cover image URL
  images: string[];         // High-res gallery URLs
  beds: number;             // Bedroom count
  baths: number;            // Bathroom count
  sqft: number;             // Carpet/Super built-up area
  type: "Apartment" | "House" | "Villa" | "Penthouse" | "Studio" | "Office";
  location: string;         // City name
  amenities: string[];      // e.g. ["Pool", "Gym", "WiFi", "Parking"]
  description: string;      // Detailed markdown/text description
}
```

---

## 🔮 Future Roadmap

- [ ] **Authentication**: User accounts with NextAuth.js / Supabase Auth.
- [ ] **Interactive Maps**: Mapbox / Google Maps integration for neighborhood exploration.
- [ ] **Agent Dashboard**: Portal for property owners and realtors to list and edit properties.
- [ ] **Virtual 3D Tours**: Matterport / Three.js 360-degree room walkthroughs.
- [ ] **Backend Database**: Integration with PostgreSQL / Prisma ORM for dynamic listings.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Sahil Vishwakarma**  
- GitHub: [@The-Sahil](https://github.com/The-Sahil)
- Repository: [real-estate-marketplace](https://github.com/The-Sahil/real-estate-marketplace)
