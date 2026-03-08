# 🎨 Artify – Client

## 📌 Project Overview

**Artify** is a modern, single-page online art-sharing platform designed for artists to upload, display, and manage their creative works.  
The platform fosters a community where art lovers can explore diverse galleries, curate their personal favorites, and interact with artists through appreciation systems.

---

## 🔗 Project Links

- 🌐 **Live Site:** https://artify-4a56d.web.app/  
- 💻 **Client Repository:** https://github.com/maishaj/Artify-client  
- 💻 **Server Repository:** https://github.com/maishaj/Artify-server  

---

# ✨ Key Features

### 👤 Authentication
- Secure Email & Password login  
- Google OAuth login  
- Password validation 
- Protected routes for registered users  

### 🖼️ Artwork Marketplace
- Browse artworks by title, artist, or category  
- Search and filter artworks  
- View detailed artwork information  

### 👨‍🎨 Artist Portfolio Management
- Add new artworks  
- Update existing artworks  
- Delete artworks  
- Manage your personal gallery  

### ❤️ Engagement System
- Like artworks to show appreciation  
- Add artworks to "Favorites" for personal curation  

### 📱 Responsive Design
- Fully mobile, tablet, and desktop-friendly UI  
- Smooth user experience across all devices  
---

# 🛠 Main Technologies

- **Frontend:** React.js, React Router, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** Firebase Authentication (Email/Password & Google Login)  
- **Hosting (Frontend):** Firebase Hosting  
- **Hosting (Backend):** Vercel  

---

# 📦 Dependencies

Main dependencies used:

- firebase  
- sweetalert2  
- react-icons  
- daisyui  
- tailwindcss  

---

# ⚙️ Setup & Installation

Follow these steps to run the project locally.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/maishaj/The-lost-archive.git
cd The-lost-archive
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Environment Configuration

Create a **`.env.local`** file in the root directory and add the following variables:

```env
VITE_APIKEY: your_api_key
VITE_AUTHDOMAIN: your_auth_domain
VITE_PROJECTID: your_project_id
VITE_STORAGEBUCKET: your_storage_bucket
VITE_MESSAGINGSENDERID: your_messaging_senderid
VITE_APPID: your_app_id
```

---

## 4️⃣ Run the Development Server

```bash
npm run dev
```

Then open your browser and visit:

```
http://localhost:3000
```

---

