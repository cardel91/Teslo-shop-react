# 🛒 Teslo Shop React

A simulated e-commerce SPA built during **Sections 18–22** of the *React: De cero a experto* course by Fernando Herrera (Udemy).  
This project reproduces a simplified online store with product listing, cart, checkout flows and authentication — implemented using modern React patterns, custom hooks, and popular libraries.

Repository: https://github.com/cardel91/Teslo-shop-react

---


## ✨ Features

- 🛍️ Product listing, filtering and pagination  
- 🔎 Product detail pages  
- 🧾 Cart management and checkout simulation  
- 🔐 Authentication using JWT (login / register)  
- 🔁 Mutations and server interactions with **TanStack Query (useMutation)**  
- 🧩 Form handling with **react-hook-form**  
- 🎨 UI components with **shadcn/ui**  
- 🧠 Global state with **Zustand** (cart, UI state)  
- 🔌 HTTP requests via **axios**  
- ✅ Protected routes and role-aware UI  
- 🧪 Unit/integration tests (where applicable)  

---

## 🛠️ Built With

- React (Functional components + hooks)  
- Vite (dev server & build)  
- TanStack Query (useMutation / useQuery)  
- react-hook-form (form validation & management)  
- shadcn/ui (UI primitives)  
- Zustand (lightweight global state)  
- axios (HTTP client)  
- JWT for authentication tokens  
- Vitest / Testing Library (optional test setup)

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/cardel91/Teslo-shop-react.git
cd Teslo-shop-react

# Install dependencies
npm install
# or
pnpm install
```

---

## ⚙️ Available Scripts

In the project directory, you can run:

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests with Vitest (if configured)
npm run test
```

---

## 🔧 Usage / Development Notes

- The app uses **TanStack Query** for server state. useMutation is used for operations such as creating orders, updating user/cart, and auth flows.  
- Forms are built using **react-hook-form** for validation and performance.  
- **Zustand** stores lightweight global state (cart contents, UI toggles).  
- **JWT tokens** are stored according to the project's security decisions (localStorage / cookies) — follow the codebase for exact implementation.  
- **Axios** is configured with interceptors to attach auth token and handle refresh/error flows where implemented.

---

## 🧪 Testing

If tests are included, run:

```bash
npm run test
```

Add tests for hooks, utils, and components using Vitest + Testing Library.

---

## 🏗️ Project Structure (example)

```
src/
├─ components/
├─ hooks/
├─ pages/
├─ store/        # zustand stores
├─ services/     # axios instance, api calls
├─ routes/
├─ utils/
└─ tests/
```

---

## 📌 Course Reference

> 📘 **Course**: [React: De cero a experto - Edición 2025](https://www.udemy.com/course/react-cero-experto/)
> 🎓 **Instructor**: Fernando Herrera

---

## 📄 License

This project is for educational purposes as part of the Udemy course and is not intended for commercial use.

---
