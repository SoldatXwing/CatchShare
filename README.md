# React SupaBase Fishing Catch Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-v18-blue.svg)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E)](https://supabase.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-latest-blueviolet.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-teal.svg)](https://tailwindcss.com/)
[![Status: In Progress](https://img.shields.io/badge/Status-In_Progress-yellowgreen.svg)]()

## Description

A web application for logging fishing catches, built with React and Supabase. This application allows users to record details about their fishing trips, including location, fish type, weather conditions, and more. It utilizes SupaBase for backend services such as authentication and database storage.

## Features

- User authentication with SupaBase Auth
- Secure data storage with SupaBase Firestore
- User-friendly interface built with React and Tailwind CSS
- Responsive design

## Technologies Used

- [React](https://reactjs.org/)
- [Supabase](https://supabase.com/)
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
4. Set up Supabase project and configuration
   - Create a new project in the [Supabase Console](https://supabase.com/)
   - Go to **Authentication > Providers** and enable Email/Password authentication.
   - Go to **Database** and create necessary tables for user management if needed.
   - Obtain your Supabase API credentials from **Project Settings > API**.
   - Replace Supabase configuration in `src/supabase.config.ts` with your own credentials.

5. Start the development server
   ```sh
   npm run dev
   ```

## Usage

- Register or log in to your account to start logging your fishing catches.
- Navigate through the dashboard to view and manage your catch records.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for feature requests or bug fixes.
