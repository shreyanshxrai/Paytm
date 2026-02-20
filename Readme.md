# Paytm
A simple Paytm-like wallet and money transfer application built using the MERN stack (MongoDB, Express, React, Node.js).

This project demonstrates authentication, balance management, and peer-to-peer money transfer functionality.

Tech Stack

Frontend:

React

Axios

React Router

Backend:

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Features

User Signup and Login

JWT-based Authentication

View Account Balance

Search Users

Send Money to Other Users

Protected Routes

Basic Transaction Handling

How to Run the Project

Clone the Repository

git clone <your-repository-url>
cd <project-folder>

Install Dependencies

Run the following command in both frontend and backend folders:

npm install

Configure Environment Variables

Create a .env file inside the backend folder and add:

DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start Backend Server

cd backend
npm start

Start Frontend

cd frontend
npm start

Database Setup

You can use MongoDB Atlas or local MongoDB.

Example MongoDB Atlas URL format:

mongodb+srv://username:password@cluster.mongodb.net/paytm

Replace DATABASE_URL in the .env file with your own MongoDB connection string.

Project Structure

/frontend – React frontend
/backend – Express server and API
/backend/models – Mongoose schemas
/backend/routes – API routes
/backend/middleware – Auth middleware

Future Improvements

Transaction history

Proper error handling and validations

Input sanitization

Rate limiting

Production-ready logging

Improved UI/UX

Author

Shreyansh Rai
B.Tech (Information Technology)
