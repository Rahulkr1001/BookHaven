# BookHaven


BookHaven is a full-stack bookstore application designed to provide users with a seamless browsing experience. This project aims to create an intuitive and efficient online platform for discovering and accessing books.


## Recent Updates
- **Security Enhancement (May 30, 2025)**: Removed .env file from Git tracking and added to .gitignore for better security
- **Frontend Update**: Updated Tailwind configuration for improved styling
- **Contact Information**: Updated maintainer contact details


## Features

- User Authentication: Secure login, logout, and signup functionality with password hashing.
- Responsive UI: Designed with React and TailwindCSS to ensure a smooth experience across devices.
- Dark Theme: Enhances user experience and accessibility.
- Contact Form: Allows users to send inquiries and improve customer support.
- CRUD Operations: RESTful API to manage book data efficiently.
- Data Storage: Utilizes MongoDB and Mongoose for backend data storage and schema management.
- Form Handling: Integrated React Hook Form for efficient form handling and validation.
- Navigation: Implemented React Router DOM for seamless navigation between components.
- Premium Content: Logged-in users can access premium books.
- Real-time Feedback: React Hot Toast for notifications.
- Code Quality: ESLint for maintaining code quality and consistency.



## Technologies Used
### Backend
- MongoDB
- Express.js
- Node.js
- bcryptjs
- cors
- dotenv
- mongoose
- nodemon
### Frontend
- React
- React DOM
- React Hook Form
- React Hot Toast
- React Router DOM
- React Slick
- Slick Carousel
- TailwindCSS
- DaisyUI
- Vite
### Development Tools
- Axios
- ESLint
- PostCSS
- Autoprefixer
## Getting Started
### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB instance running locally or on a cloud service.
### Installation
#### 1. Clone the repository:

```bash
git clone https://github.com/Rahulkr1001/BookHaven.git
cd BookHaven
```
#### 2. Install backend dependencies:
Copy code
```bash
cd backend
```
```bash
   npm install
```
#### 3.  Install frontend dependencies:
```bash
   cd ../frontend
```
```bash
   npm install
```


## Configuration
### Environment Variables
Create a `.env` file in the backend directory with the following structure:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
Mongo_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```
Note: The `.env` file is not tracked in Git for security reasons. Make sure to create it locally.

## Run Locally

#### 1.Start the backend server:

```bash
  cd backend
npm start
```

#### 2.Start the frontend server

```bash
  cd ../frontend
npm run dev
```
#### 3.Access the application:
Open your browser and navigate to http://localhost:5173/



## Usage
- Authentication: Create an account or log in to access premium content.
- Browse Books: Navigate through different sections using the menu.
- Contact Us: Use the contact form for any inquiries or support.


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Contact
For any inquiries or issues, please open an issue on the repository or contact the maintainer at [rahulkrsharma3580@gmail.com].
