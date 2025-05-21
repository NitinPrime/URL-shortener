![image](https://github.com/user-attachments/assets/72fee19c-b7ea-4d74-94cd-60ac749c3398)# URL Shortener

A simple URL shortener web application with a Node.js + Express backend and React frontend. This project allows users to create shortened URLs and redirect to the original URLs.

---

## Features

- Shorten long URLs with a unique short code
- Redirect short URLs to original URLs
- Simple and clean React frontend interface
- MongoDB for data storage

---

## Technologies Used

- Backend: Node.js, Express, Mongoose, MongoDB
- Frontend: React, Axios
- Unique ID generation: shortid

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database (Atlas or local)
- Git installed

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/<your-github-username>/url-shortener.git
cd url-shortener
Backend Setup

bash
Copy
Edit
cd backend
npm install
Create .env file in backend/ folder

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
BASE_URL=http://localhost:3000
Replace your_mongodb_connection_string_here with your MongoDB URI.

BASE_URL is the frontend URL.

Start backend server

bash
Copy
Edit
npm run dev
The backend server will start on port 5000.

Frontend Setup

Open a new terminal, navigate to frontend:

bash
Copy
Edit
cd ../frontend
npm install
npm start
The React app will run on http://localhost:3000.

Usage
Open your browser and go to http://localhost:3000

Enter the long URL and submit to get a short URL.

Use the short URL to redirect to the original URL.

API Endpoints (Backend)
POST /api/url/shorten - Create a short URL
Request Body:

json
Copy
Edit
{
  "originalUrl": "https://www.example.com"
}
GET /:shortUrlCode - Redirect to original URL

Folder Structure
bash
Copy
Edit
url-shortener/
├── backend/            # Node.js backend code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/           # React frontend code
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
Notes
Make sure your MongoDB server is running or your MongoDB Atlas URI is correct.

The .env file is ignored by git for security.

This project is for educational/demo purposes.


License
MIT License

Authors
Nitin
Pooja

```

SCREENSHOTS:
1) A long link found on the web which we need to shorten.

<img width="1280" alt="image" src="https://github.com/user-attachments/assets/28a331a1-e2ab-4d6b-b3ed-58d4916fea5a" />




2)The application's webpage

![image](https://github.com/user-attachments/assets/b5cac550-654f-4381-9d59-bc3ffe19989d)


3) Output (A shortened link!)

<img width="527" alt="image" src="https://github.com/user-attachments/assets/50bbfddc-5faa-4000-83ca-4eec514c6906" />





