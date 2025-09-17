# Nikhil-Portfolio

[![Build Status](https://img.shields.io/badge/deploy-vercel-blue)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

---

## 🚀 Project Overview

**Nikhil-Portfolio** — a clean, modern personal portfolio built with **Vite + React + Tailwind CSS**. It showcases projects, experience, and provides a contact form that sends messages directly to your email via **EmailJS** (no backend required).

This repo is perfect for sharing with recruiters, linking on your resume, and showing off frontend skills. Looks sharp, loads fast, and is easy to maintain.

---

## 🔥 Live Demo

> Add your Vercel URL here after deployment:

```
https://your-portfolio.vercel.app
```

---

## ✨ Features

- Responsive portfolio layout (mobile-first).
- Animated UI elements using `framer-motion`.
- Contact form with validation (Zod + React Hook Form).
- Email delivery via **EmailJS** (no server required).
- Theme-aware styling (light + dark friendly).
- Easy to deploy on Vercel / Netlify.

---

## 🧰 Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **Framer Motion** for micro-interactions
- **React Hook Form** + **Zod** for form validation
- **EmailJS** for contact form delivery
- **Lucide Icons** for crisp vector icons

---

## 📁 Project Structure

```
Nikhil-Portfolio/
├── public/                 # static assets (images, pdf)
├── src/
│   ├── components/         # About, Contact, Header, Projects, etc.
│   ├── pages/              # page components (if used)
│   ├── App.jsx
│   └── index.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ Setup & Local Development

1. Clone this repo:

```bash
git clone https://github.com/yourusername/Nikhil-Portfolio.git
cd Nikhil-Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create a local environment file `.env` in the project root (do **NOT** commit this file):

```bash
# .env
VITE_EMAILJS_SERVICE_ID=service_d9dien6
VITE_EMAILJS_TEMPLATE_ID=template_r7xldbh
VITE_EMAILJS_PUBLIC_KEY=2ZyU5JcfbxH8EI-Jr
```

4. Start dev server:

```bash
npm run dev
```

Open `http://localhost:5173` (or the URL shown) and test the contact form.

---

## 📧 EmailJS Integration (Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/) and add an email service (Gmail, Outlook, etc.).
2. Create a template (use variables like `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`).
3. Copy your **Service ID**, **Template ID**, and **Public Key** into the `.env` file (prefix with `VITE_`).
4. The contact form will call `emailjs.send(...)` using these values — no backend needed.

> Tip: Test locally before deploying. Check EmailJS **Email Logs** if emails don’t arrive.

---

## 🔒 Environment Variables & Security

- Never commit `.env` to Git. Add it to `.gitignore`.
- Use Vercel/Netlify environment variables for production. In Vercel, go to Project → Settings → Environment Variables and add the three `VITE_` keys.

In code you can access them as:

```js
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

---

## 📦 Build & Deploy (Vercel)

1. Push your repo to GitHub.
2. Go to [Vercel](https://vercel.com/) → Import Project → pick this repo.
3. Under **Environment Variables**, add the `VITE_` keys.
4. Deploy. Vercel will auto-build and give you a live URL.

---


## 📝 Contributing

Small tweaks welcome — fork, make a branch, and create a PR. If you want help customizing this portfolio for your brand, ping me.

---



## 🙋 Contact

If you want help with deployment, CI, or making this portfolio scream quality — reach out!

- Email: `nemalanikhil7@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/nikhil-nemala-643443275/`


---

Thanks for building something awesome — classic craftsmanship with modern tools. Tell recruiters you made it yourself. 💪
