# Nexus - Frontend

A modern, responsive social networking and messaging application built with React and Vite. This frontend provides a seamless user experience for authentication, social interactions, messaging, and profile management.

## Overview

Nexus Frontend is a feature-rich single-page application (SPA) that connects users through posts, real-time messaging, and profile management. Built with cutting-edge technologies including React 19, Tailwind CSS, Radix UI, and Framer Motion for smooth animations.

## Features

- **Authentication System**
  - User registration and login
  - Token-based authentication (JWT)
  - Protected routes and public routes
  - Automatic token refresh on unauthorized requests

- **Home Feed**
  - View posts from users
  - Create new posts
  - Like and interact with posts
  - Stories feature
  - Left and right sidebars for navigation and recommendations

- **Messages**
  - Real-time messaging with other users
  - Call functionality with modal
  - Message history
  - User search and selection

- **User Profiles**
  - View user profiles
  - Edit profile information
  - View user posts and stories

- **Responsive Design**
  - Mobile-first approach
  - Tailwind CSS styling
  - Smooth animations with Framer Motion

## Technology Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.0
- **Styling**:
  - Tailwind CSS 3.4.19
  - Tailwind Merge
  - Class Variance Authority
- **UI Components**:
  - Radix UI
  - shadcn/ui components
- **Routing**: React Router DOM 7.13.1
- **HTTP Client**: Axios 1.13.6
- **Animations**: Framer Motion 12.36.0
- **Notifications**: React Hot Toast 2.6.0
- **Icons**: Lucide React 0.577.0
- **Linting**: ESLint 9.39.4

## Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── axiosClient.js          # HTTP client with interceptors
│   ├── assets/                      # Images, logos, media files
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.jsx          # Main header component
│   │   └── ui/                      # Reusable UI components
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.jsx
│   │       └── scroll-area.tsx
│   ├── contexts/
│   │   └── AuthContext.jsx         # Global authentication state
│   ├── data/
│   │   ├── mockData.js             # Mock data for development
│   │   ├── mockPosts.js
│   │   ├── mockProfileData.js
│   │   ├── mockStories.js
│   │   └── mockUsers.js
│   ├── hooks/
│   │   └── useInfiniteScroll.js    # Custom hooks
│   ├── lib/
│   │   └── utils.js                # Utility functions
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── HomePage.jsx
│   │   │   ├── useHome.js          # Custom hook for home page
│   │   │   └── components/         # Home-specific components
│   │   ├── Login/
│   │   │   ├── LoginPage.jsx
│   │   │   └── useLogin.js
│   │   ├── Register/
│   │   │   ├── RegisterPage.jsx
│   │   │   └── useRegister.js
│   │   ├── Messages/
│   │   │   ├── MessagesPage.jsx
│   │   │   ├── useMessages.js
│   │   │   └── components/         # Messages-specific components
│   │   └── Profile/
│   │       ├── ProfilePage.jsx
│   │       ├── useProfile.js
│   │       └── components/         # Profile-specific components
│   ├── routes/
│   │   ├── ProtectedRoute.jsx      # Route protection for authenticated users
│   │   └── PublicRoute.jsx         # Route for public access (login/register)
│   ├── services/
│   │   ├── authService.js          # Authentication API calls
│   │   └── userService.js          # User API calls
│   ├── App.jsx                     # Main app component with routing
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles
├── public/                          # Static files
├── package.json                     # Dependencies and scripts
├── vite.config.js                  # Vite configuration
├── jsconfig.json                   # JavaScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                        # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository and navigate to frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:

   ```env
   VITE_API_BASE_URL_IDENTITY=http://localhost:8080/api
   ```

   Replace `http://localhost:8080/api` with your backend API base URL.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (default Vite port)

## Available Scripts

- **`npm run dev`** - Start the development server with HMR (Hot Module Replacement)
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_API_BASE_URL_IDENTITY=<Your Backend API URL>
```

The application expects the backend to return responses in this format:

```json
{
  "code": 1000,
  "message": "Success",
  "result": {
    /* actual data */
  }
}
```

### Axios Interceptors

The Axios client is configured with automatic interceptors:

- **Request Interceptor**: Automatically adds JWT token to all requests
- **Response Interceptor**: Unwraps API responses and handles 401 (Unauthorized) errors by redirecting to login

> See `src/api/axiosClient.js` for implementation details

## Authentication Flow

1. User logs in via LoginPage with credentials
2. Backend returns JWT token
3. Token is stored in localStorage as `nexus_token`
4. AuthContext updates user state and redirects to home
5. Protected routes check authentication status
6. Token is automatically attached to all API requests
7. On 401 error, user is redirected to login and token is cleared

## Key Features Explained

### Protected Routes

Routes like `/home`, `/messages`, and `/profile` are protected and require authentication. Unauthenticated users are redirected to `/login`.

### Public Routes

Routes like `/login` and `/register` are public and redirect authenticated users back to home.

### Global State Management

Authentication state is managed via React Context (`AuthContext.jsx`), avoiding prop drilling and providing global access to:

- Current user information
- Authentication status
- Login/logout functions

### Responsive UI

- Built with Tailwind CSS for responsive design
- Radix UI components for accessible interactions
- Mobile-first approach
- Smooth animations with Framer Motion

## Development Notes

### Component Structure

- **Pages**: Full-page components with custom hooks (e.g., `useHome.js`)
- **Components**: Reusable components organized by feature
- **Services**: API communication layer (authService, userService)
- **Hooks**: Custom React hooks for reusable logic
- **Contexts**: Global state management (AuthContext)

### Adding New Pages

1. Create a new folder in `src/pages/`
2. Create page component (e.g., `NewPage.jsx`)
3. Create custom hook (e.g., `useNewPage.js`)
4. Add route in `App.jsx`
5. Protect route if needed using `<ProtectedRoute />`

### API Integration

Use the pre-configured Axios client from `src/api/axiosClient.js`:

```javascript
import axiosClient from "@/api/axiosClient";

// GET request
const data = await axiosClient.get("/endpoint");

// POST request
const response = await axiosClient.post("/endpoint", { data });
```

Token and error handling are automatically managed.

## Debugging

- Check browser console for errors
- Verify `.env.local` has correct API URL
- Use React DevTools browser extension for component inspection
- Check network tab in DevTools for API calls

## Troubleshooting

### "Cannot find module" errors

- Run `npm install` to ensure all dependencies are installed
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Token/Authentication issues

- Clear localStorage: Open DevTools → Application → localStorage → Clear
- Check that backend is running and API URL is correct in `.env.local`
- Verify token format in network requests (should be `Bearer <token>`)

### Style issues

- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Restart dev server: Stop and run `npm run dev` again

## Deployment

To deploy to production:

1. Build the project:

   ```bash
   npm run build
   ```

2. The `dist/` folder contains optimized production files

3. Deploy to your hosting platform (Netlify, Vercel, etc.)

4. Update environment variables on the hosting platform

## Contributing

When contributing to this project:

- Follow the existing code structure and naming conventions
- Use meaningful commit messages
- Test features before submitting
- Update this README if adding significant features
- Run `npm run lint` before committing

## License

This project is part of the Nexus application ecosystem.
