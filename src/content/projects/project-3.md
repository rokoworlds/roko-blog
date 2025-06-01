---
title: 'Memory Game'
description: 'About the game'
pubDate: 2025-04-05

---

# 🚀 Project 'Jottings'

**Description:**  
Notes-taking web application rebuilt using React, TypeScript, and Vite.

---

## 🚀 Features

- ⚡️ Built with Vite for fast development and build performance
- 🧠 Markdown support via `react-markdown`
- 🏷️ Tag-based note categorization using `react-select`
- 🧭 Client-side routing with `react-router-dom`
- 🎨 Styled with Tailwind CSS
- 🔍 Unique note identifiers using `uuid`

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Markdown**
- **React Router DOM**
- **React Select**


## 🧩 Usage of useLocalStorage in This Project
The custom useLocalStorage hook plays a crucial role in persisting user data—specifically notes and tags—across browser sessions without the need for a backend or external storage system. It wraps React state logic and automatically syncs it with localStorage.

🔄 How It's Used
In the app, this hook is used to store and retrieve:

✅ User notes (title, body, tags)

✅ Tag lists for filtering and organizing notes


## Demo:
https://rokoworlds.github.io/jottings/