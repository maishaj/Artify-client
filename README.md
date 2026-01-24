Artify – A Creative Artwork Showcase Platform

Artify is a modern, single-page online art-sharing platform designed for artists to upload, display, and manage their creative works. The platform fosters a community where art lovers can explore diverse galleries, curate their personal favorites, and interact with artists through appreciation systems.

Live Site URL: https://artify-4a56d.web.app/

🚀 Features

Artist Portfolio Management: Logged-in users can easily add, update, and delete their own artworks through a personalized gallery.

Search and Discovery: Explore a vast collection of public artworks with built-in search functionality by title or artist name, and filter works by category.

Engagement System: A dynamic "Like" system using MongoDB operators to track artwork popularity and a "Favorites" list for personal curation.

Responsive Design: A fully mobile, tablet, and desktop-responsive interface ensuring a seamless experience across all devices.

🛠️ Technologies Used

Frontend: React.js, React Router, Tailwind CSS.

Backend: Node.js, Express.js.

Database: MongoDB.

Authentication: Firebase Authentication (Email/Password & Google Login).

Deployment: Vercel (For both Client and Server).

🧱 Layout Structure
Home Page

Banner/Slider: Highlighting trending artists and featured art.

Featured Artworks: Displays the 6 most recent artworks sorted dynamically from the database.

Extra Sections: Includes 'Top Artists of the Week' and 'Community Highlights' to keep users engaged.

Authentication

Login & Register: Secure entry points with password validation (uppercase, lowercase, minimum 6 characters) and Google OAuth options.

Private Routes

Add Artwork: A dedicated form for artists to contribute new pieces to the platform.

My Gallery: A management hub for users to view, update, or remove their uploaded content.

My Favorites: A curated collection of artworks the user has liked or saved.
