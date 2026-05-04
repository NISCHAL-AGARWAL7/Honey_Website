# Honey Frontend

A premium, luxury-focused e-commerce website for a honey brand. It is designed to deliver a sophisticated browsing experience featuring glassmorphism, earthy/golden aesthetics, dark/light mode, and smooth micro-animations.

## 📖 About the Project

This application serves as a modern storefront for premium honey products. Instead of a traditional automated payment gateway, the platform facilitates a personalized ordering experience. Users can browse products, manage their cart, and checkout seamlessly by sending their order details directly to the brand via **WhatsApp** or **Email**.

## 🏗 Architecture & Flow

- **Frontend:** Built with [Next.js](https://nextjs.org/) (React 19) for performance, SEO, and seamless server-side rendering.
- **Headless CMS:** Uses **Notion** as the database. Product details, images, and content are fetched dynamically using the Notion API (`@notionhq/client`).
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) is used to manage the shopping cart state with persistent local storage, ensuring users don't lose their cart items upon refreshing.
- **Checkout Flow:** The cart directly integrates with WhatsApp and Email. When a user checks out, the application generates a pre-filled message with their order details and redirects them to the respective messaging platform.
- **Styling & UI:** [Tailwind CSS v4](https://tailwindcss.com/) handles responsive, utility-first styling.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) provides premium tactile feedback and micro-animations, while [Lenis](https://lenis.darkroom.engineering/) handles smooth page scrolling.

## 💻 Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Animations:** Framer Motion, Lenis
- **CMS Integration:** Notion API
- **Icons:** Lucide React, React Icons

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
