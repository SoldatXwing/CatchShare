# React Firebase Fishing Catch Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-v18-blue.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-latest-orange.svg)](https://firebase.google.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-latest-blueviolet.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-teal.svg)](https://tailwindcss.com/)
[![Status: In Progress](https://img.shields.io/badge/Status-In_Progress-yellowgreen.svg)]()

## Description

A web application for logging fishing catches, built with React and Firebase. This application allows users to record details about their fishing trips, including location, fish type, weather conditions, and more. It utilizes Firebase for backend services such as authentication and database storage.

## Features

- User authentication with Firebase Auth
- Secure data storage with Firebase Firestore
- User-friendly interface built with React and Tailwind CSS
- Responsive design

## Technologies Used

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Installation

1. Clone the repository
   ```sh
   git clone https://github.com/SoldatXwing/CatchShare
   ```
2. Navigate to the project directory
   ```sh
   cd CatchShareApp
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Set up Firebase project and configuration
   - Create a new project in the [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database in your Firebase project.
   - Obtain your Firebase configuration object from Project settings > General > Web apps.
   - Replace the placeholder Firebase configuration in `src/firebase.config.ts` with your own configuration.

5. Start the development server
   ```sh
   npm run dev
   ```

## Usage

- Register or log in to your account to start logging your fishing catches.
- Navigate through the dashboard to view and manage your catch records.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for feature requests or bug fixes.
