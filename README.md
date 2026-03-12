
# TodoNote App

A simple **React Todo & Notes application** that allows users to create, manage, and organize notes after authentication.

This project is built using **React, Redux Toolkit, Redux-Saga, React Router, and Tailwind CSS** with state persistence using **localStorage**.

---

# Features

- User Authentication (Signup / Login)
- Dashboard for navigation
- Create, edit, and delete notes
- Modal based note creation
- Delete confirmation modal
- Persistent state using localStorage
- Toast notifications for user feedback
- Protected layout for authenticated pages

---

# Tech Stack

### Frontend
- React
- Vite

### State Management
- Redux Toolkit
- Redux Saga
- React Redux

### Routing
- React Router

### Styling
- Tailwind CSS
- Bootstrap
- Material UI

### Utilities
- Nanoid (for unique IDs)
- React Toastify (notifications)
- Redux Persist (local storage persistence)

---

# Project Structure

```
src/
│
├── app/
│   ├── store.jsx
│   ├── rootReducer.jsx
│   ├── rootSaga.jsx
│   ├── authSlice.jsx
│   └── todoSlice.jsx
│
├── components/
│   ├── AuthLayout.jsx
│   ├── NoteCard.jsx
│   ├── NoteModal.jsx
│   └── DeleteModal.jsx
│
├── pages/
│   ├── login.jsx
│   ├── signup.jsx
│   ├── dashboard.jsx
│   ├── todos.jsx
│   ├── forgotpassword.jsx
│   └── resetpassword.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── assets/
│
├── main.jsx
└── App.jsx
```

---

# Installation

Clone the repository

```
git clone <repository-url>
```

Navigate to the project folder

```
cd todonote
```

Install dependencies

```
npm install
```

---

# Running the App

Start the development server

```
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---

# Redux Architecture

The application uses **Redux Toolkit** with **Redux Saga** for state management.

### authSlice
Handles:
- user signup
- user login
- storing current user
- authentication errors

### todoSlice
Handles:
- creating notes
- updating notes
- deleting notes
- storing note list

### Redux Persist
Used to store the Redux state in **localStorage** so data remains after page refresh.

---

# Main Components

### AuthLayout
Layout wrapper used for authentication pages.

### NoteCard
Displays individual note information.

### NoteModal
Modal used to create or edit notes.

### DeleteModal
Confirmation modal for deleting notes.

---

# Routes

| Route | Description |
|------|-------------|
| /login | Login page |
| /signup | Signup page |
| /dashboard | User dashboard |
| /todos | Notes management |
| /forgotpassword | Reset password request |
| /resetpassword | Password reset page |

---

# Future Improvements

- Backend integration
- Real authentication system
- Cloud database storage
- Note categories and tags
- Search and filtering
- Dark mode

---

# Author

Created as a **React + Redux learning project**.
