# Product Management System - Frontend

A modern, full-featured product management application built with React, TypeScript, and Tailwind CSS. This application provides complete CRUD operations for products with secure authentication and authorization.

## Features
Authentication & Authorization
- User registration with validation
- Secure login system
- JWT token-based authentication
- Protected routes (products accessible only to authenticated users)
- Automatic session management
- Token refresh and error handling

Product Management (CRUD)

- Create: Add new products with name, description, price, and status
- Read: View all products in a responsive grid layout
- Update: Edit existing product information
- Delete: Remove products with confirmation dialog

## Prerequisites
- Node.js (v16 or higher) (version used 20.19.5)
- npm or yarn
- Backend API running on /api/v1

## Installation
1. Create the project
clone project from: https://github.com/Draxler5i/products-ui
2. Install dependencies:
```
npm install 
```
3. Run project with:
```
npm run dev
```
4. Be sure to api https://github.com/Draxler5i/products-api is running with routes: 
```
api/v1
```
5. Configure ```VITE_API_BASE_URL``` environment variable, if you are running locally, you don't need configure it
